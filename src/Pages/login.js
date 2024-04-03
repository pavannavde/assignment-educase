import React, { useState } from 'react'
import Input from '../Components/Input'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[userDetail,setUserDetail] =useState({email:'',password:''})
  const navigate = useNavigate();
 
  function handleChange(e){
   setUserDetail({...userDetail,[e.target.name]:e.target.value});
  } 

  function handleClick(){
    const data =JSON.parse(localStorage.getItem('user'));
    if(data.email === userDetail.email && data.password === userDetail.password){
      navigate('/profile');
    }
    else{
      alert('Invalid Credentials');
    }
  }
  
  return (
    <div className='login'>
      <h1>Signin to Your PopX Account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Input lebel={'Email Address'} Placeholder={'Enter Your Email'} handleChange={handleChange} name='email'/>
      <Input lebel={'Password'} Placeholder={'Enter Password'} handleChange={handleChange} name='password'/>
      <button style={{backgroundColor:'blueviolet', color:'#fff'}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
