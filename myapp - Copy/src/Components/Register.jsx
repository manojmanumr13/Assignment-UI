import axios from "axios";
import { useState } from "react";
import { userSignup } from "../Services/Api";
export const Register = () => {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
     const handleSubmit=(e)=>
     {
        e.preventDefault();
        const data={name,email,password};
        console.log(data)
        userSignup(data)
        .then(response=>{console.log(response.data)})
        .catch(err=>{console.log(err)})
        setName('');
        setEmail(''); setPassword('');
        alert("Registration Successful")
     }

    return (
        <>
            <div className="auth-form">
                <form className="auth-data" onSubmit={handleSubmit} method="post" >
                    <h1>Register</h1>
                    <input type="text" name="Name" id="name" placeholder="Name" required className="auth-input" value={name}
          onChange={(e) => setName(e.target.value)}
 />
                    <input type="email" name="Email" id="email" placeholder="Email" required className="auth-input" value={email}
          onChange={(e) => setEmail(e.target.value)}
/>
                    <input type="password" name="Password" id="password" placeholder="Password" required className="auth-input" value={password}
          onChange={(e) => setPassword(e.target.value)}
 />

                    <div className="auth-btn-group">
                        <button type="submit" className="auth-btn green-bg white-txt">Register</button>
                        <button type="reset" className="auth-btn red-bg white-txt">Clear</button>
                    </div>
                </form>
            </div>
        </>
    )
}

