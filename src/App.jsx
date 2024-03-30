import { useState,useEffect,useRef,lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import Error from './Pages/Error'
import { Bars } from  'react-loader-spinner'
import "../src/styles/App.css"

const Home = lazy(()=> import('./Pages/Home'))
const Project = lazy(()=> import('./Pages/Project'))
const Gallery = lazy(()=> import('./Pages/Gallery'))
const Pastquestions = lazy(()=> import('./Pages/Pastquestions'))
const Staff = lazy(()=> import('./Pages/Staff'))
const Program = lazy(()=> import('./Pages/Program'))
const Alumni = lazy(()=> import('./Pages/Alumni'))
const News = lazy(()=> import('./Pages/News') )


function App() {
  const [count, setCount] = useState(0)
  const moveUpArrow = useRef()
  
  function scrollHandler(){
    if (window.scrollY > window.innerHeight)
      moveUpArrow.current.classList.add("scrolled")
    else
    moveUpArrow.current.classList.remove("scrolled")
  }
  
  function scrollToHandler(){
    const header = document.getElementById("header")
    // const headerObj = header.getBoundingClientRect()

    window.scrollTo({
      top: header.offsetTop,
      behavior: 'smooth',
      block: 'start'
    })
    // window.scrollTo(0, headerObj.top)
  }
  useEffect(()=>{
    window.addEventListener('scroll',scrollHandler)
    return ()=>{
      window.removeEventListener('scroll',scrollHandler)
    }
  })
  
  return (
    <>
        <span className="material-icons arrow-btn" ref={moveUpArrow} onClick={scrollToHandler}>
            arrow_circle_up
        </span>
      <Routes>
        <Route 
          index 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
            <Home />
          </Suspense>
          }>
        </Route>
        <Route 
          path='gallery' 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <Gallery />
            </Suspense>
          }>
        </Route>
        <Route 
          path='project' 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <Project />
            </Suspense>
          }>
        </Route>
        <Route 
          path='pastquestions' 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <Pastquestions />
            </Suspense>
          }>
        </Route>
        <Route 
          path='staffs' 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <Staff />
            </Suspense>
          }>
        </Route>
        <Route 
          path='program' 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <Program />
            </Suspense>
          }>
        </Route>
        <Route 
          path='alumni' 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <Alumni />
            </Suspense>
          }>
        </Route>      
        <Route 
          path='news' 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <News />
            </Suspense>
          }>
        </Route>
        <Route 
          path="*" 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                  />
                </div>
              }>
              <Error />
            </Suspense>
          }>
        </Route>
      </Routes>
    </>

  )
}

export default App
