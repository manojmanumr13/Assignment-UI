import axios from "axios";

const username='manoj'
//If i enter wrong password we are unable to access end point
const password='1811321'
const authHeader=`Basic ${btoa(`${username}:${password}`)}`

const headers={ 'Authorization' : authHeader, 'Content-Type':'application/json'}

const postStudent=(data)=>axios.post(`http://localhost:8080/students`,data,{headers})
const postUniversity=(data)=>axios.post(`http://localhost:8080/university`,data,{headers})
const getStudent=()=>axios.get('http://localhost:8080/students',{headers})
const getUniversity=()=>axios.get('http://localhost:8080/university',{headers})
const updateStudent=(studentID,data)=>axios.put(`http://localhost:8080/students/${studentID}`,data,{headers})
const updateUniversity=(universityID,data)=>axios.put(`http://localhost:8080/university/${universityID}`,data,{headers})
const deleteStudent=(id)=>axios.delete(`http://localhost:8080/students/${id}`,{headers})
const deleteUniversity=(id)=>axios.delete(`http://localhost:8080/university/${id}`,{headers})
const getStudetById=(studentID)=>axios.get(`http://localhost:8080/students/${studentID}`,{headers})
const getUniversityById=(universityID)=>axios.get(`http://localhost:8080/university/${universityID}`,{headers})
const userLogin=(data)=>axios.post(`http://localhost:8080/signin`,data,{headers})
const userSignup = (data)=> axios.post(`http://localhost:8080/signup`,data,{headers})
export{userLogin,userSignup, getStudetById,getUniversityById, postStudent,postUniversity,getStudent,getUniversity,updateStudent,updateUniversity,deleteStudent,deleteUniversity}