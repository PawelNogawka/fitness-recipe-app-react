import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

import './CategoryItem.scss'




const CategoryItem = ({name}) => {


  return (
    
    <Link to={`/recipes/${name}`} className='category-item'>
       <h3 className="category-item__name">{name}</h3>
    </Link>
  )
}

export default CategoryItem
