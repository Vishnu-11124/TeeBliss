import React from 'react'

import category1 from "../../assets/category-1.jpg"
import category2 from "../../assets/category-2.jpg"
import category3 from "../../assets/category-3.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name: 'Men',path:'men', image: category1},
        {name: 'Women',path:'women', image: category2},
        {name: 'Children',path:'children', image: category3},
    ]
  return (
    <div>
      <div className='product__grid'>
        {
            categories.map((category)=>(
                <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
                    <img src={category.image} alt="" />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Categories
