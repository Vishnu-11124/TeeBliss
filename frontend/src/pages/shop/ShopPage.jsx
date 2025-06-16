import React, { useEffect, useState } from 'react'
import Categories from '../home/Categories'
import productsData from "../../data/products.json"
import ProductCards from './ProductCards'
import ShopFiltering from './ShopFiltering'

const filters = {
    categories : ['all','men','women','children'],
    subcategory : ['all','topwear','bottomwear'],
    priceRanges : [
        {label: 'Under $50',min:0,max:50},
        {label: '$50 - $100',min:50,max:100},
        {label: '$100 - $200',min:100,max:200},
        {label: '$200 and above',min:200,max:Infinity},
    ]
}

const shopPage = () => {

    const [products,setProducts] =useState(productsData)
    const [filtersState,setFiltersState] = useState({
        categories:'all',
        subcategory:'all',
        priceRanges:''
    })

    const applyFilters =()=>{
        let filteredProducts = productsData;

        // Category filtering
        if(filtersState.category && filtersState.category !== 'all'){
            filteredProducts =filteredProducts.filter(product => product.category === filtersState.category)
        }

        // subcategory filtering
        if(filtersState.subcategory && filtersState.subcategory !== 'all'){
            filteredProducts =filteredProducts.filter(product => product.subcategory === filtersState.subcategory)
        }

        // price filtering
        if(filtersState.priceRanges){
            const [minPrice,maxPrice]=filtersState.priceRanges.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
        }

        setProducts(filteredProducts)
    }

    useEffect(() => {
        applyFilters()
    },[filtersState])

    const clearFilters = () =>{
        setFiltersState({
            categories:'all',
            subcategory:'all',
            priceRanges:''
        })
    }

  return (
    <>
      <section className='section__container'>
            <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                {/* Left section */}
                
                <ShopFiltering filters={filters} filtersState={filtersState} setFiltersState={setFiltersState} clearFilters={clearFilters}/>

                {/* Right section */}
                <div>
                    <h3 className='text-xl font-medium mb-4'>Available Products: {products.length}</h3>
                    <ProductCards products={products}/>
                </div>
            </div>
      </section>
    </>
  )
}

export default shopPage
