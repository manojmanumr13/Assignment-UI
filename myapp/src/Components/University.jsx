import { useNavigate } from "react-router-dom";

export default function University() {
    const navigate = useNavigate();
    const handlePostUniversity = () => navigate('/puniversity');
    const handleGetUniversity = () => { navigate('/guniversity') }
    return (
        <div className='auth-form'>
               <h1>University Information</h1>
        <div className="auth-btn-group">
            <button type="button" className="auth-btn green-bg white-txt" onClick={handlePostUniversity}>Post</button>
             <button type="button" className="auth-btn green-bg white-txt" onClick={handleGetUniversity}>Get-Update-Delete</button>
        </div>
        </div>
    )
}