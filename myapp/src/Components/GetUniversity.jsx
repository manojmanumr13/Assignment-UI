import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteStudent, deleteUniversity, getUniversity } from '../Services/Api';


export default function GetUniversity() {
  const navigate = useNavigate()
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (e) => {
    // axios.get('http://localhost:8080/university')
    getUniversity()
      .then(res => setInfo(res.data))
  }

  const handleDelete = (id) => {
    // axios.delete(`http://localhost:8080/university/${id}`)
    deleteUniversity(id)
    fetchData();
  }

  const handleEdit = (id) => {
    navigate(`/university/edit/${id}`)
  }
  
  return (
    <div className='main'>
      <table className='table-data'>
        <thead>
          <tr>
            <th>University Id</th>
            <th>University Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {info.map(data => (<tr key={data.universityID}>
            <td>{data.universityID}</td>
            <td>{data.universityName}</td>
            <td>
              <button className='table-btn green-bg white-txt' onClick={() => handleEdit(data.universityID)} >Edit</button>
              <button className='table-btn red-bg white-txt' onClick={() => handleDelete(data.universityID)}>Delete</button>
            </td>
          </tr>

          ))}
        </tbody>
      </table>
    </div>
  )

}
