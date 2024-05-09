import React,{useState} from "react"
import Axios from 'axios'
import '../App.css';
import Header from '../components/Header2'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export default function TicketUpdate(){

    const navigate = useNavigate();
    const{id}=useParams();
    
    const [points, setpoints] = useState('')

    const submitupdate = () =>{
        Axios.post(`http://16.16.182.70:3001/api/ticketupdate/${id}`,{
            
            points:points
        }).then(() => {
            alert("Update successfully!");
            navigate("/tickettable");
          })
          .catch(error => {
            console.error('Error deleting review:', error);
          });
    }

    return(
                <>
                <Header/>
                <div className='App container mt-5'>
            <div>
            <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>Update Points</h1>
            <div className='form'>
                
                <label className='form-label'>New Points</label> 
                <input 
                    type='text' 
                    name='Points' 
                    onChange={(e) => setpoints(e.target.value)}
                    className='form-control'
                />
                <br />

                <button className='btn btn-primary mt-3' onClick={submitupdate}>Update Points</button>
            </div>
        </div>
        </div>

            
        </>
    )
}