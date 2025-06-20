import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/header.png'

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
          <h4 className='uppercase'>Upto To 20% Discount on</h4>
          <h1>T-Shirts Collection</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae magni perspiciatis magnam sapiente dolores libero animi vel, beatae quia nam corrupti ratione? Eius, minima dignissimos recusandae sequi id eaque.</p>
          <button className='btn'><Link to="/shop">Eplore Now</Link></button>
        </div>

        <div className='header__image'>
          <img src={bannerImg} alt="banner image" />
        </div>

    </div>
  )
}

export default Banner
