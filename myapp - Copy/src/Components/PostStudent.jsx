import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { postStudent } from '../Services/Api';


export default function PostStudent() {
  const [studentName, setSname] = useState('');
  const [universityID, setUniversityID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      studentName: studentName,
      university: {
        universityID: universityID
      }
    
    }
    console.log(data)
    // axios.post(postStudent, data)
    postStudent(data)
      .then(response => { console.log(response.data) })
      .catch(err => { console.log(err) })
    setSname('');
    setUniversityID('');
    alert("Submitted")
  }

  return (
    <>
      <div className='auth-form'>
      <h1>Post Student Information</h1>
        <form className="auth-data" onSubmit={handleSubmit}>
          Enter the student name
          <input type="text" placeholder='Student Name' id='sname'   className="auth-input" value={studentName}
            onChange={(e) => setSname(e.target.value)} />
          Enter the Course Id
          <input type="num" placeholder='Univeristy ID' id='cid'  className="auth-input" value={universityID}
            onChange={(e) => setUniversityID(e.target.value)} />

          <button type='Submit' className="auth-btn green-bg white-txt">Submit</button>
       
        </form>

      </div>
    </>
  )
}
