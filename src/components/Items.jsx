import React,{useState} from 'react'

export default function Items({imgurl, title, date, content,link,number}) {
    // const [isShowMore, setIsShowMore] = useState(false)
  return (
    <div className='item'>
        <div className="img-container"> 
            <img src={imgurl} loading='lazy' alt="descriptive image" />
        </div>
        <p className='main-text-color'>{date}</p>
        <p className='main-text-color'>{title}</p>
        <p className='main-text-color'>{content.substr(0,number) + "..." }</p>
        {/* { isShowMore 
            ? <p style={{fontSize: "1rem"}} onClick={()=>{setIsShowMore(false)}}>
                {content}
                </p>
            :  <button onClick={()=>{setIsShowMore(true)}} className="btn text-primary-color">Read More</button>
        } */}
        <button className="btn">
            <a target='_blank' className='text-primary-color' href={link}>Read More</a>
        </button>
    </div>
  )
}
