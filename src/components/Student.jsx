import React from 'react'
export default function Student({picture,name, pdf, video}) {
  return (
    <section>
        <div className='project-pic-container'>
        <img loading='lazy' src={picture} alt="project-picture" className="project-pic" />
        </div>
        <p>{name}</p>
        <div>
            <button className='bg-primary-color' onClick={() => window.open(pdf, '_blank')}>Pdf download</button>
            {/* <button className='text-primary-color' onClick={() => window.open(video, '_blank')}>Watch Video</button> */}
            <button className='text-primary-color'>Watch Video</button>
        </div>
    </section>
  )
}
