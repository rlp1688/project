import React,{useState} from "react"
import Axios from 'axios'
import '../App.css';
import Header from '../components/Header2'
import { useParams } from "react-router-dom";




export default function Newsupdate(){

    
    const{id}=useParams();
    const [headline, setname] = useState('')
    const [description, setDescription] = useState('')
    const [date, setdate] = useState('')
    const [location, setLocation] = useState('')

    const submitupdate = () =>{
        Axios.post(`http://16.16.182.70:3001/api/newsupdate/${id}`,{
            headline:headline,
            description:description,
            date:date,
            location:location
        }).then(()=>{
            alert("news updated !");
            

        });
    }

    return(
                <>
                <Header/>
                <div className="App container mt-4">
            
            <h1>News</h1>
            <div className='form'>
            <label className='form-label'>Headline</label> 
            <input 
                type='text' 
                name='headline' onChange={(e)=>{
                    setname(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            <label className='form-label'>description</label> 
            <textarea 
                type='text' 
                name='description' onChange={(e)=>{
                    setDescription(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            <label className='form-label'>Date</label> 
            <input 
                type='date' 
                name='date' onChange={(e)=>{
                    setdate(e.target.value);
                }}
                className='form-control'
                
            />
            <br />

            <label className='form-label'>location</label> 
            <input 
                type='text' 
                name='location' onChange={(e)=>{
                    setLocation(e.target.value);
                }}
                className='form-control'
                
            />
            <button className='btn btn-primary mt-3' onClick={submitupdate}>Post</button>
            </div>
            </div>

            
        </>
    )
}