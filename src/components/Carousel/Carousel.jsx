import { useState } from 'react';
import './Carousel.css'

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const maxIndex = images.length - 1;

  const handleLeft = () => {
    const nextIndex = imageIndex - 1;

    if (0 > nextIndex) {
      setImageIndex(maxIndex);
    } else {
      setImageIndex(nextIndex)
    }
  }

  const handleRight = () => {
    const nextIndex = imageIndex + 1

    if (maxIndex < nextIndex) {
      setImageIndex(0);
    } else {
      setImageIndex(nextIndex)
    }
  }

  return (
    <div className="Carousel">
      <button onClick={handleLeft}>Left</button>
      <img height={120} src={images[imageIndex]} alt="Carousel" />
      <button onClick={handleRight}>Right</button>
    </div>
  )
}

export default Carousel;