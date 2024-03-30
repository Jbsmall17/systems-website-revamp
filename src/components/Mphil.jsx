import React,{useState, useEffect} from 'react'

export default function Mphil() {
    const [isClicked, setIsClick] = useState(false)
    const [isScreenSmall,setScreenSmall] = useState(false)
    function clickHandler(){
    setIsClick(prev => !prev)
  }
  useEffect(()=>{
    if(window.innerWidth <= 768){
      setScreenSmall(true)
      return
    }
    setScreenSmall(false)
  })
  return (
    <div className={!isClicked ?'mphil': "mphil opened"}>
        { !isScreenSmall 
        ?   <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M27 13.5L18 22.5L9 13.5" stroke="#323030" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        :   <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M12.5 6L8.5 10L4.5 6" stroke="#323030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        }
        <p>B. DEGREE OF MASTER OF PHILOSOPHY IN SYSTEMS ENGINEERING</p>
        <div className="mphil-container">
            <div className="introduction">
                <p>
                    Introduction 
                </p>
                <p>
                The M. Phil Programme consists of courses of formal instruction, research seminar( s) and a dissertation. A candidate may specialize in one of the areas of specializations listed above, for the Master of Science degree programme.
                </p> 
            </div>
            <div className='admission-requirement'>
                <p>Admission Requirements</p>
                <p>To be eligible for admission into the M.Phil. Programme, a candidate must:</p>
                <ul>
                    <li>Hold either a Masters Degree of at least a CGPA of 3.5/5.0 in any of the designated specialties of Systems Engineering from this or any other approved university, or a first class or second class upper bachelor's degree in an Engineering discipline or in Physics, Mathematics, Computer Science and related disciplines from this or any other approved university.</li>
                    <li>Satisfy the department in a selection process and</li>
                    <li>Satisfy all other requirements of the School of Postgraduate Studies.</li>
                </ul>
            </div>
            <div className="graduation-requirement">
                <p>Graduation Requirements</p>
                <ul className='main-list'>
                    <li>To fulfil the conditions for the award of M. Phil. (Systems Engineering) degree, a candidate whose qualification on entry into the programme is a recognised M. Sc. in any of the designated specialties of Systems Engineering, must.</li>
                    <ul className='sublist'>
                        <li>Offer and pass a minimum of 6 units of research seminars at 900-level and</li>
                        <li>Satisfy all other requirements stipulated in the regulation of the School of Postgraduate Studies.</li>
                    </ul>
                    <li>To fulfil the conditions for the award of the M. Phil (Systems Engineering), a candidate whose entry qualification is a first degree, must:</li>
                    <ul className='sublist'>
                        <li>Offer and pass all the core courses in his chosen area of specialization</li>
                        <li>Offer and pass such number of 800-level courses as is required to bring the total number of 800-level course units to at least 21.</li>
                        <li>Offer and pass a minimum of 6 units of research seminars at the 900-level, and</li>
                        <li>Satisfy all other existing requirements stipulated in the regulations of the School of Postgraduate Studies.</li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
  )
}
