import React,{useState} from 'react'
import  alumni_bg from '../assets/images/alumni_bg.png'
import pic_1 from '../assets/images/alumni_img_1.png'
import pic_2 from '../assets/images/alumni_img_2.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Alumni.css'
import SuccessStory from '../components/SuccessStory'
import illustration from "../assets/images/amico.svg" 

export default function Alumni() {
  const [count,setCount] = useState(1);
  const [isMotionLeft,setIsMotionLeft] = useState(false)
  
  const svgHandler1= ()=>{
    if(count == 2 || count == 3){
      setIsMotionLeft(false)
      setCount(1)
    }
  }
  const svgHandler2 = () =>{
    if(count == 1){
      setIsMotionLeft(true)
    }
    else if(count == 3){
      setIsMotionLeft(false)
    }
    setCount(2)
  }
  const svgHandler3 = () =>{
    if(count == 1 || count == 2){
      setIsMotionLeft(true);
      setCount(3)
    }
  }
  const increaseCount =()=>{
    setIsMotionLeft(true)
    setCount( prev =>{
      let newCount = prev + 1;
      if(newCount > 3){
        return 1
      }
      return newCount;
    })
  }
  const decreaseCount = ()=>{
    setIsMotionLeft(false)
    setCount( prev =>{
      let newCount = prev - 1
      if(newCount <= 0){
        return 3
      }
      return newCount
    })
  }
  return (
    <>
      {/*<img src={alumni_bg} alt="alumni background" className='alumni-bg'/>
      <Header page={"alumni"} logo={'header-logo-bg'}>
        <p style={{color:"white"}}>Alumni</p>
      </Header>
      <main className='container-body'>
        <p className='text-primary-color'>Alumni</p>
        <p>Lorem ipsum dolor sit amet consectetur. 
          Massa nulla vehicula neque pellentesque non est purus tortor vitae. 
          Sagittis laoreet tristique in sit diam nec. 
          Quam at eget malesuada mattis quis. 
          Pellentesque elit aliquet malesuada molestie iaculis cras vel urna praesent. 
          Faucibus nisi tellus pellentesque aliquam vestibulum lacus gravida. Semper tellus eget est odio eleifend vehicula sollicitudin sit in. Vel sit massa dolor velit nullam tristique non viverra. Tellus interdum egestas commodo risus fringilla massa odio. Non tristique sit turpis non. Mattis massa 
        </p>
        <div>
          <p className='text-primary-color'>
            Alumni Benefits
          </p>
          <ul>
            <li>You  must have a minimum of ... in WAEC and JAMB ,you also have to seat for post jamb, below is a pdf showinng previous years cut off</li>
            <li>You  must have a minimum of ... in WAEC and JAMB ,you also have to seat for post jamb, below is a pdf showinng previous years cut off</li>
            <li>You  must have a minimum of ... in WAEC and JAMB ,you also have to seat for post jamb, below is a pdf showinng previous years cut off</li>
            <li>You  must have a minimum of ... in WAEC and JAMB ,you also have to seat for post jamb, below is a pdf showinng previous years cut off</li>
          </ul>
          <p>Alumni’s success stories</p>
        </div>
      </main>
      <div className='container'>
          {
            count == 1
            ?
            <SuccessStory
              selector={isMotionLeft ? "success-story1 movingleft" : "success-story1 movingRight"}
              stories={"Lorem ipsum dolor sit amet consectetur. Massa nulla vehicula neque pellentesque non est purus tortor vitae. Sagittis laoreet tristique in sit diam nec. Quam at eget ma vehicula neque pellentesque non est purus tortor vitae. Sagittis laoreet tristique in sit diam nec. Quam at eget malesuada mattis quis. Pellentesque elit aliquet malesuada molestie iaculis cras vel urna praesent. Faucibus nisi tellus Lorem ipsum dolor sit amet consectetur. Massa nulla vehicula neque pellentesque non est purus tortoSagittis laoreet tristique in sit diam nec. Quam at eget Lorem ipsum dolor sit amet consectetur. Massa nulla vehicula neque pellentesque non est purus tortor vitae. "}
              name={"Salami Gabriel"}
              date={"BGS 21/22"}
              link={pic_1}
              desc={"Salami Gabriel"}
            />
            : count == 2
            ?
            <SuccessStory
              selector={isMotionLeft ? "success-story2 movingleft" : "success-story2 movingRight"}
              stories={"Tempor deserunt occaecat officia ex ea et nostrud amet officia ipsum Lorem id sit. Dolor ex quis ut sint elit ullamco eiusmod et culpa ipsum et ea sunt. Veniam ullamco adipisicing proident dolore exercitation esse aute adipisicing est in labore nostrud irure magna."}
              name={"Omobolaji Adams"}
              date={"BGS 21/22"}
              link={pic_2}
              desc={"Omobolaji Adams"}
            />
            :
            <SuccessStory
              selector={isMotionLeft ? "success-story3 movingleft" : "success-story3 movingRight"} 
              stories={"Consequat culpa tempor duis ad deserunt. Minim fugiat cupidatat cillum aliqua do laborum. Ea quis labore ex veniam laborum ex nulla minim tempor est ea culpa Lorem. Tempor pariatur velit proident excepteur sunt mollit labore magna nostrud consequat aliquip excepteur sint."}
              name={"Adewole Benard"}
              date={"BGS 21/22"}
              link={pic_1}
              desc={"Adewole Benard"}
            />
          }
          
          <svg  onClick={decreaseCount} className={count!=1 ? 'svg-1 visible' : 'svg-1 hidden'} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <g opacity="0.85">
              <circle cx="24" cy="24" r="23.5" fill="#D9D9D9" stroke="#335F79"/>
              <path d="M18.4002 22.9569L23.3522 18.0087C23.579 17.7821 23.7064 17.4747 23.7064 17.1541C23.7064 16.8335 23.579 16.5261 23.3522 16.2996C23.1255 16.073 22.8181 15.9458 22.4976 15.9458C22.1771 15.9458 21.8696 16.073 21.6429 16.2996L14.6585 23.2786C14.6472 23.2892 14.636 23.2999 14.625 23.3109C14.3981 23.5376 14.2705 23.8453 14.2705 24.1661C14.2705 24.4869 14.3981 24.7945 14.625 25.0213C14.636 25.0322 14.6472 25.043 14.6585 25.0535L21.6429 32.0326C21.8696 32.2592 22.1771 32.3864 22.4976 32.3864C22.8181 32.3864 23.1255 32.2591 23.3522 32.0326C23.579 31.806 23.7064 31.4986 23.7064 31.178C23.7064 30.8575 23.579 30.5501 23.3522 30.3235L18.4002 25.3753H32.5223C32.843 25.3753 33.1507 25.248 33.3776 25.0213C33.6045 24.7945 33.7321 24.4869 33.7321 24.1661C33.7321 23.8453 33.6045 23.5376 33.3776 23.3109C33.1507 23.0842 32.843 22.9569 32.5223 22.9569H18.4002Z" fill="#335F79" stroke="#335F79"/>
            </g>
          </svg>
          <svg onClick={increaseCount} className={count!=3 ? 'svg-2 visible' : 'svg-2 hidden'} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <g opacity="0.85">
              < circle cx="24" cy="24"  r="23.5" transform="rotate(-180 24 24)" fill="#D9D9D9" stroke="#335F79"/>
              <path d="M29.5998 25.0431L24.6478 29.9913C24.421 30.2179 24.2936 30.5253 24.2936 30.8459C24.2936 31.1665 24.421 31.4739 24.6478 31.7004C24.8745 31.927 25.1819 32.0542 25.5024 32.0542C25.8229 32.0542 26.1304 31.927 26.3571 31.7004L33.3415 24.7214C33.3528 24.7108 33.364 24.7001 33.375 24.6891C33.6019 24.4624 33.7295 24.1547 33.7295 23.8339C33.7295 23.5131 33.6019 23.2055 33.375 22.9787C33.364 22.9678 33.3528 22.957 33.3415 22.9465L26.3571 15.9674C26.1304 15.7408 25.8229 15.6136 25.5024 15.6136C25.1819 15.6136 24.8745 15.7409 24.6478 15.9674C24.421 16.194 24.2936 16.5014 24.2936 16.822C24.2936 17.1425 24.421 17.4499 24.6478 17.6765L29.5998 22.6247H15.4777C15.157 22.6247 14.8493 22.752 14.6224 22.9787C14.3955 23.2055 14.2679 23.5131 14.2679 23.8339C14.2679 24.1547 14.3955 24.4624 14.6224 24.6891C14.8493 24.9158 15.157 25.0431 15.4777 25.0431H29.5998Z" fill="#335F79" stroke="#335F79"/>
            </g>  
          </svg>
          <div className="svg-container">
            <svg className={(count == 1) ? "active" : null} onClick={svgHandler1} xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
              <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
            </svg>
            <svg className={(count == 2) ? "active" : null} onClick={svgHandler2} xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
              <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
            </svg>
            <svg className={(count == 3) ? "active" : null} onClick={svgHandler3} xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
              <circle cx="4.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
            </svg>
          </div>
      </div>
      <Footer />
      */}
      <Header page={"alumni"} logo={'header-logo-bg'}>
      </Header>
        <div className='construction'>
          <p className='para'>UNDER CONSTRUCTION</p>
          <p className='para'>We are in the process of enhancing our alumni page, stay tuned!</p>
          <img className='image' src={illustration} alt="illustration" />
        </div>
      <Footer />
    </>
  )
}
