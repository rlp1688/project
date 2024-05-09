
import Header from '../components/Header2'
import '../ticket.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Finalpage() {

  const [qid, setqid] = useState('')
  const [studentid, setStudentid] = useState('')
  const [points, setpoints] = useState('')
  const navigate = useNavigate()

  const submitSignup = () => {
    Axios.post('http://localhost:3001/api/points', {
      qid: qid,
      studentid: studentid,
      points: points,

    }).then(() => {
      Axios.post('http://localhost:3001/api/updatestatus', {
        idsubmision: id,
      }).then(() => {
        alert("done !");
        navigate("/submission");
      });
    });
  }

 
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:3001/api/signup2', {
        name: id
      });

      const resultsData = response.data.map(result => ({

        qid: result.qid,
        studentid: result.studentid,
        answer:result.answer,
        image: result.image

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
        <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>submission Id :  <input type='text'
          name='id'
          value={id}
        ></input>  </h1>

        <div className='form' onSubmit={handleSubmit}>
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>Search submissions</button>
        </div>

      </div>

      {error && <p>{error}</p>}
      {results.length > 0 && results.map((result, index) => (
        <section class="container">
          <div class="container mt-5">
            <table class="table">
              <thead>
                <tr>
                  <th>Question Id</th>
                  <th>Q Id</th>
                  <th>Student id </th>
                  
                  <th>S id</th>
                  <th>Image</th>
                  <th>Answer</th>
                  <th>Points</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td> {result.qid}
                  </td>
                  <input
                    type='text'
                    name='qid'
                    placeholder='please enter qid '
                    className="form-control"
                    onChange={(e) => {
                      setqid(e.target.value);
                    }}
                  />
                  <td> {result.studentid}
                  </td>
                  <input
                    type='text'
                    placeholder='please enter s id'
                    name='studentid'
                    className="form-control"
                    onChange={(e) => {
                      setStudentid(e.target.value);
                    }}
                  />
                 <td style={{ width: '3in', height: '1.5in' }}>
  {result.image && (
    <img
      src={require(`../../../server/upload/${result.image}`)}
      alt="Image Uploaded"
      onError={(e) => {
        console.error("Error loading image:", e);
        // Optionally, you can set a fallback image here
        // e.target.src = fallbackImage;
      }}
    />
  )}
</td>

                  <td> {result.answer}
                  </td>

                  <td><input type='text'
                    name='points' onChange={(e) => {
                      setpoints(e.target.value);
                    }}
                    placeholder='enter the points'
                    className="form-control"
                  ></input></td>
                 
                  <td>
                    <button className='btn btn-primary mt-3' onClick={submitSignup}>Enter</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ))}



    </>
  )

}

