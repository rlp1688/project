import React,{useState} from "react"
import Axios from 'axios'
import '../App.css';
import Header from '../components/Header3'
import { useNavigate } from "react-router-dom";




export default function Signup(){


    const navigate = useNavigate();
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [school, setschool] = useState('')
    const [date, setdate] = useState('')
    const [contact, setcontact] = useState('')
    const [password, setPassword] = useState('')
    const [passwordc, setPasswordc] = useState('')


    const submitSignup = () =>{
        if (!name || !email || !contact || !school || !date || !username || !password) {
            alert("Please fill in all fields.");
            return; // Stop execution if any field is empty
        }

        if (password!==passwordc) {
            alert("please check confirm password box !!");
            return; // Stop execution if any field is empty
        }

        Axios.post('http://localhost:3001/api/signup',{
            name:name,
            email:email,
            school:school,
            contact:contact,
            username:username,
            password:password,
            date:date
        }).then(()=>{
            alert("signup succesfully !");
            navigate("/login")

        }).catch(error => {
            // If there's an error (e.g., invalid username or password)
            if (error.response && error.response.status === 401) {
                // Status code 401 indicates unauthorized access
                alert("Invalid username or password. Please try again.");
            } else {
                // Handle other errors
                console.error("Login failed:", error);
                alert("Sign up failed. Please try again !!");
            }
        });
    }

    return(
                <>
                <Header/>
                
                <div className="App container mt-4">
            
            <h1  style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>Sign up</h1>
            <div className='form'>
            <label className='form-label'>Full name </label> 
            <input 
                type='text' 
                name='name' onChange={(e)=>{
                    setname(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            <label className='form-label'>Email</label> 
            <input 
                type='email' 
                name='email' onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

           
            <label className='form-label'>Contact No</label> 
            <input 
                type='text' 
                name='contact' onChange={(e)=>{
                    setcontact(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            <label className='form-label'>School</label> 
            <input 
                type='text' 
                name='school' onChange={(e)=>{
                    setschool(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            
            <label className='form-label'>Date Of Birth</label> 
            <input 
                type='date' 
                name='date' onChange={(e)=>{
                    setdate(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            <label className='form-label'>Username</label> 
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

            <label className='form-label'>Confirm password</label> 
            <input 
                type='password' 
                name='passwordc' onChange={(e)=>{
                    setPasswordc(e.target.value);
                }}
                className='form-control'
                
            />
             <p>Already have an account <span onClick={() => navigate("/login")}>Login</span></p>
            <button className='btn btn-primary mt-3' onClick={submitSignup}>Sign up</button>
            </div>
            </div>

            
        </>
    )
}