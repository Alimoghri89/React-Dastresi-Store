import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditMainSlider from '../EditMainSlider/EditMainSlider'
import EditBrands from '../EditBrands/EditBrands'
import EditProducts from '../EditProducts/EditProducts'
import EditCategory from '../EditCategory/EditCategory'

const RouterDashboard = () => {
  return (
    <Routes>
        <Route path = "/mainslider" element = {<EditMainSlider/>}/>
        <Route path = "/products" element = {<EditProducts/>}/>
        <Route path = "/category" element = {<EditCategory/>}/>
        <Route path = "/brands" element = {<EditBrands/>}/>
        
    </Routes>
  )
}

export default RouterDashboard