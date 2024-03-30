import React, { useEffect, useState } from 'react'
import '../styles/modal.css'
import OtpInput from 'react-otp-input';
// import axios from '../api'
import Swal from 'sweetalert2'
import {sendOTP, validateOTP, createComplaint} from '../backend/server.js'


export default function Modal({func}) {
    const [loading, setLoading] = useState(false)
    const [next,setNext] = useState(false);
    const [otp, setOtp] = useState('');
    const [complaint,setComplaint] = useState(false);
    const [formValue, setFormValue] = useState({
        name: '', email: '', complaintText: ''
    })
    const [matric,setMatric] = useState('')
    const {name,email,complaintText} = formValue
    function handleForm(e){
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name] : value
        })
    }
    function handleMatric(value){
        const replacedString = value.replace(/[^0-9]/g,'');
        const slicedString = replacedString.slice(0,9);
        setMatric(slicedString)
    }
    // function scrollHandler(){
    //     window.scrollTo(0, 0);
    // }
    const authenticate = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          if (matric.length == 0) {
            Swal.fire({
              title: 'Not Yet', 
              icon: 'warning', 
              text: 'Matric number is required',             
              confirmButtonColor: '#12293A',
              })
          }
          else {
            // const response = await sendOTP(matric);
            const response = await sendOTP(matric);
            if (response.success) {
                setNext(true)
            }
          }
    
        } catch (error) {          
          if (error.status == 404) {
            Swal.fire({
              icon: 'warning', 
              text: error.message,             
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

      const validate = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          if (otp.length == 0) {
            Swal.fire({
              title: 'Not Yet', 
              icon: 'warning', 
              text: 'OTP is required',             
              confirmButtonColor: '#12293A',
              })
          }
          else {
            const response = await validateOTP(otp);
            if (response.success) {
                func(false)
                window.location.reload();
            }
          }
    
        } catch (error) {
          if (error.status == 400) {
            Swal.fire({
              icon: 'warning', 
              text: error.message,             
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

      const sendComplaint = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          if (name.length == 0 || email.length == 0 || complaintText.length == 0) {
            Swal.fire({
              title: 'Not Yet', 
              icon: 'warning', 
              text: 'All fields are required',             
              confirmButtonColor: '#12293A',
              })
          }
          else {
            const response = await createComplaint({ name, email, complaintText });
            if (response.success) {
                Swal.fire({
                    title: 'Complaint sent', 
                    icon: 'success', 
                    text: "We'll reach back to you shortly",             
                    confirmButtonColor: '#12293A',
                })
                .then(() => {
                    setFormValue({
                        name: '', email: '', complaintText: ''
                    })
                    setComplaint(false)
                    func(true)
                    setNext(false)
                  })
            }
          }
    
        } catch (error) {
          if (error.status == 404) {
            Swal.fire({
              icon: 'warning', 
              text: error.message,             
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
    // useEffect(()=>{
    //     window.addEventListener('scroll',scrollHandler)
    //     return ()=>{
    //         window.removeEventListener("scroll",scrollHandler)
    //     }
    // },[])
    return (
    <div className='modal'>
        { !next && !complaint
        ? 
            <div className='matric-form'>
                <label htmlFor="matric">Enter matric number</label>
                <input 
                    type="text"
                    value={matric}
                    onChange={(e)=>handleMatric(e.target.value)}
                    name='matric' 
                    id='matric'
                />
                {/* <button onClick={authenticate}>Next</button>     */}
                <button type="submit" onClick={authenticate} disabled={loading} className='button'>
                    {loading ? <> <span className="spinner" /> Please wait... </> : 'Next'}
                </button>   
            </div>
        :  next && !complaint 
        ?   <div className='verification-code'>
                <p>Verification code</p>
                <p>we have sent a verification to your mail</p>
                 <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputType={"tel"}
                    // renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props}  style={{width:'5.5rem',textAlign:"center"}}/>}
                 />
                <p>Didn't receive an otp? 
                    <a href="#" onClick={()=>setComplaint(true)}>Send a complaint</a></p>
                {/* <button onClick={()=>func(false)} >Next</button> */}

                <button type="submit" onClick={validate} disabled={loading} className='button'>
                    {loading ? <> <span className="spinner" /> Please wait... </> : 'Next'}
                </button>  
            </div>
        :   <div className='complaint-form'>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name='name' 
                    id='name'
                    value={name}
                    onChange={handleForm}
                />
                <label htmlFor="email">Email address</label>
                <input 
                    type="text" 
                    name='email' 
                    id="email"
                    value={email}
                    onChange={handleForm}
                />
                <label htmlFor="complaintText">Complaint</label>
                <textarea 
                    name='complaintText' 
                    id='complaintText'
                    value={complaintText}
                    onChange={handleForm}    
                ></textarea>
                {/* <button onClick={()=>func(false)}>Send</button>  */}
                <button type="submit" onClick={sendComplaint} disabled={loading} className='button'>
                    {loading ? <> <span className="spinner" /> Please wait... </> : 'Send'}
                </button>  
            </div>
        }
    </div>
  )
}
