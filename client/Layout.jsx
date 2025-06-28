import React from 'react'
import Header from './src/Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './src/Components/Footer'
import Topvar from './src/Components/Topvar'
import Cards from './src/Components/Cards'
import Imagesec from './src/Components/Imagesec'

const Layout = () => {
  return (
    <>
      <Header />
      <Topvar />
      <Cards />
      <Imagesec />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout