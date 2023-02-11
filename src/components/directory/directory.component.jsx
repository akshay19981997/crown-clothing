import React from "react";
import CategoryItem from '../category-item/category-item.component.jsx'
import './directory.styles.scss'
const Directory = (props) => {
    return (
        <div className='directory-containers' >
          {props.categories.map( (category)=> {return (
          <CategoryItem category={category}/>
          ) 
    }
     )
     }
         
          
          
          
        </div>
      );
}
export default Directory