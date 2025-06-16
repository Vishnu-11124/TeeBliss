import React from 'react'
import { useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';


const SingleProduct = () => {
    const {id} = useParams();
    console.log(id);
    
  return (
    <>
      <section className='section__container mt-5'>
        <div className='flex flex-col items-center md:flex-row gap-8'>
            <div className='md:w-1/2 w-full'>
                <img className='rounded-md w-full h-auto' src="https://images.unsplash.com/photo-1631097969294-c38afba59496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

             <div className='md:w-1/2 w-full'>
                 <h3 className='text-2xl font-semibold mb-4'>Product Name</h3>
                 <p className='text-xl text-violet-900 mb-4'>$100 <s>$130</s></p>
                 <p className='text-gray-700 mb-4'>This is product description</p>

                 <div>
                    <p><strong>Category: </strong>men</p>
                    <p><strong>SubCategory: </strong>topwear</p>
                    <div className='flex gap-1 items-center'>
                        <strong>Rating:</strong>
                        <RatingStars rating={"4"}/>
                    </div>
                 </div>

                 <button className='mt-6 px-6 py-3 bg-violet-900 text-white rounded-md'>Add To Cart</button>
             </div>
        </div>  
      </section>

      {/* display reviews */}
      <section className='section__container mt-7'>
            reviews here
      </section>
    </>
  )
}

export default SingleProduct
