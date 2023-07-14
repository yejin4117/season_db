import React, { useState } from 'react';
import './pages.css'
import Carousel from 'react-bootstrap/Carousel'

import image1 from './../images/ai.jpg'
import image2 from './../images/aii.jpg'
import image3 from './../images/aiii.jpg'
import image4 from './../images/aiiii.jpg'
import image5 from './../images/g1.jpg'
import image6 from './../images/g2.jpg'
import image7 from './../images/g3.jpg'
import image8 from './../images/g4.jpg'
import image9 from './../images/y1.jpg'
import image10 from './../images/y2.jpg'
import image11 from './../images/y3.jpg'
import image12 from './../images/y4.jpg'
import image13 from './../images/y5.jpg'
import image14 from './../images/y6.jpg'
import image15 from './../images/y7.jpg'
import image16 from './../images/y8.jpg'
import image17 from './../images/j1.jpg'
import image18 from './../images/j2.jpg'
import image19 from './../images/j3.jpg'
import image20 from './../images/j4.jpg'
import image21 from './../images/j5.jpg'
import image22 from './../images/j6.jpg'
import image23 from './../images/s1.jpg'
import image24 from './../images/s2.jpg'
import image25 from './../images/s3.jpg'
import image26 from './../images/s4.jpg'


const imgData = {
  images: [
    { src: image5, text: "<Abies koreana>" },
    { src: image6, text: "<blue flower garden>" },
    { src: image7, text: "<Sunflower>" },
    { src: image8, text: "<Tiger>" },
    { src: image9, text: "<ballerina>" },
    { src: image10, text: "<Traveler>" },
    { src: image11, text: "<Dancer>" },
    { src: image12, text: "<Girl>" },
    { src: image13, text: "<Doll>" },
    { src: image14, text: "<Camera>" },
    { src: image15, text: "<Coffee>" },
    { src: image16, text: "<marriage>" },
    { src: image17, text: "<Flower>" },
    { src: image18, text: "<whirlwind>" },
    { src: image19, text: "<Lightning>" },
    { src: image20, text: "<Devil>" },
    { src: image21, text: "<Strawberry>" },
    { src: image22, text: "<Snow White>" },
    { src: image23, text: "<Ghost_1>" },
    { src: image24, text: "<Ghost_2>" },
    { src: image25, text: "<Snow White>" },
    { src: image26, text: "<Snow White>" }
  ],
};


function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('image-overlay')) {
      setSelectedImage(null);
    }
  };


  return (
    <div>
      <Carousel controls={false} fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>

    <div>
        <a className="home-view">
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <h1>VIEW</h1>
        </a>
    </div>

    <div className="image-grid">
        {[...Array(7)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {[...Array(3)].map((_, colIndex) => {
              const imageIndex = rowIndex * 3 + colIndex;
              const imageData = imgData.images[imageIndex];
              const imageSrc = imageData.src;
              const imageText = imageData.text;
              return (
                <div key={colIndex} className="col">
                  <div className={`image-container ${selectedImage === imageIndex ? 'selected' : ''}`}
                    onClick={() => handleImageClick(imageIndex)}>
                    <div className="image-wrapper">
                      <img className="img-responsive" src={imageSrc} alt={`Image ${imageIndex + 1}`}/>
                    </div>
                    {selectedImage === imageIndex && (
                      <div className="image-overlay" onClick={handleClose}>
                        <div className="overlay-content">안녕하세요</div>
                    </div>
                    )}
                  </div>
                  <div className="image-text">{imageText}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <br/><br/><br/><br/>
    </div>

  );
}

export default Home;