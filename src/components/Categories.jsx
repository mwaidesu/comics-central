import React from 'react'
import CategoryItem from './CategoryItem'
import {categories} from "../data"

const Categories = () => {
  return (
    <div className="styled-container flex justify-between">
        {categories.map(item =>(
            <CategoryItem item={item} key={item.id}/>
        ))}
      
    </div>
  )
}

export default Categories
