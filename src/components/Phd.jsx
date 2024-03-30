import React,{useState, useEffect} from 'react'

export default function Phd() {
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
    <div className={!isClicked ? 'phd': 'phd opened'}>
        { !isScreenSmall 
        ?   <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M27 13.5L18 22.5L9 13.5" stroke="#323030" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        :   <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M12.5 6L8.5 10L4.5 6" stroke="#323030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        }
        <p>C DEGREE OF DOCTOR OF PHILOSOPHY IN SYSTEMS ENGINEERING</p>
        <div className='phd-container'>
            <div className="introduction">
                <p>Introduction:</p>
                <p>In this programme, the emphasis is on original research, candidates may undertake their research in one of the areas of specialization listed for the M.Sc. (Systems Engineering) Degree program.</p>
            </div>
            <div className='admission-requirement'>
                <p>Admission Requirements</p>
                <p>To be eligible for admission into the Ph.D. programme, a candidate is required to:-</p>
                <ul>
                    <li>Be a holder of an M.Phil. Degree or equivalent in Systems Engineering awarded by this or any other approved university.</li>
                    <li>Be a holder of an M. Sc. degree or equivalent with a minimum CGP A of 4.0/5.0 in Systems Engineering awarded by this or any other approved University.</li>
                    <li>Satisfy the Department in a selection process and satisfy all other admission requirements of the School of Postgraduate Studies.</li>
                </ul>
            </div>
            <div className="graduation-requirement">
                <p>Graduation Requirements</p>
                <p>To satisfy the requirements for the award of a Ph.D. (Systems Engineering) degree: -</p>
                <ul>
                    <li>Holders of M.Sc. (Systems Engineering) must offer and pass a minimum of 12 units of 900-level courses</li>
                    <li>Holders of M.Phil. (Systems Engineering) must offer and pass a minimum of 6 units of Research Seminars at 900-level.</li>
                    <li>Satisfy all other requirements of the School of Postgraduate Studies</li>
                </ul>
            </div>
            <p>In this programme, the emphasis is on original research, candidates may undertake their research in one of the areas of specialization listed for the M.Sc. (Systems Engineering) Degree program.</p>
        </div>
    </div>
  )
}
