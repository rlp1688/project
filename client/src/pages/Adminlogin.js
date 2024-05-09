import React,{useState} from "react"
import Axios from 'axios'
import '../ticket.css'
import Header from '../components/Header3'
import { useNavigate } from "react-router-dom";




export default function Adminlogin(){

   
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitLogin = () =>{
        Axios.post('http://localhost:3001/api/adminlogin',{
            username:username,
            password:password,
        }).then(()=>{
            alert("Welcome to Admin Panal !");
            navigate("/admin")

        });
    }

    return(
                <>
                <Header/>
                <div className="App container mt-4">
            
            <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>Admin Login</h1>
            <div className='form'>
            <label className='form-label'>Username </label> 
            <input 
                type='text' 
                name='username' onChange={(e)=>{
                    setUsername(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            <label className='form-label'>Password</label> 
            <input 
                type='password' 
                name='password' onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                className='form-control'
                
            />
            
            <button className='btn btn-primary mt-3' onClick={submitLogin}>Login</button>
            </div>
            </div>

            

                </>
            
        
    )
}