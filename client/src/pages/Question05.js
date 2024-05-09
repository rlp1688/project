import Header from '../components/Header1'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import '../css/contact.css'
import Axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function Question05() {
  const [image, setImage] = useState(null);
  const [studentid, setStudentid] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const qid = id;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitSignup = () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('qid', qid);
    formData.append('studentid', studentid);

    Axios.post('http://16.16.182.70:3001/api/submission', formData, {
      
    })
    .then(() => {
      alert("Success!");
      navigate("/tasks");
    })
    .catch(error => {
      console.error('Error uploading image:', error);
    });
  }

  return (
    <>
      <Header />
      <div className="App container mt-4">
        <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>උපන් දින සමාජ සේවය</h1>
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
            <label className="form-label">සෑම උපන් දිනයකටම පැලයක් සිටුවා එහි පිංතූරයක් ඇතුලත් කරන්න</label>
            <input type="file" onChange={handleImageChange} />
          </div>

         
        </div>
        <button className='btn btn-primary mt-3' onClick={submitSignup}>Submit</button>
      </div>
      <Footer />
    </>
  )
}
