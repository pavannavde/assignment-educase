import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className='home'>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button style={{color:'#fff',backgroundColor:'blueviolet'}} onClick={()=>navigate('/register')}>Create Account</button>
      <button style={{backgroundColor:''}} onClick={()=>navigate('/login')}>Already Register? Login</button>
    </div>
  )
}

export default Home;
