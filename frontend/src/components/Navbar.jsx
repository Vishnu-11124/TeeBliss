import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModel from '../pages/shop/CartModel';


const navbar = () => {

    const products = useSelector((state) => state.cart.products);
    const [isCartOpen,setisCartOpen] =useState(false)
    const handleCartToggle = () =>
    {
        setisCartOpen(!isCartOpen)
    }

  return (
    <div>
      <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            <ul className='nav__links'>
                <li className='link'><Link to="/">Home</Link></li>
                <li className='link'><Link to="/shop">Shop</Link></li>
                <li className='link'><Link to="/pages">Pages</Link></li>
                <li className='link'><Link to="/contact">Contact</Link></li>
            </ul>

            {/* Logo for our website */}
            <div className='nav__logo '>
                <Link to="/">TeeBliss</Link>
            </div>

            {/* Navbar icons */}
            <div className='nav__icons relative'>
                 <span>
                    <Link to="/search">
                        <i className="ri-search-2-line"></i>
                    </Link>
                </span>
                
                <span>
                    <button onClick={handleCartToggle} className='hover:text-primary'>
                        <i className="ri-shopping-cart-line"></i>
                        <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>{products.length}</sup>
                    </button>
                </span>
            
                <span>
                    <Link to="login">
                        <i className="ri-user-line"></i>
                    </Link>
                </span>
            </div>
        </nav>

        {
            isCartOpen && <CartModel products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
        }
      </header>
    </div>
  )
}

export default navbar
