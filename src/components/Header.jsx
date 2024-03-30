import React,{useState} from 'react'
import { CgClose } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import logo_sb from '../assets/images/logo_sb.png'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import youtube from '../assets/images/youtube.svg'
import linkedin from '../assets/images/linkedin.svg'
import alumni_sb from "../assets/images/alumni_sb.svg"
import gallery_sb from '../assets/images/gallery_sb.svg'
import home from '../assets/images/home.svg'
import pq_sb from '../assets/images/pq_sb.svg'
import program_sb from '../assets/images/program_sb.svg'
import project_sb from '../assets/images/project_sb.svg'
import staff_sb from '../assets/images/staff_sb.svg'
import logo_sys from '../assets/images/systemsengr_logo.png'
import '../styles/Navbar.css'

export default function Header({children,page,logo}) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const navigate = useNavigate()
  return (
    <header className={page} id="header">
        <div>
            <img style={{cursor: 'pointer'}} onClick={()=>navigate('/')} src={logo_sys} alt="systems logo" />
            <nav className={!isNavbarOpen ? 'header-main': "header-main opened"}>
                { isNavbarOpen 
                &&
                <div className='logo'>
                    <img src={logo_sb} alt="logo on the sidebar" />
                    <IconContext.Provider value={{ color: "#FFF", className:"nav-button-1"}}>
                    <CgClose 
                        onClick={()=>{setIsNavbarOpen(false)}}       
                    />
                    </IconContext.Provider>
                </div>
                }
                <div className='nav-links'>
                    <ul>
                <li >
                    {isNavbarOpen && <img  src={home} alt='home icon'/>}
                    <NavLink to="/" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    {isNavbarOpen && <img  src={gallery_sb} alt='gallery icon'/>}
                    <NavLink to="/gallery" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'}>
                        Gallery
                    </NavLink>
                </li>
                <li>
                    {isNavbarOpen && <img  src={project_sb} alt='project icon'/>}
                    <NavLink to="/project" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'}>
                        Project
                    </NavLink>
                </li>
                <li>
                    {isNavbarOpen && <img  src={pq_sb} alt='past-questions icon'/>}
                    <NavLink to="/pastquestions" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'}>
                        Past questions
                    </NavLink>
                </li>
                <li>
                    {isNavbarOpen && <img  src={staff_sb} alt='staff icon'/>}
                    <NavLink to="/staffs" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'}>
                        Staff
                    </NavLink>
                </li>
                <li>
                    {isNavbarOpen && <img  src={program_sb} alt='program icon'/>}
                    <NavLink to="/program" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'} >
                        Program
                    </NavLink>
                </li>
                <li>
                    {isNavbarOpen && <img  src={alumni_sb} alt='alumni icon'/>}
                    <NavLink to="/alumni" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'} >
                        Alumni
                    </NavLink>
                </li>
                <li>
                    {isNavbarOpen && <img  src={home} alt='news icon'/>}
                    <NavLink to="/news" className={page === "staff" || page === "alumni" || page == "project" ? 'text-primary-color' :'text-neutral-wh-color'}>
                        News
                    </NavLink>
                </li>
                    </ul>
                    <button 
                        className={
                            ((!isNavbarOpen &&(page === "staff" || page === "alumni" || page == "project"))
                            || (isNavbarOpen && page)
                            ) 
                                ? "header-button bg-primary-color"
                                : "header-button bg-neutral-color"
                                }
                    >
                    <a className={
                        ((!isNavbarOpen && (page === "staff" || page === "alumni" || page == "project"))
                        || (isNavbarOpen && page)
                        )
                        ? 'text-neutral-wh-color linkEL' 
                        :'text-primary-color linkEL'} 
                        href="#footer">
                        Contact us
                    </a>
                    </button>
                </div>
                {
                  isNavbarOpen
                  &&
                  <div className='socials-container'>
                    <p>Follow us:</p>
                    <div className="socials-sb">
                        <a href="#">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="linked" />
                        </a>
                        <a href="#">
                            <img src={youtube} alt="youtube" />
                        </a>
                    </div>
                  </div>  
                }
            </nav>
            {
                !isNavbarOpen && (page == 'staff' || page == 'alumni' || page == "project")
                ?   <IconContext.Provider value={{ color: "#323030", className:"nav-button"}}>
                        <GiHamburgerMenu 
                            onClick={()=>{setIsNavbarOpen(true)}}       
                        />
                    </IconContext.Provider>
                : !isNavbarOpen && page != 'page'
                ?   <IconContext.Provider value={{ color: "#fff", className:"nav-button"}}>
                        <GiHamburgerMenu 
                        onClick={()=>{setIsNavbarOpen(true);}}       
                        />
                    </IconContext.Provider>
                : null
            }
        </div>
        {children}
    </header>
  )
}
