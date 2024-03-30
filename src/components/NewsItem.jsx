import React,{useState} from 'react'

export default function NewsItem({id,url,newsDate,newsTitle,newsStory, link}) {
    // console.log(handlefunc)
    return (
    <div>
        <div>
            <img loading='lazy' src={url} alt="news Item picture" />
        </div>
        <div>
            <p>{newsDate}</p>
            <p>{newsTitle}</p>
            <p className="main-text-color">
                <span>{newsStory.substr(0,70)}</span>
                <br></br>
                <a target='_blank' href={link}>
                    Read more
                </a>
            </p>
        </div>
    </div>
  )
}
