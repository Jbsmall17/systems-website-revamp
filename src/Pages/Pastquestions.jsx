import React, { useEffect, useState } from 'react'
import pq_bg from "../assets/images/pq-bg.png"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Pq from '../components/pq'
import '../styles/pq.css'
import axios from '../api'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Modal from '../components/Modal'

export default function Pastquestions() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false)
    const [isSemesterFirst,setIsSemesterFirst] = useState(true)
    const [isModalVisible, setModalVisible] = useState(false)
    const getQuestions = async () => {
      setLoading(true)
      try {
          const response = await axios.get(`/questions`);
          if (response.data.success) {
            setQuestions(response.data.data);
            setLoading(false);
            setModalVisible(false)
          }
          else {
              setQuestions([]);
              setLoading(false)
              setModalVisible(true)
          }
      } 
      catch (error) {
        console.error(error);
        setLoading(false)
        setModalVisible(true)
      }
    }

    useEffect(()=>{
      getQuestions();
    },[])


  return (
    <>
       {isModalVisible && <Modal func={setModalVisible} />}
      <img src={pq_bg} alt="past question background image" className='pq-bg'/>
      <Header page={"pq"} logo={'header-logo-bg'}>
        <p className='text-primary-color'>PAST QUESTIONS</p>
      </Header>
      <main className='semester-container'>
      <main className='semester'>
        <p className={isSemesterFirst ? 'semester' : null} onClick={()=>{setIsSemesterFirst(true)}}>First Semester</p>
        <p className={isSemesterFirst ? null : 'semester'} onClick={()=>{setIsSemesterFirst(false)}}>Second Semester</p>
      </main>
      {isSemesterFirst
      ?
        <main className='pq-container first-semester'>
        <div>
          <p className="text-primary-color">100 Level</p>
          <div className='pq-level-container'>
            {/* <Pq year={'2016/2017 session'}/>
            <Pq year={'2017/2018 session'}/>
            <Pq year={'2018/2019 session'}/>
            <Pq year={'2019/2020 session'}/>
            <Pq year={'2021/2022 session'}/>
            <Pq year={'2022/2023 session'}/> */}
            { 
              !loading && questions.length > 0
              ?
              questions
              .filter(question => question.level === '100')
              .filter((question) => question.semester === "First")
              .map((question, index) => (
                <Pq
                  key={index} 
                  year={question.session}
                  pdf={question.pdf}
                />
              ))
              : !loading && questions.length == 0
              ? <p>Past question not Found</p>
              : <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
            }
          </div>
        </div>
        <div>
          <p className="text-primary-color">200 Level</p>
          <div className='pq-level-container'>
          { 
              !loading && questions.length > 0
              ?
              questions
              .filter(question => question.level === '200')
              .filter((question) => question.semester === "First")
              .map((question, index) => (
                <Pq
                  key={index} 
                  year={question.session}
                  pdf={question.pdf}
                />
              ))
              : !loading && questions.length == 0
              ? <p>Past question not Found</p>
              : <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
            }
          </div>
        </div>
        <div>
          <p className="text-primary-color">300 Level</p>
          <div className='pq-level-container'>
          { 
              !loading && questions.length > 0
              ?
              questions
              .filter(question => question.level === '300')
              .filter((question) => question.semester === "First")
              .map((question, index) => (
                <Pq
                  key={index} 
                  year={question.session}
                  pdf={question.pdf}
                />
              ))
              : !loading && questions.length == 0
              ? <p>Past question not Found</p>
              : <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
            }
          </div>
        </div>
        <div>
          <p className="text-primary-color">400 Level</p>
          <div className='pq-level-container'>
          { 
              !loading && questions.length > 0
              ?
              questions
              .filter(question => question.level === '400')
              .filter((question) => question.semester === "First")
              .map((question, index) => (
                <Pq
                  key={index} 
                  year={question.session}
                  pdf={question.pdf}
                />
              ))
              : !loading && questions.length == 0
              ? <p>Past question not Found</p>
              : <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
            }
          </div>
        </div>
        <div>
          <p className="text-primary-color">500 Level</p>
          <div className='pq-level-container'>
          { 
              !loading && questions.length > 0
              ?
              questions
              .filter(question => question.level === '500')
              .filter((question) => question.semester === "First")
              .map((question, index) => (
                <Pq
                  key={index} 
                  year={question.session}
                  pdf={question.pdf}
                />
              ))
              : !loading && questions.length == 0
              ? <p>Past question not Found</p>
              : <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
            }
          </div>
        </div>
        </main>
      : 
        <main className='pq-container second-semester'>
      <div>
        <p className="text-primary-color">100 Level</p>
        <div className='pq-level-container'>
          {/* <Pq year={'2016/2017 session'}/>
          <Pq year={'2017/2018 session'}/>
          <Pq year={'2018/2019 session'}/>
          <Pq year={'2019/2020 session'}/>
          <Pq year={'2021/2022 session'}/>
          <Pq year={'2022/2023 session'}/> */}
          { 
            !loading && questions.length > 0
            ?
            questions
            .filter(question => question.level === '100')
            .filter((question) => question.semester === "Second")
            .map((question, index) => (
              <Pq
                key={index} 
                year={question.session}
                pdf={question.pdf}
              />
            ))
            : !loading && questions.length == 0
            ? <p>Past question not Found</p>
            : <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
          }
        </div>
      </div>
      <div>
        <p className="text-primary-color">200 Level</p>
        <div className='pq-level-container'>
        { 
            !loading && questions.length > 0
            ?
            questions
            .filter(question => question.level === '200')
            .filter((question) => question.semester === "Second")
            .map((question, index) => (
              <Pq
                key={index} 
                year={question.session}
                pdf={question.pdf}
              />
            ))
            : !loading && questions.length == 0
            ? <p>Past question not Found</p>
            : <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
          }
        </div>
      </div>
      <div>
        <p className="text-primary-color">300 Level</p>
        <div className='pq-level-container'>
        { 
            !loading && questions.length > 0
            ?
            questions
            .filter(question => question.level === '300')
            .filter((question) => question.semester === "Second")
            .map((question, index) => (
              <Pq
                key={index} 
                year={question.session}
                pdf={question.pdf}
              />
            ))
            : !loading && questions.length == 0
            ? <p>Past question not Found</p>
            : <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
          }
        </div>
      </div>
      <div>
        <p className="text-primary-color">400 Level</p>
        <div className='pq-level-container'>
        { 
            !loading && questions.length > 0
            ?
            questions
            .filter(question => question.level === '400')
            .filter((question) => question.semester === "Second")
            .map((question, index) => (
              <Pq
                key={index} 
                year={question.session}
                pdf={question.pdf}
              />
            ))
            : !loading && questions.length == 0
            ? <p>Past question not Found</p>
            : <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
          }
        </div>
      </div>
      <div>
        <p className="text-primary-color">500 Level</p>
        <div className='pq-level-container'>
        { 
            !loading && questions.length > 0
            ?
            questions
            .filter(question => question.level === '500')
            .filter((question) => question.semester === "Second")
            .map((question, index) => (
              <Pq
                key={index} 
                year={question.session}
                pdf={question.pdf}
              />
            ))
            : !loading && questions.length == 0
            ? <p>Past question not Found</p>
            : <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
          }
        </div>
      </div>
        </main>
      }
      </main>
      <Footer />
    </>
  )
}
