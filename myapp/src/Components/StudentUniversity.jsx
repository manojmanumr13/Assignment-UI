import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Student() {
    const navigate = useNavigate();
    const handlePostStudent = () => navigate('/pstudent');
    const handleGetStudent = () => { navigate('/gstudent') }
    return (
        <div className='auth-form'>
                <h1>Student Information</h1>
            <div className="auth-btn-group">
                <button type="button" className="auth-btn green-bg white-txt" onClick={handlePostStudent}>Post</button>
                <button type="button" className="auth-btn green-bg white-txt" onClick={handleGetStudent}>Get-Update-Delete</button>
            </div>
        </div>
    )
}


