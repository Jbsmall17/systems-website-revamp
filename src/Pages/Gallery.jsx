import React, { useEffect, useState, useRef } from 'react'
import gallery_bg from '../assets/images/gallery_bg.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Gallery.css'
// import axios from '../api'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {fetchGallery} from '../backend/server.js'


export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [isgalleryLoading, setGalleryLoading] = useState(false);
  const firstDiv = useRef()
  const secondDiv = useRef()
  // console.log(gallery[0])  
  const getGallery = async () => {
    setGalleryLoading(true)
    try {
        const response = await fetchGallery();
        if (response.status === 200) {
          setGallery(response.data);
          setGalleryLoading(false)
        }
        else {
            setGallery([]);
            setGalleryLoading(false)
        }
    } 
    catch (error) {
      console.error(error);
      setGalleryLoading(false)
    }
  }

  useEffect(()=>{
    getGallery();
    // console.log(firstDiv.current,secondDiv.current)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      const imgContainer = document.querySelectorAll("main.container>div");
      console.log(imgContainer)
      const observer = new IntersectionObserver(
        (entries)=>{
          entries.forEach((entry,index)=>{
            if(entry.isIntersecting){
              entry.target.classList.add("show")
      
              // observer.disconnect()
            }
            // else{
            //   entry.target.classList.remove("show")
            // }
          }),{
            threshold: 0.2
          }
        }
      )
      imgContainer.forEach((img,index)=>{
        observer.observe(img)
      })
      return ()=>{
        observer.disconnect()
      }
    },50)
  },[gallery])
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     const secondDiv = document.querySelector("main.container>div:nth-of-type(2)");
  //     const observer = new IntersectionObserver(
  //       ([entry])=>{
  //         if(entry.isIntersecting){
  //           secondDiv.classList.add("show")
  //           observer.disconnect()
  //         }
  //         // else{
  //         //   secondDiv.classList.remove("show")
  //         // }
  //       },{
  //           threshold: 0.1
  //       }
  //     )
  //     observer.observe(secondDiv);
  //     return ()=>{
  //       observer.disconnect()
  //     }
  //   },50)
  // },[gallery])
  return (
    <>
      <img src={gallery_bg} alt="gallery background" className='gallery-bg' />
      <Header page={"gallery"} logo={'header-logo-bg'}>
        <p style={{color:"white"}}>Gallery</p>
      </Header>
      <main className='container'>

        {
          !isgalleryLoading
          ?
          gallery.map((item, index) => {
            if (index % 2 === 0 && index + 1 < gallery.length) {
              return (
                <div key={index}>
                <div>
                  <img loading="lazy" src={item.image} alt={`picture-${index}-1`} />
                  <div className="hover-item">
                    <p>{item.name}</p>
                  </div>
                </div>
                <div>
                  <img loading="lazy" src={gallery[index + 1].image} alt={`picture-${index}-2`} />
                  <div className="hover-item-1">
                    <p>{gallery[index + 1].name}</p>
                  </div>
                </div>
                </div>
            );
          }
          return null;
        })
      : <>
          <div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>
          </div>
          <div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>
          </div>
          <div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>
          </div>
          <div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>
          </div>
        </>
      }
      </main>
      <Footer />
    </>
  )
}
