import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/error.css'
import pana from '../assets/images/pana.svg'


export default function Error() {
    const navigate = useNavigate()
  return (
    <div className='error'>
      <div>
        <img src={pana} alt="pana" />
        <p>Oh no,something went wrong!</p>
        <p>This page does not exist or was removed! We suggest you go back to home</p>
        <button onClick={()=>{navigate('/')}}>Go back home</button>
      </div>
    </div>
  )
}
