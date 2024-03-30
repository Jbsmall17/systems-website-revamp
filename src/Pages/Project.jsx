import React, { useEffect, useState } from 'react'
import project from '../assets/images/project_bg.png'
import Header from '../components/Header'
import Student from '../components/Student'
import Footer from '../components/Footer'
import '../styles/project.css'
// import axios from '../api'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import illustration from "../assets/images/amico.svg" 
import {fetchProjects, searchProjects} from '../backend/server.js'

export default function Project() {
  const [isScreenSmall,setIsScreenSmall] = useState(false)
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isProjectLoading, setProjectLoading] = useState(false)
    
  const getProjects = async () => {
      setProjectLoading(true)
      try {
          const response = await fetchProjects();
          if (response.status === 200) {
            setProjects(response.data);
            setProjectLoading(false)
          }
          else {
              setProjects([]);
              setProjectLoading(false)
          }
      } 
      catch (error) {
        console.error(error);
      }
    }

  const searchProject = async () => {
    setProjectLoading(true)
    try {
      const response = await searchProjects(searchQuery)
      // axios.get(`/projects/search?query=${searchQuery}`);
      if (response.status === 200)  {
        setSearchResults(response.data);
        setProjectLoading(false)
      } else {
        setSearchResults([]);
        setProjectLoading(false)
      }
    } catch (error) {
      console.error(error);
      setProjectLoading(false)
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    searchProject();
  };

  useEffect(()=>{
    getProjects();
    if(window.innerWidth <= 425){
      setIsScreenSmall(true) 
      return     
    }
    setIsScreenSmall(false)
  },[])
  return (
    <>
      {/*<img 
        src={project} 
        alt="Project" 
        className="background-image" 
      />
      <Header page={"project"} logo={'header-logo1'}>
        <p className="text-neutral-wh-color">
          Our Students <span className="text-primary-color">Project</span>
        </p>
        <p className="text-neutral-wh-color">
          This shows projects of our past students 
          the aim is to make them available to the existing students 
          of the systems Engineering department
        </p>
        <input
          type="text"
          placeholder='Search for projects, students'
          className="project-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
              // e.preventDefault();
              handleSearch();
            }}
        />
      </Header>
      <main className='project-main'>
        <p className="text-primary-color">Top Projects</p>
        <div className="project-main-body">

        {searchQuery ? 
        (
          searchResults.length > 0 && !isProjectLoading 
            ? ( 
            searchResults
            .filter(project => project.topProject)
            .map((project, index) => (
              <Student
                key={index} 
                picture={project.image}
                name={project.student_name} 
                pdf={project.pdf} 
                video={project.video} 
              />
            ))
          ) 
          : searchResults.length == 0 && isProjectLoading 
           ?
           (
            <>
              <section style={{background: "#FFF"}}>
                <div className="project-pic-container" ><Skeleton /></div>
                <p><Skeleton /></p>
                <div>
                  <button style={{backgroundImage: "none"}}>
                    <Skeleton />
                  </button>
                  <button style={{backgroundImage: "none",backgroundColor:"#ebebeb"}}>
                    <Skeleton />
                  </button>
                </div>
              </section>
              <section style={{background: "#FFF"}}>
                <div className="project-pic-container" ><Skeleton /></div>
                <p><Skeleton /></p>
                <div>
                  <button style={{backgroundImage: "none"}}>
                    <Skeleton />
                  </button>
                  <button style={{backgroundImage: "none",backgroundColor:"#ebebeb"}}>
                    <Skeleton />
                  </button>
                </div>
              </section>
              <section style={{background: "#FFF"}}>
                <div className="project-pic-container" ><Skeleton /></div>
                <p><Skeleton /></p>
                <div>
                  <button style={{backgroundImage: "none"}}>
                    <Skeleton />
                  </button>
                  <button style={{backgroundImage: "none",backgroundColor:"#ebebeb"}}>
                    <Skeleton />
                  </button>
                </div>
              </section>
            </>
          )
          : <p>Project not Found</p>
        ) : 
        (
          !isProjectLoading
          ?(
          projects
            .filter(project => project.topProject)
            .map((project, index) => (
              <Student
                key={index} 
                picture={project.image}
                name={project.student_name} 
                pdf={project.pdf} 
                video={project.video} 
              />)
            ))
          : <>
              <section style={{background: "#FFF"}}>
                <div className="project-pic-container" ><Skeleton /></div>
                <p><Skeleton /></p>
                <div>
                  <button style={{backgroundImage: "none"}}>
                    <Skeleton />
                  </button>
                  <button style={{backgroundImage: "none",backgroundColor:"#ebebeb"}}>
                    <Skeleton />
                  </button>
                </div>
              </section>
              <section style={{background: "#FFF"}}>
                <div className="project-pic-container" ><Skeleton /></div>
                <p><Skeleton /></p>
                <div>
                  <button style={{backgroundImage: "none"}}>
                    <Skeleton />
                  </button>
                  <button style={{backgroundImage: "none",backgroundColor:"#ebebeb"}}>
                    <Skeleton />
                  </button>
                </div>
              </section>
              <section style={{background: "#FFF"}}>
                <div className="project-pic-container" ><Skeleton /></div>
                <p><Skeleton /></p>
                <div>
                  <button style={{backgroundImage: "none"}}>
                    <Skeleton />
                  </button>
                  <button style={{backgroundImage: "none",backgroundColor:"#ebebeb"}}>
                    <Skeleton />
                  </button>
                </div>
              </section>
            </>
        )}
          
          
        </div>
        <div className='table'>
          <p className="text-primary-color">Students Project</p>
          <p>This is a list of final year students project which enables students to have accesss and  download pdfs of the past students </p>
          { isScreenSmall 
          && <div className='small-screen'>
            <input 
              placeholder='Enter keyword' 
              type="text" value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              onKeyDown={(e) => {
                // e.preventDefault();
                handleSearch();
              }}
            />
            <p>Name of student/ Project topic</p>
          </div>
          }
          <table>
          {!isScreenSmall
            && <tr>
                <th>Name of Student</th>
                <th>Title</th>
                <th>
                  <input type="text" 
                    placeholder='Enter keyword'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                    // e.preventDefault();
                    handleSearch();
                  }}
                  />
                </th>
              </tr> 
              }

              {searchQuery ? (
                searchResults.length > 0
                  ? (
                    searchResults.map((project, index) => (
                      <tr
                        className={index % 2 === 0 ? 'bg-secondary-color1' : 'bg-secondary-color'}
                        key={index}
                      >
                        <td>
                          <p>{project.student_name}</p>
                          {isScreenSmall && <td>{project.title}</td>}
                        </td>
                        {!isScreenSmall && <td>{project.title}</td>}
                        <td className="table-btn">
                          {!isScreenSmall ? (
                            <>
                              <button>Watch video</button>
                              <button onClick={() => window.open(project.pdf, '_blank')}>Pdf download</button>
                            </>
                          ) : (
                            <>
                              <button onClick={() => window.open(project.pdf, '_blank')}>Pdf download</button>
                              <button>Watch video</button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))
                ) : (
                  <p>No Results Found With Provided Keyword</p>
                )
              ) : (
                 projects
                  .map((project, index) => (
                    <tr
                      className={index % 2 === 0 ? 'bg-secondary-color1' : 'bg-secondary-color'}
                      key={index}
                    >
                      <td>
                        <p>{project.student_name}</p>
                        {isScreenSmall && <td>{project.title}</td>}
                      </td>
                      {!isScreenSmall && <td>{project.title}</td>}
                      <td className="table-btn">
                        {!isScreenSmall ? (
                          <>
                            <button>Watch video</button>
                            <button onClick={() => window.open(project.pdf, '_blank')}>Pdf download</button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => window.open(project.pdf, '_blank')}>Pdf download</button>
                            <button>Watch video</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
              )}            
          </table>
        </div>
        <div className='viewmore'>
          <a href="#" className='text-primary-color'>view more</a>
        </div>
      </main>*/}
      <Header page={"project"} logo={'header-logo1'} >
      </Header>
      <div className='construction2'>
        <p className='para'>UNDER CONSTRUCTION</p>
        <p className='para'>We are in the process of enhancing our project page, stay tuned!</p>
        <img className='image' src={illustration} alt="illustration" />
      </div>
      <Footer />
    </>
  )
}
