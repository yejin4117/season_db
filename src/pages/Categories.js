import React,{useState} from 'react';
import Menu from './/Menu';
import Categories from './Categories';
import images from './data';

 
const allCategories = ['all', ...new Set(images.map((item)=>item.category))]

const App = () => {
   const [menuItems,setMenusItems] = useState(images)
   const [categories,setCategories] = useState(allCategories)

   const filterItem =(category)=>{
      if(category == 'all'){
        setMenusItems(images)
        return;
      }

      const newItem = images.filter((item)=>item.category == category);
      setMenusItems(newItem)
   }


 
  return (
    <>
     <div className="menu section">
             <div className="title">
                 <h2>Our Filter Menu</h2>
                 <div className="underline"></div>
             </div>
             <Categories categories ={categories} filterItem={filterItem}  />
              <Menu items={menuItems} />
     </div>

    </>
  );
};

export default App;