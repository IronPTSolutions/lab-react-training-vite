import { useState } from 'react';
import students from '../../data/berlin.json';
import '../IdCard/IdCard.css'
import './Facebook.css'

const IdCard = ({ lastName, firstName, country, isStudent, img }) => {
  const renderProp = (title, value) => {
    return (
      <p><strong>{title}</strong>: {value}</p>
    )
  }
  return (
    <div className="IdCard">
      <div>
        <img src={img} alt={firstName} />
      </div>
      <div className="IdCard-body">
        {renderProp('First name', firstName)}
        {renderProp('Last name', lastName)}
        {renderProp('Country', country)}
        {renderProp('Type', isStudent ? 'Student' : 'Teacher')}
      </div>
    </div>
  )
}
const countries = students.map(student => student.country).filter((country, index, arr) => arr.indexOf(country) === index);

const Facebook = () => {
  const [currentCountry, setCurrentCountry] = useState(null)

  const handleCountryClick = (event) => {
    setCurrentCountry(event.target.value)
  }

  const studentsToRender = currentCountry
    ? students.filter(student => student.country === currentCountry)
    : students

  return (
    <div className="Facebook">
      <div className="Facebook-actions">
        <button className={!currentCountry ? 'selected' : ''} onClick={handleCountryClick} >All</button>
        {countries.map(country => (
          <button
            className={currentCountry === country ? 'selected' : ''}
            onClick={handleCountryClick} value={country} key={country}
          >
            {country}
          </button>
        ))}
      </div>
      <div>
        {studentsToRender.map(student => (
          <IdCard key={student.img} {...student} />
        ))}
      </div>
    </div>
  )
}

export default Facebook;