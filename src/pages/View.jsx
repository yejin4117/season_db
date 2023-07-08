// import React, {useEffect, useState} from 'react';
// import './pages.css'
import React,{useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import images from './data';


// const images = [
//     {id: '1', imageName: 'y1.jpg', tag: 'yuri'},
//     {id: '2', imageName: 'y2.jpg', tag: 'yuri'},
//     {id: '3', imageName: 'y3.jpg', tag: 'yuri'},
//     {id: '4', imageName: 'y4.jpg', tag: 'yuri'},
//     {id: '5', imageName: 'y5.jpg', tag: 'yuri'},
//     {id: '6', imageName: 'y6.jpg', tag: 'yuri'},
//     {id: '7', imageName: 'y7.jpg', tag: 'yuri'},
//     {id: '8', imageName: 'y8.jpg', tag: 'yuri'},
//     {id: '9', imageName: 'g1.jpg', tag: 'guck'},
//     {id: '10', imageName: 'g2.jpg', tag: 'guck'},
//     {id: '11', imageName: 'g3.jpg', tag: 'guck'},
//     {id: '12', imageName: 'g4.jpg', tag: 'guck'}
// ];

// export default function View() {
    const allCategories = ['all', ...new Set(images.map((images)=>images.category))]

    const App = () => {
    const [menuimages,setMenusimages] = useState(images)
    const [categories,setCategories] = useState(allCategories)

    const filterimages =(category)=>{
        if(category == 'all'){
            setMenusimages(images)
            return;
        }

        const newimages = images.filter((images)=>images.category == category);
        setMenusimages(newimages)
    }


 
    return (
        <>
        <div className="menu section">
                <div className="title">
                    <h2>Our Filter Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories ={categories} filterimages={filterimages}  />
                <Menu images={menuimages} />
        </div>

        </>
  
    );
};

export default App;
