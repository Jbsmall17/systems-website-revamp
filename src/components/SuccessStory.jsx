import React from 'react'

export default function SuccessStory({selector,stories,name,date,link,desc}) {
  return (
    <div className={selector}>
      <div>
        <p>{stories}</p>
        <p>{name}</p>
        <p>{date}</p>
      </div>
      <div>
        <img src={link} alt={desc} />
      </div>
    </div>
  )
}
