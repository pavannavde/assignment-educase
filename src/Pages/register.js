import React, { useState } from 'react'
import Input from '../Components/Input'
import { useNavigate } from 'react-router'

const Register = () => {
  const[user, setUser] = useState({name:'',phone:'',email:'',company:'', agency:'',password:''});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    if(user.name && user.phone && user.email && user.company && user.agency && user.password !== '')
    {
      navigate('/login');
    }
    else{
      alert('Please fill all the fields');
    }
  }
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <form className='register' onSubmit={handleSubmit}>
        <h1>Create your PopX account</h1>
        <Input lebel={'Full Name'} Placeholder={"Enter Your Name"} name={'name'} handleChange={handleChange}/>
        <Input lebel={'Phone Number'} Placeholder={"Enter Phone Number"} name={'phone'} handleChange={handleChange}/>
        <Input lebel={'Email Address'} Placeholder={"Enter Email Address"} name={'email'} handleChange={handleChange}/>
        <Input lebel={'Password'} Placeholder={"Enter Password"} name={'password'} handleChange={handleChange}/>
        <Input lebel={'Company Name'} Placeholder={"Enter Your company name"}name={'company'} handleChange={handleChange}/>
        <label >Are you an Agency ?</label>
        <div>
            <span>Yes</span>
            <input type='radio' id='agency' name='agency' style={{marginRight:"20px"}} value='Yes' onChange={handleChange}/>
            <span>No</span>
            <input type='radio' id='agency' name='agency' value='No' onChange={handleChange}/>
        </div>    
        <button type='submit' style={{color:'#fff',backgroundColor:'blueviolet'}}>Create Account</button>
    </form>
  )
}

export default Register;
