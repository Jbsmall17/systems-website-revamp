import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import img from "../assets/images/home_bg.png"
import '../styles/Home.css'

export default function Home() {
  return (
    <>
        <img src={img} alt="" className="background-image" />
      <Header page={"home"} logo={'header-logo'}>
        <p className='text-neutral-wh-color'> Department of Systems Engineering
          {/* <span className='text-primary-color'> Engineering</span> */}
        </p>
      </Header>
      <Main />
      <Footer />
    </>
  )
}
