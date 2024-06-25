import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './navbar'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}/>
    </Routes>
  )
}

export default MainRouter