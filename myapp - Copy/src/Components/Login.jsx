import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../Services/Api';

export default function Login() {
  const navigate = useNavigate();

  const [signin, setSignin] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setSignin({ ...signin, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(signin);
    if (res.status === 200) {
      const getuid = (res.data).charAt((res.data).length - 1);
      console.log(getuid)

      console.log("login successfull")
      // setTimeout(() => {
      navigate('/home');
      // }, 1500);

    } else if (res.status === 401) {
      console.log('invalid pass');
    } else {
      console.log('invalid email')
    }
  };
  const handleSignUp = () => {
    navigate('/register')
  }
  return (
    <>
      <div className="auth-form">
        <form className="auth-data">
          <h1>Login </h1>

          <input type="email" name="Email" id="email" placeholder="Email" required className="auth-input" onChange={handleChange} />
          <input type="password" name="Password" id="password" placeholder="Password" required className="auth-input" onChange={handleChange} />

          <div className="auth-btn-group">
            <button type="submit" className="auth-btn green-bg white-txt" onClick={handleSubmit} >Login</button>
            <button type="button" className="auth-btn green-bg white-txt" onClick={handleSignUp}>Signup</button>
          </div>
        </form>
      </div>
    </>
  )
}
