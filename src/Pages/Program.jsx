import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/program.css'
import program_bg from '../assets/images/programs_bg.png'
import Undergraduate from '../components/Undergraduate'
import Postgraduate from '../components/Postgraduate'


export default function Admission() {
  const [isProgramClicked, setisProgramClicked] = useState(false)
  
  function clickHandler(){
    setisProgramClicked(prev => !prev)
  }
  return (
    <>
      <img src={program_bg} alt="program background" className='admission-bg'/>
      <Header page={"program"} logo={'header-logo'}>
        <p style={{color:"white"}}>Program</p>
      </Header>
      <main>
        <section className="program-section-one">
          <p>
            Objectives of Systems Engineering program
          </p>
          <p>
            Skilled Systems Engineers are well trained in deploying metrics for Cybernetics and AI concepts with a focal point on planning and design etc, across diverse fields. Our Program equips students with foundational skillsets to help them analyse and design complex engineering system for environmental integrity.
          </p>
          <p>The objectives of the programme are:</p>
          <ul>
            <li>To bridge the gap between management/decision science and the Engineering profession through the integration of decision ScienceManagement courses to the traditional engineering discipline</li>
            <li>To produce engineers with multidisciplinary skills for today’s complex economy</li>
            <li>To impart analytical and cutting-edge computing skills in Engineering training</li>
          </ul>
        </section>
        <section className="program-section-two">
          <div>
            <p className={!isProgramClicked ? 'degree': null} onClick={()=>setisProgramClicked(false)}>Undergraduate Program</p>
            <p className={isProgramClicked ? 'degree': null} onClick={()=>setisProgramClicked(true)} >Post graduate Program</p>
          </div>
          {
          !isProgramClicked
          ? <Undergraduate program={isProgramClicked} />
          : <Postgraduate program={isProgramClicked}/> 
          }
        </section>
      </main>
      <Footer />
    </>
  )
}
