import visa from '../../assets/images/visa.png'
import masterCard from '../../assets/images/master-card.svg'
import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const getCardImage = () => {
    if (type === 'Visa') {
      return visa
    }
    if (type === 'Master Card') {
      return masterCard
    }

    return ""
  }

  const getCardNumber = () => {
    return `**** **** **** ${number.slice(-4)}`
  }
  return (
    <div className="CreditCard" style={{ backgroundColor: bgColor, color }}>
      <div className="CreditCard-type">
        <img src={getCardImage()} alt={type} />
      </div>
      <div>{getCardNumber()}</div>
      <div>
        <div className="CreditCard-info">
          <p>Expires {expirationMonth}/{expirationYear}</p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  )
}

export default CreditCard