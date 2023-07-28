import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'
import { postUniversity } from '../Services/Api';

export default function PostUniveristy() {

  const [universityName, setUname] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { universityName };
    // axios.post('http://localhost:8080/university', data)
    postUniversity(data)
      .then(response => { console.log(response.data) })
      .catch(err => { console.log(err) })
    setUname('');
    alert("Submitted")

  }

  return (
    <>
      <div className='auth-form'>
      <h1>Post University Information</h1>
        <form className="auth-data" onSubmit={handleSubmit}>
          <input type="text" placeholder='University Name' id='uname'  className="auth-input" value={universityName}
            onChange={(e) => setUname(e.target.value)} />
          <button type='submit' className="auth-btn green-bg white-txt">Submit</button>        
        </form>

      </div>
    </>
  )
}
