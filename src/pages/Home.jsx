import React from 'react'
import Categories from '../components/Categories'
import ComicsHome from '../components/ComicsHome'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Search from '../components/Search'

function Home() {
  return (
    <div>
        <Navbar/>
        <Search/>
        <Categories/>
        <ComicsHome/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home