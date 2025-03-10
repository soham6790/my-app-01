import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'//dynamic component

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/> 
        <Footer/>
    </>
  )
}

export default Layout;