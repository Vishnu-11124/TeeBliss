import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products.json'; // Assuming you have a products.json file with product data
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {

    const {categoryName} = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter((product) => product.category.toLowerCase() === categoryName.toLowerCase());

        setFilteredProducts(filtered);
    },[categoryName])

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    
  return (
    <div>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
      </section>

      {/*  Products card  */}
      <div className='section__container'>
        <ProductCards products={filteredProducts}/>
      </div>
    </div>
  )
}

export default CategoryPage
