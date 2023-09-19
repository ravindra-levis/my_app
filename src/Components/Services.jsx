import React, { useState } from 'react';
import './Services.css'; 

const images = [
  {
    src: 'https://i.pinimg.com/originals/61/7d/71/617d71a7d6341b8b1eba626db0808ce2.jpg',
    title: 'Image 1',
  },
  {
    src: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/D2gAAOSw0j5eIOXp/$_86.JPG',
    title: 'Image 2',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.ABd7i-7b3bmEGpINsntG4wHaHa?pid=ImgDet&rs=1',
    title: 'Image 3',
  },
  {
    src: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2016/07/find-an-interior-designer.jpg',
    title: 'Image 4',
  },
  {
    src: 'https://n1.sdlcdn.com/imgs/a/x/n/Kurlon-Florentino-Foam-Mattress-Single-SDL458837990-1-b7b71.jpg',
    title: 'Image 5',
  },
  {
    src: 'https://n1.sdlcdn.com/imgs/a/x/n/Kurlon-Florentino-Foam-Mattress-Single-SDL458837990-1-b7b71.jpg',
    title: 'Image 6',
  },
];

const imagesPerRow = 3;

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(images.length / imagesPerRow);
  const visibleImages = images.slice(
    currentSlide * imagesPerRow,
    (currentSlide + 1) * imagesPerRow
  );

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
    <center><h1>Our Services</h1></center>
    <div className="image-slider">
      <div className="image-slider-container">
        {visibleImages.map((image, index) => (
          <div key={index} className="image-slide">
            <img src={image.src} alt={image.title} />
            <h2>{image.title}</h2>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={goToPreviousSlide}>
        &larr;
      </button>
      <button className="arrow right" onClick={goToNextSlide}>
        &rarr;
      </button>
    </div>
  </>
  );
}

