import React from 'react'
import Msc from './Msc'
import Mphil from './Mphil'
import Phd from './Phd'
import PostPdf from '../assets/Postgraduate.pdf'

export default function Postgraduate({program}) {
  const handleDownload = () =>{
    const pdfFilepath = PostPdf
    window.open(pdfFilepath, '_blank');
  }
  return (
    <div className={program?'postgraduate deree': 'postgraduate'}>
      <Msc />
      <Mphil />
      <Phd/>
      <div className='btn-container'>
        <button onClick={handleDownload}>Download Pdf</button>
      </div>
    </div>
  )
}
