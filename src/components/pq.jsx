import React from 'react'

export default function pq({year, pdf}) {
  return (
    <button className='text-primary-color' onClick={() => window.open(pdf, '_blank')}>{year}</button>
  )
}
