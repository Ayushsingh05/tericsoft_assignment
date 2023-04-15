import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Features } from '../Pages/Features'
import { Armoury } from '../Pages/Armoury'
import { Aquatic } from '../Pages/Aquatic'
import { Cycling } from '../Pages/Cycling'
import { Equestrian } from '../Pages/Equestrian'
import { Extreme } from '../Pages/Extreme'
import { Golf } from '../Pages/Golf'
import { Gymnastics } from '../Pages/Gymnastics'
import { LakeAndSea } from '../Pages/LakeAndSea'
import { Navbar } from '../Components/Navbar'

export const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route  path='/' element={<Features/>} />
        <Route  path='/armoury' element={<Armoury/>}  />
        <Route  path='/aquatics' element={<Aquatic/>} />
        <Route  path='/cycling' element={<Cycling/>} />
        <Route  path='/equestrian' element={<Equestrian/>}  /> 
        <Route  path='/extreme'   element={<Extreme/>}  />
        <Route  path='/golf'  element={<Golf/>} />
        <Route  path='/gymnastics' element={<Gymnastics/>} />
        <Route  path='/lakeandsea' element={<LakeAndSea/>} />
    </Routes>
    </>
  )
}
