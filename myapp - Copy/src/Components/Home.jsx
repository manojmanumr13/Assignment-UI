import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    const handleStudent = () => navigate('/student');
    const handleUniversity = () => { navigate('/university') }

    return (
        <div className="auth-form">
               <h1>Student and University Information</h1>
            <div className="auth-btn-group">
                <button className="auth-btn green-bg white-txt" onClick={handleStudent}>Student</button>
                <button className="auth-btn green-bg white-txt" onClick={handleUniversity}>University</button>
            </div>
        </div>
    );
}
