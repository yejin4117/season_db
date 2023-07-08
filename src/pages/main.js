import React from 'react'
import './pages.css'
import Carousel from 'react-bootstrap/Carousel'

import image1 from './../images/ai.jpg'
import image2 from './../images/aii.jpg'
import image3 from './../images/aiii.jpg'
import image4 from './../images/aiiii.jpg'

const imgData = {
  "images": [
    "y1",
    "y2",
    "y3",
    "y4",
    "y5",
    "y6",
    "y7",
    "y8"
  ]
}

const MyImages = imgData.images.map(img =>
  {
    return <img src={process.env.PUBLIC_URL + '/img/' + img + '.jpg'} />
  }
)

function home() {
  return (
    <div>
      <div>
        <a className="main-screen">
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
        </a>
      </div>

      <div>
        <a className="home-view">
          <br/><br/>
          <br/><br/>
          <br/><br/>
          <h2>VIEW</h2>
          <br/><br/>
          <br/><br/>
        </a>
      </div>

      <div>
        {MyImages}
      </div>

    </div>
  );
}

export default home;