import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../../components/products/Products'

const Routerconfig = () => {
  return (
   <>
   <BrowserRouter >
   <Routes>
    <Route path='/' element = {<Products />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Routerconfig
