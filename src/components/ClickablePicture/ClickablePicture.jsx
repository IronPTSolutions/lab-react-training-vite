import { useState } from "react"
import glasses from '../../assets/images/glasses.png'
import './ClickablePicture.css';

const ClickablePicture = ({ img }) => {
  const [showClick, setShowClicked] = useState(false);

  return (
    <div className="ClickablePicture" onClick={() => setShowClicked(!showClick)}>
      <img className="ClickablePicture-img" src={img} alt="Photo" />
      {showClick ? (
        <img className="ClickablePicture-glasses" src={glasses} alt="Glasses" />
      ) : null}
    </div>
  )
}

export default ClickablePicture