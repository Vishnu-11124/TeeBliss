import React from 'react'

import category1 from "../../assets/category-1.jpg"
import category2 from "../../assets/category-2.jpg"
import category3 from "../../assets/category-3.jpg"
import category4 from "../../assets/category-4.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name: 'Accessories',path:'accessories', image: category1},
        {name: 'Accessoies',path:'accessories', image: category2},
        {name: 'Accsories',path:'accessories', image: category3},
        {name: 'Accesries',path:'accessories', image: category4},
    ]
  return (
    <div>
      <div className='product__grid'>
        {
            categories.map((category)=>(
                <Link key={category.name} to={'/'} className='categories__card'>
                    <img src={category.image} alt="" />
                    <h4>Shirts</h4>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Categories
