import React from 'react'

export default function NewsOnDisplay({id,url,newsDate,newsTitle,newsStory}) {
  return (
    <div id="target" className='newsOndisplay'>
        <div>
        <img src={url} alt="pciture of news item on display" />
        </div>
        <div>
            <p className='date'>{newsDate}</p>
            <p className='title'>{newsTitle}</p>
            <p className='story'>{newsStory}</p>
        </div>
    </div>
  )
}
