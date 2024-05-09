import React, {useState, useEffect} from "react";
import Header from '../components/Header2'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


export default function Userdetails(){

  const navigate = useNavigate();
  const deleteReview = (id) => {
    Axios.delete(`http://16.16.182.70:3001/api/deleteticket/${id}`)
    .then(() => {
      alert("delete successfully!");
      navigate("/userdetails");
    })
    .catch(error => {
      console.error('Error deleting review:', error);
    });
}

const [userList, setUserdetails] = useState([]) 

useEffect(()=>{
  Axios.get('http://localhost:3001/api/get').then((response)=>{
    setUserdetails(response.data)
  })
  },[]);


return (
  <>
<Header/>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Student ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">School</th>
      <th scope="col">Contact Info</th>
      <th scope="col">Date Of Birth</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {userList.map((val, index) => (
      <tr key={index}>
      <td>{val.idusers}</td>
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.school}</td>
        <td>{val.contact}</td>
        <td>{val.date}</td>
        <td>{val.username}</td>
        <td>{val.password}</td>
        <td>
           <button className="btn btn-danger" style={{ marginRight: '10px' }} onClick={() => deleteReview(val.idusers)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  </>
  
  


);

}

