import React from 'react'

export const BottomNav = (props) => {
  return (
    <div className='bottomnav_container'>
      <div className='bottomNav'>
        <div>{props.name1}</div>
        <div>{props.name2}</div>
        <div>{props.name3}</div>
      </div>
    </div>
  )
}
