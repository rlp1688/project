import React,{useState} from "react"
import Axios from 'axios'
import '../App.css';
import Header from '../components/Header3'
import { useNavigate } from "react-router-dom";




export default function Login(){


    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitLogin = () =>{
        Axios.post('http://localhost:3001/api/insert',{
            username:username,
            password:password,
        }).then(()=>{
            alert("Successfully Login !");
            navigate("/user")

        })
        .catch(error => {
            // If there's an error (e.g., invalid username or password)
            if (error.response && error.response.status === 401) {
                // Status code 401 indicates unauthorized access
                alert("Invalid username or password. Please try again.");
            } else {
                // Handle other errors
                console.error("Login failed:", error);
                alert("Login failed. Please try again later.");
                navigate("/login")
            }
        });
    }

    return(
                <>
               <Header/>
                <div className="App container mt-4">
            
            <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>Login Page</h1>
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
            <p>do not have an account <span onClick={() => navigate("/signup")}>Signup</span></p>
           
            <button className='btn btn-primary mt-3' onClick={submitLogin}>Login</button>
            </div>
            </div>
                </>
            
        
    )
}