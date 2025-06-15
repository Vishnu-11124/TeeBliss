import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'

const home = () => {
  return (
    <div>
       <Banner />
       <Categories />
       <HeroSection />
       <TrendingProducts />
    </div>
  )
}

export default home
