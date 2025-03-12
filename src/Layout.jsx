import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'


const Layout = () => {
  return (
   <>
   <Navbar/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout