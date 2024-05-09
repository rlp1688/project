import React, { useState } from 'react';
import Axios from 'axios';
import Header from '../components/Header2';
import '../ticket.css';
import { Link } from 'react-router-dom';

export default function Messages() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:3001/api/messages', {
        name: 'not done'
      });

      const resultsData = response.data.map(result => ({
        sid: result.sid,
        name: result.name,
        message: result.message,
        idmessages: result.idmessages
      }));

      setResults(resultsData);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setResults([]);
    }
  };

  const markAsRead = (idmessages) => {
    Axios.post('http://localhost:3001/api/updatestatuss', {
      idmessages: idmessages
    }).then(() => {
      alert("Marked as read!");
    });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className='container'>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '1.5rem' }}>Chat Box</h1>
          <div>
            <div className='form' onSubmit={handleSubmit}>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>New Messages</button>
            </div>
          </div>
        </div>

        <section className="container">
          <div className="container mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>Student Name</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {error && <tr><td colSpan="4">{error}</td></tr>}
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.sid}</td>
                    <td>{result.name}</td>
                    <td>{result.message}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => markAsRead(result.idmessages)}>Mark As Read</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
