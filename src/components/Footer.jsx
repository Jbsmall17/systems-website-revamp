import React, { useEffect, useState } from 'react'
import unilaglogo from '../assets/images/unilag.png'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
import {FiMail} from 'react-icons/fi'
import {NavLink, useNavigate} from "react-router-dom"
import youtube from '../assets/images/youtube.svg'
import linkedin from '../assets/images/linkedin.svg'
import axios from '../api'
import Swal from 'sweetalert2'
import '../styles/footer.css'

export default function Footer() {
  const [isScreenSmall, setIsScreenSmall] = useState(false)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)


  function handleNavigte(link){
    navigate(link)
    
    const header = document.getElementById("header")

    window.scrollTo({
      top: header.offsetTop,
      behavior: 'smooth',
      block: 'start'
    })
    }
  function resizeScreenFunc(){
    if(window.innerWidth <= 425){
      setIsScreenSmall(true)
      return
    }
    setIsScreenSmall(false)
  }
    useEffect(()=>{
      window.addEventListener("resize", resizeScreenFunc )
      resizeScreenFunc()
      return ()=>{
        window.removeEventListener("resize", resizeScreenFunc )
      }
  },[])

  const Subcribe = async (e) => {
    e.preventDefault();
    const emailIsValid = (email) => {
      // Perform email validation logic (e.g., using a regular expression)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
    try {
      setLoading(true);
      if (email.length == 0) {
        Swal.fire({
          title: 'Not Yet', 
          icon: 'warning', 
          text: 'Email is required',             
          confirmButtonColor: '#12293A',
          })
      }
      else if (!emailIsValid(email)){
        Swal.fire({
          title: 'Not Yet', 
          icon: 'warning', 
          text: 'Enter a valid email address',             
          confirmButtonColor: '#12293A',
          })
      }
      else {
        const response = await axios.post(`/subscribe`, {email});
        Swal.fire({
          text: 'Subscription successful', 
          icon: 'success', 
          confirmButtonColor: '#12293A',
          })
        .then(() => {
          setEmail('')
        })
      }

    } catch (error) {
      if (error.response.status == 409) {
        Swal.fire({
          // title: 'Error', 
          icon: 'warning', 
          text: error.response.data.error,             
          confirmButtonColor: '#12293A',
          })
      }
      else{
        console.error(error);
        Swal.fire({
          title: 'Oops', 
          icon: 'error', 
          text: 'Something went wrong! Please try again later.',             
          confirmButtonColor: '#12293A',
        })
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer id="footer" className='bg-primary-color'>
      <div className="footer-body">
      <div>
        <img loading='lazy' src={unilaglogo} alt="unilag-logo" className="unilag-logo" />
        {!isScreenSmall ?
        <>
         <p className='socials-text'>Follow us:</p>
          <div className="socials">
            <a target='_blank' href="https://x.com/systemsunilag?s=21&t=qvyGj-6QOXrBSeHzF87xgA">
              <img src={twitter} alt="twitter" />
            </a>
            {/*<a target='_blank' href="#">
              <img src={facebook} alt="facebook" />
              </a>*/}
            <a target='_blank' href="https://www.instagram.com/systemsunilag/">
              <img src={instagram} alt="instagram" />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/systems-engineering-department-unilag-4b776424a">
              <img src={linkedin} alt="" />
            </a>
            <a target='_blank' href="https://www.youtube.com/channel/UC4WniTGn0H7arnT7YFXeh1Q">
              <img src={youtube} alt="" />
            </a>
          </div>
        </> : null}
      </div>
      <div>
        <p>Navigation</p>
        <ul>
          <li><a onClick={()=>handleNavigte('/')}>Home</a></li>
          <li><a onClick={()=>{handleNavigte('/project')}}>Projects</a></li>
          <li><a onClick={()=>{handleNavigte('/staff')}}>Staffs</a></li>
          <li><a onClick={()=>{handleNavigte('/gallery')}}>Gallery</a></li>
          <li><a onClick={()=>{handleNavigte('/pastquestions')}} >Pastquestions</a></li>
          <li><a onClick={()=>{handleNavigte('/staffs')}} >Staffs </a></li>
          <li><a onClick={()=>{handleNavigte('/program')}} >Program</a></li>
          <li><a onClick={()=>{handleNavigte('/alumni')}} >Alumni</a></li>
          <li><a onClick={()=>{handleNavigte('/news')}} >News</a></li>
        </ul>
      </div>
      <div>
        <p>Contact Us</p>
        <ul>
          <li><BiSolidPhoneCall style={{color:'#F3EBEB',fontSize:'16px'}}/><a href="tel:+234 908 768 8768">+234 908 768 8768</a></li>
          <li><FiMail  style={{fontSize:'16px'}}/> <a  href='mailto:systemsengrboard@gmail.com'>systemsengrboard@gmail.com</a></li>
          <li>
            <MdOutlineLocationOn style={{color:'#F3EBEB', fontSize:'16px'}} />
            <a href="#">Department of systems Engineering,<br></br><span>Faculty of Engineering, university of lagos</span></a>
          </li>
        </ul>
      </div>
      <div>
        {isScreenSmall &&
          <>
            <p className='socials-text'>Follow us:</p>
            <div className="socials">
              <a  target='_blank' href="https://x.com/systemsunilag?s=21&t=qvyGj-6QOXrBSeHzF87xgA">
                <img src={twitter} alt="twitter" />
             </a>
              {/* <a href="#">
                <img src={facebook} alt="facebook" />
              </a> */}
              <a target='_blank' href="https://www.instagram.com/systemsunilag/">
                <img src={instagram} alt="instagram" />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/systems-engineering-department-unilag-4b776424a">
                <img src={linkedin} alt="" />
              </a>
              <a target='_blank' href="https://www.youtube.com/channel/UC4WniTGn0H7arnT7YFXeh1Q">
                <img src={youtube} alt="" />
              </a>
          </div>
        </>         
        }
        <p>Newsletter</p>
        <div>
          <p>
            Subscribe to our newsletter to get your weekly 
            dose of news, updates and tips
          </p>
          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
            {/* <button>Subscribe</button> */}
            <button type="submit" onClick={Subcribe} disabled={loading} className='button'>
              {loading ? <> <span className="spinner" /> </> : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
      </div>
      <p>Copyright &#169; UNILAG All Rights Reserved</p>
    </footer>
  )
}
