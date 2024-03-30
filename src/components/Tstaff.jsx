import React from 'react'

export default function Tstaff({picture,name,role}) {
  return (
    <div className='bg-primary-color'>
        <div>
          <img loading='lazy' src={picture} alt="Teaching staff" />
        </div>
        <p>{name}</p>
        <p>{role}</p>
    </div>
  )
}
