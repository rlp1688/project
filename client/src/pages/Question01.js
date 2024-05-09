import Header from '../components/Header1'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import '../css/contact.css'
import Axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function Question01() {
  const [image, setImage] = useState(null);
  const [studentid, setStudentid] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Step 1: State for selected option
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
    formData.append('selectedOption', selectedOption); // Step 3: Include selected option in form data

    Axios.post('http://localhost:3001/api/submission', formData, {})
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
        <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>පැලයක් සිටුවීම</h1>
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
            <label className="form-label">ඔබ පැලයක් සිටුවන පින්තූරය මෙතනින් ඇතුලත් කරන්න</label>
            <input type="file" onChange={handleImageChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">ඔබ සිටවූයේ</label>
            <select className="form-select" onChange={(e) => setSelectedOption(e.target.value)}> {/* Step 2: Attach onChange event */}
              <option value="පොල් පැලයක්">පොල් පැලයක්</option>
              <option value="කොස් පැලයක්">කොස් පැලයක්</option>
              <option value="වෙනත් පැලයක්">වෙනත් පැලයක්</option>
            </select>
          </div>
        </div>
        <button className='btn btn-primary mt-3' onClick={submitSignup}>Submit</button>
      </div>
      <Footer />
    </>
  )
}
