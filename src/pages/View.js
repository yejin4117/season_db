// import React, {useEffect, useState} from 'react';
import './pages.css';
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import images from './data';
import image5 from './../images/g1.jpg';
import image6 from './../images/g2.jpg';
import image7 from './../images/g3.jpg';
import image8 from './../images/g4.jpg';
import image9 from './../images/y1.jpg';
import image10 from './../images/y2.jpg';
import image11 from './../images/y3.jpg';
import image12 from './../images/y4.jpg';
import image13 from './../images/y5.jpg';
import image14 from './../images/y6.jpg';
import image15 from './../images/y7.jpg';
import image16 from './../images/y8.jpg';

const imgData = {
  images: [
    { src: image5, text: "Tree 1" },
    { src: image6, text: "Tree 2" },
    { src: image7, text: "Tree 3" },
    { src: image8, text: "Tree 1" },
    { src: image9, text: "Tree 2" },
    { src: image10, text: "Tree 3" },
    { src: image11, text: "Tree 1" },
    { src: image12, text: "Tree 2" },
    { src: image13, text: "Tree 3" },
    { src: image14, text: "Tree 1" },
    { src: image15, text: "Tree 2" },
    { src: image16, text: "Tree 3" }
  ],
};

function view() {
  return (
    <div>
      <div>
        <a className="home-view">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>VIEW</h1>
          <br />
          <br />
          <br />
          <br />
        </a>
      </div>

      <div className="image-grid">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {[...Array(3)].map((_, colIndex) => {
              const imageIndex = rowIndex * 3 + colIndex;
              const imageData = imgData.images[imageIndex];
              const imageSrc = imageData.src;
              const imageText = imageData.text;
              return (
                <div key={colIndex} className="col">
                  <div className="image-container">
                    <div className="image-wrapper">
                      <img className="img-responsive" src={imageSrc} alt={`Image ${imageIndex + 1}`}/>
                    </div>
                    <div className="image-text">{imageText}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default view;

// // export default function View() {
//     const allCategories = ['all', ...new Set(images.map((images)=>images.category))]

//     const App = () => {
//     const [menuimages,setMenusimages] = useState(images)
//     const [categories,setCategories] = useState(allCategories)

//     const filterimages =(category)=>{
//         if(category == 'all'){
//             setMenusimages(images)
//             return;
//         }

//         const newimages = images.filter((images)=>images.category == category);
//         setMenusimages(newimages)
//     }

//     return (
//         <>
//         <div className="menu section">
//                 <div className="title">
//                     <h2>Our Filter Menu</h2>
//                     <div className="underline"></div>
//                 </div>
//                 <Categories categories ={categories} filterimages={filterimages}  />
//                 <Menu images={menuimages} />
//         </div>

//         </>

//     );
// };
