import React from 'react'
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


const imgData = {
  images: [
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16
  ]
};


function home() {
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
          <h1>VIEW</h1>
          <br/><br/><br/><br/>
        </a>
    </div>

    <div className="image-grid">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {[...Array(3)].map((_, colIndex) => {
              const imageIndex = rowIndex * 3 + colIndex;
              const imageSrc = imgData.images[imageIndex];
              return (
                <div key={colIndex} className="col">
                  <div className="image-container">
                    <div className="image-wrapper">
                      <img className="img-responsive" src={imageSrc} alt={`Image ${imageIndex + 1}`} />
                    </div>
                    <div className="image-text">tree</div>
                  </div>
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

export default home;