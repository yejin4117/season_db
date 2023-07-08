import React from 'react'

const Menu = ({images}) =>{
     return(
          <div className='section-center'>
                {
                    images.map((menuItem)=>{
                        const {id,title,img,desc,price} = menuItem;

                         return(
                             <div className="menu-item" key={id}>
                                  <img src={img} alt={title} className="photo" />
                                  <div className="image-info">
                                   <header>
                                     <h4>{title}</h4>
                                     <h4 className="price">${price}</h4>
                                    </header>
                                      <p className="image-text">{desc}</p>
                                  </div>
                             </div>
                         )
                    })
                }
          </div>
     )
}

export default Menu;