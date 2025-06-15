import React from 'react'
import { useState } from 'react'
import ProductCards from './ProductCards'
import products from '../../data/products.json'

const TrendingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4);
    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at itaque excepturi suscipit pariatur corporis in, cumque sequi ipsa placeat?</p>
    
    {/* Product Card */}
    <ProductCards products={products.slice(0,visibleProducts)}/>

    {/* Load more product btn */}
    <div className='product__btn'>
      {
        visibleProducts < products.length && (
          <button className='btn' onClick={loadMoreProducts}>Load More</button>
        )
      }
    </div>

    
    </section>

  )
}

export default TrendingProducts
