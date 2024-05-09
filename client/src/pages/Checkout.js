import React from 'react'
import Header from '../components/Header1'
import QrCode from 'react-qr-code'
import '../ticket.css'
import { useParams } from 'react-router-dom';



export default function Checkout() {

  const { id } = useParams();

  return (
    <>
      <Header />

      <div className='row' style={{ marginBottom: '15rem' }}>

       <dic class='col'>
       <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>This is your QrCode: {id}</h1>
        <QrCode value='./final' /> <br></br><br></br>
        {/*<Link to={`/finalpage/${id}`}>
          <button type="button" className="btn btn-primary">
            Go to Final Page
          </button>
        </Link>*/}
       </dic>

       <div class='col'>
       <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}> Ticket details</h1>

<article class="card fl-left">
      <section class="date">
        <time datetime="23th feb">
          <span>Rs:700</span><span>First class</span>
        </time>
      </section>
      <section class="card-cont">
        <small>Udarata Manike</small>
        <h3>From: Badulla</h3>
        <h3>To:Colombo</h3>
        <div class="even-date">
          <i class="fa fa-calendar"></i>
          <time>
            <span>2024/02/8</span>
            <span>04.30 AM to 12.30 PM</span>
          </time>
        </div>
        <div class="even-info">
          <i class="fa fa-map-marker"></i>
          <p>
           
          </p>
        </div>
        
      </section>
    </article>
       </div>
      </div>
      

      



    </>
  )
}
