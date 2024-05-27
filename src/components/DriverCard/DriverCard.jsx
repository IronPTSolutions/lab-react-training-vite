import Rating from "../Rating/Rating";
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <div className="DriverCard-wrapper">
        <div className="DriverCard-img">
          <img src={img} alt={name} />
        </div>
        <div className="DriverCard-body">
          <h4>{name}</h4>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    </div>
  )
}

export default DriverCard;