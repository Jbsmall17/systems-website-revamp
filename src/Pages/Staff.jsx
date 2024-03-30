import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Staff.css'
import Tstaff from '../components/Tstaff'
import Ntstaff from '../components/Ntstaff'
import Stuexec from '../components/Stuexec'
// import axios from '../api'
import Dummy from "../assets/images/dummy.png"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {fetchStaffs} from '../backend/server.js'

export default function Staff() {
  const [staffs, setStaffs] = useState([]);
  const [loading,setLoading] = useState(false) 
  const getStaffs = async () => {
    setLoading(true)
    try {
        const response = await fetchStaffs();
        if (response.status === 200) {
          setStaffs(response.data);
          setLoading(false)
        }
        else {
            setStaffs([]);
            setLoading(false)
        }
    } 
    catch (error) {
      console.error(error);
      setLoading(false)
    }
  } 

  useEffect(()=>{
    getStaffs();
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      const teachingStaffs = document.querySelectorAll("main.staff-container > div.teaching-staff > div")
      const observer = new IntersectionObserver(
        (entries)=>{
          entries.forEach((entry,index)=>{
            if(entry.isIntersecting){
              entry.target.classList.add("show")
            }
            // else{
            //   entry.target.classList.remove("show")
            // }
          }),{
            threshold: 0.25
          }
        }
      )
      teachingStaffs.forEach((teachingStaff,index)=>{
        observer.observe(teachingStaff)
      })
      return (()=>{
        observer.disconnect()
      })
    },50)
  },[staffs])
  useEffect(()=>{
    setTimeout(()=>{
      const nonTeachingStaffs = document.querySelectorAll("main.non-teaching-staff-container > div > div")
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
      nonTeachingStaffs.forEach((nonTeachingStaff,index)=>{
        observer.observe(nonTeachingStaff)
      })
      return (()=>{
        observer.disconnect()
      })
    },50)
  },[staffs])
  useEffect(()=>{
    setTimeout(()=>{
      const studentExecs = document.querySelectorAll("main.stu-exec-container > div > div")
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
      studentExecs.forEach((studentExec,index)=>{
        observer.observe(studentExec)
      })
      return (()=>{
        observer.disconnect()
      })
    },50)
  },[staffs])
  return (
    <>
      <Header page={"staff"} logo={'header-logo-bg'}>
        <p className='text-primary-color'>
          Meet The Distinguished Members of Staff of Department of Systems Engineering.
        </p>
      </Header>
      <main className='staff-container'>
        <p className="text-primary-color">Our Teaching Staff</p>
        <div className='teaching-staff'>
            {
            !loading
            ?
            staffs
            .filter(staff => staff.position === 'Teaching')
            .map((staff, index) => (
              <Tstaff
              key={index} 
              name={staff.name}
              // picture={staff.image}
              picture={staff.image ? staff.image : Dummy}
              role={staff.title} 
            />
            ))
            : <>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </>
          }
        </div>
      </main>
      <main className="non-teaching-staff-container">
        <p className="text-primary-color">Our Non-Teaching Staff</p>
        <div className="non-teaching-staff">
          
          { !loading
            ?
            staffs
            .filter(staff => staff.position === 'Non-Teaching')
            .map((staff, index) => (
              <Ntstaff
                key={index} 
                name={staff.name}
                // image={Dummy}
                image={staff.image ? staff.image : Dummy}
                role={staff.title} 
              />
            ))
            : <>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
              </>
          }

        </div>
      </main>
      <main className='stu-exec-container'>
        <p className="text-primary-color">Our Student Executives</p>
        <div>
          {
            !loading
            ?
            staffs
            .filter(staff => staff.position === 'Student Executive')
            .map((staff, index) => (
              <Stuexec
                key={index} 
                name={staff.name}
                // picture={staff.image}
                picture={staff.image ? staff.image : Dummy}
                role={staff.title} 
              />
            ))
            : <>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
                <div>
                  <div><Skeleton /></div>
                  <p><Skeleton /></p>
                  <p><Skeleton /></p>
                </div>
          </>
          }

        </div>
      </main>
      <Footer />
    </>
  )
}
