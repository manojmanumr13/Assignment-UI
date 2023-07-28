import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getUniversityById, updateUniversity } from '../Services/Api';

export default function UpdateUniversity() {
    const navigate = useNavigate()
    const { universityID } = useParams();
    const [editx, setEditx] = useState({
        universityName: ''
    })
    const fectdata = async () => {
        const myprevdata = await getUniversityById(universityID)
        //  axios.get(`http://localhost:8080/university/${universityID}`)
        setEditx(myprevdata.data)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setEditx({ ...editx, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.put(`http://localhost:8080/university/${universityID}`, editx)
        updateUniversity(universityID,editx)
        navigate('/guniversity')
    }

    useEffect(() => {
        fectdata()
    }, [])
    return (
        <>
            <div className="auth-form">
                <form className="auth-data" onSubmit={handleSubmit}>
                    <input type="text" name="universityName" id="universityName" required className="auth-input" value={editx.universityName} onChange={handleChange} />
                    <div className="auth-btn-group">
                        <button type="submit" className="auth-btn green-bg white-txt">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}
