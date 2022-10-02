import React from 'react'
import Announcement from '../components/Announcement'
// import Login from './Login'
// import Register from './Register'
import Categories from '../components/Categories'
import ComicsHome from '../components/ComicsHome'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Search from '../components/Search'

function Home() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Search/>
        <Categories/>
        <ComicsHome/>
        <Newsletter/>
        <Footer/>
        {/* <Register/>
        <Login/> */}

    </div>
  )
}

export default Home