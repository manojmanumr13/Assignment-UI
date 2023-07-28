import React from 'react'
import { Register } from './Components/Register'
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import PostUniveristy from './Components/PostUniveristy'
import PostStudent from './Components/PostStudent'
import GetStudents from './Components/GetStudents'
import GetUniversity from './Components/GetUniversity'
import UpdateStudent from './Components/UpdateStudent'
import UpdateUniversity from './Components/UpdateUniversity'
import Home from './Components/Home'
import Student from './Components/StudentUniversity'
import University from './Components/University'
export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/student' element={<Student/>}/>
    <Route exact path='/university' element={<University/>}/>
    <Route exact path='/puniversity' element={<PostUniveristy/>}/>
    <Route exact path='/pstudent' element={<PostStudent />}/>
    <Route exact path='/gstudent' element={<GetStudents/>}/>
    <Route exact path='/guniversity' element={<GetUniversity/>}/>
    <Route exact path='/student/edit/:studentID' element={<UpdateStudent/>}/>
    <Route exact path='/university/edit/:universityID' element={<UpdateUniversity/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
