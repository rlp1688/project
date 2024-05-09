import Axios from "axios";
import React, { useState, useEffect } from 'react'
import Header3 from '../components/Header.js'
import Footer from '../components/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img from '../images/img1.jpeg'
import img1 from '../images/img1.png'

import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../ticket.css'




const User = () => {

  
  
  return (
    <>
      <Header3 />
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
            <h2 style={{fontWeight:'bold',fontSize:'80px'}}>වැඩසටහනට වසර 7 <br></br>සපිරේ !</h2>
              <button style={{marginBottom:'4in'}} type="button" class="btn btn-dark">Watch video</button>


            </div>
          </div>
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* pharagraph */}

      <div class="featured section">
    <div style={{marginTop:'5rem'}} class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="left-image">
            <img src={img1} style={{marginTop:"2rem"}}  alt=""/>
          </div>
        </div>
        <div class="col">
          <div class="section-heading">
            <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}> හැදින්වීම</h1>
            <br></br>
            <p>
              බොහෝ පුද්ගලයින්ට තමාගේ ජීවිතයේ අගය පිළිබදවත්, තමන් ජීවත් විය යුත්තේ කෙසේද,
               තමන් කළ යුතු දේ මොනවාද, යන්න පිළිබඳ අවබෝධයක් ලැඛෙන්නේ ඔහු/ඇය වයසින් මුහුකුරා ගිය පසුවයි.
                එවිට ඔහුගේ ජීවිතයෙන් බොහෝ කාලයක් ගත වී හමාරයි. ඇතැමකුට තම අවාසනාවකට ඒ දේවල් පිළිබඳව අවබෝධයක් ඉබේම ලැඛෙයිි. 
                ඇතැම් දෙමව්පියන් මේ ලෝකයට දරුවන් බිහි කළත් ඔවුන් වෙනුවෙන් කළ යුත්තේ මොනවාද, 
                යන්න පිළිබඳව අවබෝධයක් නොමැතිව අන් අයගේ කීමට හෝ අන් අය අනුකරණය කර තම දරුවන්ට නොගැලපෙන හෝ ඔවුන් අකමැති මාර්ග ඔවුන්ට සාදා දෙයිි.
            </p>
            <br></br>
            <p>
              මවත් පියත් දෙදෙනාම රැකියාවට යාමේ ප්‍රතිඵලයක් වශයෙන් දරුවා නිසි පරිදි හදාවඩා ගැනීමට පෙරට වඩා බාධක පැන නැගී ඇත.
               මෙම ගැටලූවලට සාර්ථකව මුහුණදෙමින් පෙරට වඩා සාර්ථකව දරුවකු හදාවඩා ගැනීමට හැකි වන්නේ දරුවාගේ ස්වභාවය හා ඔහුගේ වර්ධන රටාව පිළිබඳව විද්‍යානුකූල දැනුම්ක් ඇති නම් පමණි.
                ඒ සදහා දෙමව්පියන්ට දායක විය හැකි ආකාරය හඳුන්වාදෙන බොහෝ කරුණු මෙහි අන්තර්ගතය. 
                දෙමව්පියන්ට තමාගේ දරුවාගේ ජීවිතය සාර්ථක කර ගැනීමට අවශ්‍ය උපරිම සහයෝගයක් හා දැනුමක් මේ පොතින් ලබාගත් හැක. 
                එමෙන්ම දෙමව්පියන්ටත් සතුටු විය හැකි සමාජයට වැඩදායී පුද්ගලයෙකු බිහි කිරීමට මෙම පොත් මංපෙත් හෙළි පෙහෙළි කර දෙයි.
            </p>
            <br></br>
            <p>
              මෙම පොතෙහි අන්තර්ගත වන සෑම කරුණක්ම අවධානයට ගන්න. 
              ඒ අනුව ක්‍රියා කරන්න. ඔබට මුණගැසෙන අනාගත මිතුරු මිතුරියන්ට සහකරුට සහකාරියට ගුරුවරුන්ට ද මෙම පොතෙන් තම සැබෑ අතීත ජීවිත කථාව සිහිපත් කිරීමට මෙමගින් ඔබට හැකිවේ.
              ඔබේ දුර්වල තැන් හඳුනාගන්න. දෙමාපියන් ඔබට කළ සේවයට සැමදා ගෞරව කරන්න. ඔහු බුද්ධිමත් මිනිසෙක් වු වශයෙන්, 
               රටට වැඩදායි සහ යහපත් පුරවැසියකු ලෙස ජීවත් වීමට අදිටන් කරගන්න. ඔබට දෙමව්පියන්ට ලබා දිය හැකි උසස්ම ගෞරවය එයයි.
            </p>
            <br></br>
            <p style={{fontWeight:'bold'}}>
              වැදගත්: ඔබ මෙම පොතෙහි අන්තර්ගත කරන කරුණු සහ එම කරුණු මත පදනම් වූ ඔබගේ ලකුණු ප්‍රමාණයන් මෙම වෙබ් අඩවියේ වාර්ෂිකව යාවත්කාලීන කරනු ඇත. 
              මෙය සිදුකරනු ලබන්නේ ඔබගේ පාසලේ මෙම කාර්යය සඳහා තෝරාගනු ලබන පුද්ගලයා විසිනි. 
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <br></br>
{/*
  <div class="video section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h1 style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}>වත්මන් ප්‍රගතිය</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="video-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          
        </div>
      </div>
    </div>
  </div>

  <div class="fun-facts">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="wrapper">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="counter">
                                
                                <div class="additional-info">
                                    <p class="count-text">දැනට සහභාගි වී ඇති ලමුන් සංඛ්‍යාව</p>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>785</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="counter">
                               
                                <div class="additional-info">
                                    <p class="count-text">අනුග්‍රාහකයින් සංඛ්‍යාව</p>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>452</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="counter">
                               
                                <div class="additional-info">
                                    <p class="count-text">සියලු සහතික පත් ලැබූ ලමුන් සංඛ්‍යාව</p>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>452</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
<br></br>
      





<Footer/>

    </>
  )
}



export default User