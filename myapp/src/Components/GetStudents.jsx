import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteStudent, getStudent } from '../Services/Api';

export default function GetStudents() {
  const navigate = useNavigate()
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = (e) => {
    // axios.get('http://localhost:8080/students')
    getStudent()
      .then(res => setInfo(res.data))
  }

  const handleDelete = (id) => {
    // axios.delete(`http://localhost:8080/students/${id}`)
    deleteStudent(id)
    fetchData();
  }
  const handleEdit = (id) => {
    navigate(`/student/edit/${id}`)
  }
  return (
    <div className='main'>
      <table className='table-data'>
        <thead>
          <tr>
            <th> Student ID  </th>
            <th> Student Name </th>
            <th> University Name</th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {info.map((data) => (
            <tr key={data.studentId}>
              <td> {data.studentId}</td>
              <td> {data.studentName}</td>
              <td> {data.university.universityName}</td>
              <td>
                <button className='table-btn green-bg white-txt' onClick={() => handleEdit(data.studentId)}>Edit</button>
                <button className='table-btn red-bg white-txt' onClick={() => handleDelete(data.studentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}
