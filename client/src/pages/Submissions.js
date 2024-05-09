
import Axios from 'axios';
import React, { useState } from 'react'
import Header from '../components/Header2'
import '../ticket.css'
import { Link } from 'react-router-dom';



export default function Submisions() {


  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:3001/api/signup1', {
        name: 'not done'
      });

      const resultsData = response.data.map(result => ({
      
        idsubmisions: result.idsubmisions,
        qid: result.qid,
        studentid: result.studentid,
        

      }));

      setResults(resultsData);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setResults([]);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className='container'>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '1.5rem' }}>New submissions</h1>
          <div>
            <div className='form' onSubmit={handleSubmit}>
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>Search submissions</button>
            </div>
          </div>
        </div>

        {/*cards */}


          <section class="container">
            <div class="container mt-5">
              <table class="table">
                <thead>
                  <tr>
                    <th>Question Id</th>
                    <th>Student Id</th>
                    <th>submission Id</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                {error && <p>{error}</p>}
        {results.length > 0 && results.map((result, index) => (
                
        
                <tbody>
               
                  <tr>
                    <td> {result.qid}</td>
                    <td> {result.studentid}</td>
                    <td> {result.idsubmisions}</td>
                   
                    <td>
                    <Link to={`/finalpage/${result.idsubmisions}`}>
                    <button className="btn btn-danger">Marks</button>
                  </Link>
                    </td>
                  </tr>
                 
                </tbody>
                ))}
              </table>
            </div>
          </section>
      



        <div style={{ textAlign: 'center' }}>
        </div>


      </div>
    </>
  );
}
