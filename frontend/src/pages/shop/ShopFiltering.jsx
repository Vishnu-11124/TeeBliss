import React from 'react'


const ShopFiltering = ({filters,filtersState,setFiltersState,clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0' >
        <h3>Filters</h3>
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Category</h4>
            <hr />
            {
                filters.categories.map((category)=>(
                    <label key={category} className='capitalize cursor-pointer'>
                        <input type="radio" name="category" id="category" value={category} checked={filtersState.category === category} 
                        onChange={(e) => setFiltersState({...filtersState,category:e.target.value})}/>
                        <span className='ml-1'>{category}</span>
                    </label>
                ))
            }
        </div>
        
        {/* Subcategories */}
         <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>SubCategory</h4>
            <hr />
            {
                filters.subcategory.map((subcategory)=>(
                    <label key={subcategory} className='capitalize cursor-pointer'>
                        <input type="radio" name="subcategory" id="subcategory" value={subcategory} checked={filtersState.subcategory === subcategory} 
                        onChange={(e) => setFiltersState({...filtersState,subcategory:e.target.value})}/>
                        <span className='ml-1'>{subcategory}</span>
                    </label>
                ))
            }
        </div>

        {/* price range  */}
         <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Price Ranges</h4>
            <hr />
            {
                filters.priceRanges.map((range)=>(
                    <label key={range.label} className='capitalize cursor-pointer'>
                        <input type="radio" name="priceRanges" id="priceRanges" value={`${range.min}-${range.max}`} checked={filtersState.priceRanges === `${range.min}-${range.max}`} 
                        onChange={(e) => setFiltersState({...filtersState,priceRanges:e.target.value})}/>
                        <span className='ml-1'>{range.label}</span>
                    </label>
                ))
            }
        </div>

        {/* clear filtering */}
        <button onClick={clearFilters} className='bg-violet-800 px-4 text-white rounded'>Clear All Filters</button>
    </div>

    
  )
}

export default ShopFiltering
