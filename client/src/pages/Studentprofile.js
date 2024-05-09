
import Axios from 'axios';
import React, { useState } from 'react'
import Header from '../components/Header1'
import { useNavigate } from 'react-router-dom';
import '../ticket.css'


export default function Studentprofile() {
    const [selectedId, setSelectedId] = useState(null);

    const navigate = useNavigate()
  const[open, openchange]=useState(false);
  const openpopup=()=>{
    openchange(true);
  }
  const closepopup=()=>{
    openchange(false);
  }
  const checkout=()=>{
    alert('Payment Success')
    navigate(`/checkout/${selectedId}`)
  }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await Axios.post('http://16.16.182.70:3001/api/search', {
                name: name,
                password: password
            });
    
            if (response.data.length === 0) {
                // If there is no response data, show an alert
                alert("No results found.");
            } else {
                const resultsData = response.data.map(result => ({
                    id:  result.idusers,
                    name: result.name,
                    school: result.school,
                    contact: result.contact,
                    email: result.email,
                    date: result.date
                }));
    
                setResults(resultsData);
                setError('');
            }
        } catch (error) {
            // If there's an error, set error state and clear results
            setError(error.response.data);
            setResults([]);
        }
    };
    
    return (
        <>
            <Header />
            <div className="container">
            <div className='container'>
                <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>Student Profile</h1>
                <div>
                <div className='form' onSubmit={handleSubmit}>
                    <label style={{fontWeight:'bold'}}>Username  <br></br></label>
                    <input className='form-control' style={{width:'40rem', marginLeft:'1rem'}}
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br></br>
                    <label style={{fontWeight:'bold'}}>Password  <br></br></label>
                    <input className='form-control' style={{width:'40rem', marginLeft:'1rem'}}
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       
                        
                    />
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Search</button>
                </div>
                </div>
                </div>

                {/*cards */}

                
                {error && <p>{error}</p>}
{results.length > 0 && (
    <ul>
        {results.map((result, index) => (
            <li key={index}>
                <h3>Name: {result.name}</h3>
                <p>Date: {result.date}</p>
                <p>School: {result.school}</p>
                <p>Student ID: {result.id}</p>
                <p>Email: {result.email}</p>
                
            </li>
        ))}
    </ul>
)}

      </div>
        </>
    );
}
