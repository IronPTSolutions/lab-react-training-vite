import PropTypes from 'prop-types';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const renderProp = (title, value) => {
    return (
      <p><strong>{title}</strong>: {value}</p>
    )
  }
  return (
    <div className="IdCard">
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div className="IdCard-body">
        {renderProp('First name', firstName)}
        {renderProp('Last name', lastName)}
        {renderProp('Gender', gender)}
        {renderProp('Height', `${height}cm`)}
        {renderProp('Birth', birth.toString())}
      </div>
    </div>
  )
}

IdCard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
}

export default IdCard;