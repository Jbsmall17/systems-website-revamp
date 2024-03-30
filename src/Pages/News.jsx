import React,{useState,useEffect} from 'react'
// import data_array from '../assets/Data'
import news_bg from '../assets/images/news-bg.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/news.css'
import NewsOnDisplay from '../components/NewsOnDisplay'
import NewsItem from '../components/NewsItem'
// import axios from '../api'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {fetchNews} from '../backend/server.js'


export default function News() {
  const [arrayOfNews, setArrayOfNews] = useState([])
  // const [newsOnDisplay, setNewsOnDisplay] = useState(0)  
  const [collection, setCollection] = useState([])
  const [loading,setLoading] = useState(false)
  const getNews = async () => {
    setLoading(true)
    try {
        const response = await fetchNews();
        if (response.status === 200) {
          setArrayOfNews(response.data);
          setLoading(false)
        }
    } 
    catch (error) {
      console.error(error);
      setArrayOfNews([]);
      setLoading(false)
    }
}

  useEffect(()=>{
    getNews();
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      const newsCollection = document.querySelectorAll("div.news-collection > div");
      const observer = new IntersectionObserver(
        (entries)=>{
          entries.forEach((entry,index)=>{
            if(entry.isIntersecting){
              entry.target.classList.add("show")
            }
            else{
              entry.target.classList.remove("show")
            }
          }),{
            threshold: 0.25
          }
        }
      )
      newsCollection.forEach((news,index)=>{
        observer.observe(news)
      })
      return (()=>{
        observer.disconnect()
      })
    },50)
  },[arrayOfNews])
  // function changeNews(num){
  //   setNewsOnDisplay(num)
  // } 

  // const news = arrayOfNews
  //   .filter((article) => article.id === newsOnDisplay)
  //   .map((article, index) => <NewsOnDisplay {...article} key={index} />);

  // useEffect(()=>{
  //   const news_collection = arrayOfNews.filter((article)=>{
  //     return article.id != newsOnDisplay
  //   })
  //   setCollection(news_collection)
  // },[newsOnDisplay, arrayOfNews])
  
  const newsCollection = arrayOfNews.map((article,index)=>{
    return <NewsItem {...article} key={index} />
  }).reverse(); 
  // console.log(arrayOfNews)
  return (
    <>
      <img src={news_bg} alt="news page  background" className='news-bg'/>
      <Header page={"news"} logo={'header-logo-bg'}>
      </Header>
      <main className='news-container'>
        {/* {news} */}
        <p>News stories</p>
        <div className='news-collection'>
          {
          !loading
          ?newsCollection
          : (<>
              <div>
                <div><Skeleton /></div>
                <div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </div>
              <div>
                <div><Skeleton /></div>
                <div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </div>
              <div>
                <div><Skeleton /></div>
                <div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </div>
              <div>
                <div><Skeleton /></div>
                <div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </div>
              <div>
                <div><Skeleton /></div>
                <div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </div>
            </>)
        }
        </div>
      </main>
      <Footer />
    </>
  )
}
