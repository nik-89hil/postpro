import React from 'react'
import './detailstyle.css'

const Slider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };
  return (
    <>
     <div className="image-slider">
      <div className="slider-container">
        <img draggable="false" loading='lazy' src={`https://widepost-api.onrender.com/getimage/${images[currentImageIndex]}`} alt={`Image ${currentImageIndex}`} />
      </div>
      <div className="slider-controls">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
      
    </>
  )
}

export default Slider
