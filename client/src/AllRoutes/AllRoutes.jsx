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

export const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Features/>} />
        <Route  path='/armoury' element={<Armoury/>}  />
        <Route  path='/aquatic' element={<Aquatic/>} />
        <Route  path='/cycling' element={<Cycling/>} />
        <Route  path='/equestrian' element={<Equestrian/>}  /> 
        <Route  path='/extreme'   element={<Extreme/>}  />
        <Route  path='/golf'  element={<Golf/>} />
        <Route  path='/gymnastics' element={<Gymnastics/>} />
        <Route  path='/lakeandsea' element={<LakeAndSea/>} />
    </Routes>
  )
}
