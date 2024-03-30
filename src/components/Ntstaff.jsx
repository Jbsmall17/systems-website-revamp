import React from 'react'

export default function Ntstaff({image,name,role}) {
  return (
    <div>
      <div>
        <img loading='lazy' src={image} alt="Non-Teaching staff" />
      </div>
        <p className='text-neutral-bk-color'>{name}</p>
        <p className='main-text-color'>{role}</p>
    </div>
  )
}
