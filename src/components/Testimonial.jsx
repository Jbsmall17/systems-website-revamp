import React,{useState} from 'react'

export default function Testimonial({link,award,statement}) {
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)
    return (
    <div>
      <img loading='lazy' src={link} alt="" />
      <p className="main-text-color">{award}</p>
      <p id='para' className="main-text-color">
        {!isReadMoreOpen 
        ? <span>{`${statement.substr(0,70)}....`}</span>
        : <span onClick={()=>{setIsReadMoreOpen(false)}}>{statement}</span>}
        {!isReadMoreOpen 
        ? <a
            href="#para"
            onClick={()=>{setIsReadMoreOpen(true)}}>Read more</a>
        : ''}
    </p>
    </div>
  )
}
