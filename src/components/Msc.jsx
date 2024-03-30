import React,{useState, useEffect} from 'react'

export default function Msc() {
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
    <div className={!isClicked ?'msc' : 'msc opened'}>
    { !isScreenSmall 
    ? <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M27 13.5L18 22.5L9 13.5" stroke="#323030" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    : <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path d="M12.5 6L8.5 10L4.5 6" stroke="#323030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
      <p>A. DEGREE OF MASTER OF SCIENCE IN SYSTEMS ENGINEERING</p>
      <div className='msc-container'>
        <div className='introduction'>
           <p>Introduction</p>
           <p>The MSc Systems Engineering programme consists of three key elements viz:</p>
           <ul className='list'>
                <li>A core component designed to provide the basic advanced knowledge and detailed technical skills required by the students to cover both numerical and symbolic based systems.</li>
                <li>A core component designed to provide the basic advanced knowledge and detailed technical skills required by the students to cover both numerical and symbolic based systems.</li>
                <li>An advanced taught component to provide further technical expertise in a chosen area of specialization.</li>
                <li>A project, designed to allow students to carry out a significant piece of work, either closely related to the requirements of the public or organised private sectors or at the leading edge of research.</li>
            </ul>
            <p>To qualify for a degree a student must normally satisfy the examiners in all three components.</p>
            <p>The taught programme comprises a minimum of four core courses and three elective courses chosen from a menu of several courses in the area of specialization of the student. Each course is equivalent to approximately 30 hours of lecture. In addition, each course will normally also involve group assignments and presentations.</p>
            <p>The programme has five areas of specialization from which the student is expected to select one viz:</p>
            <ul className='list2'>
                <li>Engineering Analysis</li>
                <li>Modelling and Simulation</li>
                <li>Artificial Intelligence</li>
                <li>Information and Communication</li>
                <li>Engineering Systems Management</li>
            </ul>
        </div>
        <div className="programme-specification">
            <p>Programme Specialisations</p>
            <p>The M.Sc. (Systems Engineering) is a programme consisting of courses of instruction and a project. Major areas of instruction are Continuum Mechanics, Engineering Modelling and Simulation, Computational Techniques, Stochastic Systems, Geophysical and Environmental Fluid mechanics. Others include software engineering, artificial intelligence Systems, Robotics, intelligent control and Water Resources, Applied Mechanics, Thermo fluids, Design and Production Engineering as well as Engineering Safety and Reliability.</p>
            <p>These courses have been grouped into five designated areas of specialization as listed below:</p>
            <ul>
                <li>M. Sc.(Systems Engineering) with specialization in Engineering Analysis</li>
                <li>M.Sc.(Systems Engineering) with specialization in Modelling and Simulation</li>
                <li>M.Sc.(Systems Engineering) with specialization in Artificial Intelligence</li>
                <li>M.Sc.(Systems Engineering) with specialization in Information and communication Technology</li>
                <li>M.Sc.(Systems Engineering), with specialization in Engineering Systems Management</li>
            </ul>
            <p>For full-time students, the duration of the programme is for twelve calendar months.</p>
        </div>
        <div className="admission-requirement">
            <p>Admission Requirements</p>
            <ul>
                <li>Candidates with a Bachelor's degree in an Engineering or Physical Sciences (Physics, Mathematics, Computer Science etc.) discipline from the University of Lagos or any other approved University may apply for admission into this programme.</li>
                <li>Candidates may be required to satisfy the Department in a selection process before admission.</li>
                <li>Candidates are required to satisfy all other requirements of the School of Postgraduate Studies.</li>
            </ul>
        </div>
        <div className="graduation-requirement">
            <p>Graduation Requirements</p>
            <p>To satisfy the requirements for the award of the M.Sc. Systems Engineering degree, in any area of specialization, a candidate must: -</p>
            <ul>
                <li>Offer and pass all core courses in his chosen area of specialization.</li>
                <li>Offer and pass such number of 800-level elective courses as is required to bring the total of 800-level course units (including core courses but excluding project) to at least 21 units.</li>
                <li>Offer and pass 6 units of project and</li>
                <li>Satisfy all other conditions stipulated in the regulation of the School of Postgraduate Studies.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
