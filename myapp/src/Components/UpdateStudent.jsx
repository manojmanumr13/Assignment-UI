import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getStudent, getStudetById, updateStudent } from '../Services/Api';
export default function UpdateStudent() {
    const navigate = useNavigate()
    const { studentID } = useParams();
    const [editx, setEditx] = useState({
        studentName: '',
        universityID: 0
    })
    const fectdata = async () => {
        const myprevdata = await getStudetById(studentID)
        // axios.get(`http://localhost:8080/students/${studentID}`)
        setEditx({
            studentName: myprevdata.data.studentName,
            universityID: myprevdata.data.university.universityID
        })
     console.log(myprevdata.data.university.universityID)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setEditx({ ...editx, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const finaldata = {
            studentName: editx.studentName,
            university: {
                universityID: editx.universityID
            }
        }
        // axios.put(`http://localhost:8080/students/${studentID}`, finaldata)
        updateStudent(studentID,finaldata)
        navigate('/gstudent')
    }

    useEffect(() => {
        fectdata()
    }, [])
    return (
        <>
            <div className="auth-form">
                <form className="auth-data" onSubmit={handleSubmit}>

                    <input type="text" name="studentname" id="studentName" placeholder="studentname" required className="auth-input" value={editx.studentName} onChange={handleChange} />
                    <input type="number" name="universityid" id="universityID" placeholder="university id" required className="auth-input" value={editx.universityID} onChange={handleChange} />

                    <div className="auth-btn-group">
                        <button type="submit" className="auth-btn green-bg white-txt">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}
