import Axios from 'axios'
import '../App.css'
import React,{useState} from "react"

export default function Fetch() {

  const [sid, setsid] = useState('')
    const [name, setname] = useState('')
    const [message, setmessage] = useState('')

    const submitmessage = () =>{
      if (!sid || !name || !message ) {
          alert("Please fill in all fields.");
          return; // Stop execution if any field is empty
      }
      Axios.post('http://localhost:3001/api/messagei',{
            sid:sid,
            name:name,
            message:message
          
        }).then(()=>{
            alert("Sended !");
          });
        }



  return (
   <>
   <br></br>
    <div class="contact section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            
            <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>අප හා සම්බන්ධ වන්න</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div id="map">
           </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="item phone">
                <img src="assets/images/phone-icon.png" alt=""/>
                <h6>+94763937229
                  <br></br><span style={{fontWeight:'bold'}}>Phone Number</span></h6>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="item email">
                <img src="assets/images/email-icon.png" alt=""/>
                <h6>jayanthaweerasinghe13@gmail.com<br></br><span style={{fontWeight:'bold'}}>Business Email</span></h6>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-sm-4">
              <div class="item phone">
                <img src="assets/images/phone-icon.png" alt=""/>
                <h6>328-2-002-0013534 <br></br>
                People's Bank <br></br>
                Kottawa branch
                
                  <br></br><span style={{fontWeight:'bold'}}>Donations</span></h6>
              </div>
            </div>
            
          </div>

        </div>
        <div class="col-lg-5">
         
            <div class="row">
            <div class="col-lg-12">
                <fieldset>
                  <label className='form-label' for="email">Student Id</label>
                  <input type="text" name="sid" onChange={(e)=>{
                    setsid(e.target.value);
                }}
                id="sid"  className="form-control" placeholder="Student Id" required=""/>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label className='form-label' for="name">Full Name</label>
                  <input type="text" name="name" onChange={(e)=>{
                    setname(e.target.value);
                }}
                id="name" placeholder="Your Name..." className="form-control"  autocomplete="on" required/>
                </fieldset>
              </div>
              
              
              <div class="col-lg-12">
                <fieldset>
                  <label className='form-label' for="message">Message</label>
                  <textarea name="message" onChange={(e)=>{
                    setmessage(e.target.value);
                }}
                id="message" placeholder="Your Message" className="form-control"></textarea>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                <button className='btn btn-primary mt-3' onClick={submitmessage}>Send</button>
                </fieldset>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="col-lg-8">
        
      </div>
    </div>
  </footer>
   </>


  )
}