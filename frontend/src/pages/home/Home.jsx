import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import PromoBanner from './PromoBanner'

const home = () => {
  return (
    <div>
       <Banner />
       <Categories />
       <HeroSection />
       <TrendingProducts />
       <PromoBanner />
    </div>
  )
}

export default home
