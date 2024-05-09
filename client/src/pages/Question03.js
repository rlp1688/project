import Header from '../components/Header1'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import '../css/contact.css'
import Axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import img from '../images/waterfall.png'

export default function Question03() {
  const [studentid, setStudentid] = useState('');
  const [answer, setanswer] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const qid = id;

  const submitSignup = () =>{
    Axios.post('http://16.16.182.70:3001/api/q3',{
        qid:qid,
        studentid:studentid,
        answer:answer
    }).then(()=>{
        alert("Success!");
        navigate("/tasks")

    });
}
  return (
    <>
      <Header />
      <div className="App container mt-4">
        <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>ස්වභාවධර්මයට ආදරය කිර්‍ර්ම</h1>
        <div className='form'>
          <div className="mb-3">
            <label className='form-label'>ප්‍රශ්න අංක</label>
            <input
              type='text'
              value={id} // Use value attribute to set value
              disabled // Disable editing
            />
          </div>

          <div className="mb-3">
            <label className='form-label'>ශිෂ්ය අංකය</label>
            <input
              type='text'
              className='form-control'
              name='studentid'
              value={studentid}
              onChange={(e) => {
                setStudentid(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
          <img src={img} alt=''></img>
            <label className="form-label">ඉහත රූපය දෙස බලා ඔබට හැගෙන දෙය සදහන් කරන්න</label>
            <textarea name="message" id="message"  className="form-control" onChange={(e) => {
                setanswer(e.target.value);
              }}></textarea>
          </div>

          
        </div>
        <button className='btn btn-primary mt-3' onClick={submitSignup}>Submit</button>
      </div>
      <Footer />
    </>
  )
}
