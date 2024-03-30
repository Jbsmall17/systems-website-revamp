import React, {useEffect, useState, useRef} from 'react'
import engineer from '../assets/images/engineer.png'
import lab from '../assets/images/lab.jpg'
import hod from '../assets/images/ogunwolu.jpg'
import Items from './Items'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Image, Shimmer } from 'react-shimmer'
// import axios from '../api'
import {fetchCount, fetchNews} from '../backend/server.js'


export default function Main() {
  const [isScreenSmall, setIsScreenSmall] = useState(false)
  const container = useRef(null)
  const container2 = useRef(null)
  const [population, setPopulation] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState({
    isPopLoading : false,
    isNewsLoading : false    
  })
  const {isPopLoading,isNewsLoading} = loading  
  
  const getPopulation = async () => {
    setLoading({
      ...loading, isPopLoading : true
    })
    try {
        const response =  await fetchCount();
        if (response.status === 200) {
          setPopulation(response.data);
          setLoading({
            ...loading, isPopLoading : false
          })
        }
        else {
            setPopulation([]);
            setLoading({
              ...loading, isPopLoading : false
            })
        }
    } 
    catch (error) {
      console.error(error);
      setLoading({
        ...loading, isPopLoading : false
      })
    }
  }

  const getNews = async () => {
      setLoading({
        ...loading,isNewsLoading : true 
      })
      try {
          const response =  await fetchNews();
          if (response.status === 200) {
              setNews(response.data);
              setLoading({
                ...loading,isNewsLoading : false 
              })
          }
          else {
              setNews([]);
              setLoading({
                ...loading,isNewsLoading : false 
              })
          }
      } 
      catch (error) {
        console.error(error);
        setLoading({
          ...loading,isNewsLoading : false 
        })
      }
  }

  useEffect(()=>{
      getPopulation();
      getNews();
      // console.log(window.innerWidth)
      if(window.innerWidth <= 425){
        setIsScreenSmall(true)
        return
      }
      setIsScreenSmall(false)
  },[])
  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          container.current.classList.add("show")
          observer.disconnect();
        }
        // else{
        //   container.current.classList.remove("show")
        // }
      },{
          threshold: 0.25
      }
    )
    observer.observe(container.current)
    return ()=>{
      if(observer){
        observer.disconnect()
      }
    }
  },[population,news])
  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          container2.current.classList.add("show")
          observer.disconnect()
        }
        // else{
        //   container2.current.classList.remove("show")
        //   observer.disconnect()
        // }
      },{
        threshold: 0.25
      }
    )
    observer.observe(container2.current)
    return ()=>{
      if(observer){
        observer.disconnect()
      }
    }
  },[population,news])
  return (
    <main>
      <section className="main-header">
      { !isPopLoading
        ?
          <div className='main-header-child'>
            <p>Undergraduates and graduates</p>
            <p>{population.find(item => item.type === 'Students')?.count}+</p>
          </div>
        :  
          <div style={{background:"#fff"}} className='main-header-child'>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
          </div>
      }
        <div>
          { !isPopLoading
          ? 
            <div className='main-header-child'>
              <p>Competent Staff</p>
              <p>{population.find(item => item.type === 'Staff')?.count}+</p>
            </div> 
          :
            <div style={{background:"#fff"}} className='main-header-child'>
              <p><Skeleton /></p>
              <p><Skeleton /></p>
            </div>
          }
          { !isPopLoading
          ? 
            <div className='main-header-child' > 
              <p>Active Alumni</p>
              <p>{population.find(item => item.type === 'Alumni')?.count}+</p>
            </div>
          :
            <div style={{background:"#fff"}} className='main-header-child'>
              <p><Skeleton /></p>
              <p><Skeleton /></p>
            </div>
          }
        </div>
      </section>
      <section className="main-body">
        <div ref={container} className="main-body-container">
          <div>
            <h2 className='text-primary-color'>Welcome to Systems Engineering</h2>
            <p className='main-text-color'>
              The Systems Engineering Department of the University of Lagos is indeed an extraordinary one in this great institution, known for its academic excellence and beneficial national service.
              “Unilag Systems Engineering” is well equipped and poised to disseminate knowledge for technological growth and advancement in this millennium. The department is staffed with competent personnel from the junior technical grade to distinguished academics. We are blessed with reknown Professors of international repute, as well as promising, trail blazing young academics. Our laboratories and facilities are also of standard, and we take advantage of UNILAG’s international exchange agreements with other universities for personnel and student development. It is not surprising that we are one of the most sought after departments in the faculty, attracting top students from across the nation even from other engineering disciplines.
              I sincerely hope you will create the time to visit our beautiful campus and to learn more about us. We’ll be happy to provide additional information and help you discover excellence at ‘SysEngr,’ University of Lagos.
            </p>
            {!isScreenSmall && <p className='main-text-color'>PROF. F.O. Ogunwolu</p>}
          </div>
          <div className='img'>
              {/* <img loading='lazy' src={smilingMan} alt="systems H.O.D" /> */}
              <Image 
                src={hod}
                alt="systems H.O.D"
                fallback={<Shimmer width={300} height={500} />}
              />
              {isScreenSmall && <p className='main-text-color hodname'>PROF. F.O. Ogunwolu</p> }
          </div>
        </div>
        <div ref={container2} className="main-body-container2">
          <p className='text-primary-color'>Mission and Vision</p>
          <div>
            <div>
              {/* <img loading='lazy' src={engineer} alt="engineer" /> */}
              <Image 
                src={lab}
                alt="lab"
                fallback={<Shimmer width={300} height={500} />}
              />
            </div>
            <div>
              <p className='main-text-color'>
                Our mission and vision are same with that of the larger UNILAG institution. We produce versatile or multi-skilled engineers who are ever-ready and willing to contribute to societal development by optimally harnessing available resources.
              </p>
            </div>
          </div>
        </div>
        <div className="main-body-container3">
          <p className='text-primary-color'>News & Events</p>
          <div className='item-container'>
            {!isNewsLoading
            ?
            news.slice(-3).map((newsItem, index) => {
              if(index == 0){
                return <Items number={82} key={index} link={newsItem.link} imgurl={newsItem.url} title={newsItem.newsTitle} date={newsItem.newsDate} content={newsItem.newsStory} />  
              }
              if(index == 2){
                return <Items number={80} key={index} link={newsItem.link} imgurl={newsItem.url} title={newsItem.newsTitle} date={newsItem.newsDate} content={newsItem.newsStory} />
              }
              return <Items number={70} key={index} link={newsItem.link} imgurl={newsItem.url} title={newsItem.newsTitle} date={newsItem.newsDate} content={newsItem.newsStory} />
            })
            : <>
                <div className='item'>
                  <div className="img-container"> 
                    <Skeleton />
                  </div>
                  <p className='main-text-color'><Skeleton /></p>
                  <p className='main-text-color'><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div className='item'>
                  <div className="img-container"> 
                    <Skeleton />
                  </div>
                  <p className='main-text-color'><Skeleton /></p>
                  <p className='main-text-color'><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div className='item'>
                  <div className="img-container"> 
                    <Skeleton />
                  </div>
                  <p className='main-text-color'><Skeleton /></p>
                  <p className='main-text-color'><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </>
            }
          </div>
        </div>
      </section>
    </main>
  )
}
