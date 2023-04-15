import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconsData } from './icons'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      {iconsData.map(el=> <div ><Link className='link' to={el.value==="Features" ? `/` :`/${el.value.trim().toLowerCase()}`}><FontAwesomeIcon className='icon' icon={el.key} /><p>{el.value}</p></Link></div>)}
    </div>
    </>
  )
}
