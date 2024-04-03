import React, { useEffect, useState } from 'react';

const Profile = () => {
  const[user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    setUser(JSON.parse(data));
  },[]);

  return (
    <div className='profile'>
      <h1 style={{backgroundColor:'#fff',margin:'0', padding:'10px'}}>Account Settings</h1>
      <div>
        <img src='https://images.pexels.com/photos/3584926/pexels-photo-3584926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='profile'/>
        <div>
            <p>{user ? user.name :"Name"}</p>
            <p>{user ? user.email:"Example@email"}</p>
        </div>
        
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </p>
    </div>
  )
}

export default Profile
