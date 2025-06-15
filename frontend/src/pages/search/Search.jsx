import React from 'react'
import { useState } from 'react'
import productData from '../../data/products.json'
import ProductCards from '../shop/ProductCards';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = productData.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query)
        );

        setFilteredProducts(filtered);
    }
  return (
    <>
      <section className='section__container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-1'>
            <input className='search-bar w-full max-w-4xl p-2 border rounded' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='Search for products...' />
            <button onClick={handleSearch} className='search-button w-full md:w-auto py-2 px-8 bg-violet-800 text-white rounded'>Search</button>
        </div>

        <ProductCards products={filteredProducts}/>
      </section>
    </>
  )
}

export default Search
