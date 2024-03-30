import React from 'react'

export default function Stuexec({picture,name,role}) {
  return (
    <div className='bg-primary-color'>
        <div>
          <img loading='lazy' src={picture} alt="Teching staff" />
        </div>
        <p className='text-neutral-color'>{name}</p>
        <p className='text-neutral-color'>{role}</p>
    </div>
  )
}
