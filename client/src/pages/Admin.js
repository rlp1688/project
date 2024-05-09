import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header2'
import React from 'react';
import {  Link } from 'react-router-dom';
import '../css/card.css'
import user from '../Assets/user.png'
import news from '../Assets/news.png'
import table from '../Assets/table.png'
import msg from '../Assets/msg.png'

export default function Admin(){
    return(
        <>
        <Header/>

            <div class="social-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-xs-12 text-center">
                            <div class="box">
                                <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
                                <div class="box-title">
                                    <h3>Submissions</h3>
                                </div>
                                <div class="box-text">
                                <img src={news} alt=''></img>
                                </div>
                                <div class="box-btn">
                                <Link to="/submission" className="primary-button">Submissions</Link>
                                </div>
                            </div>
                        </div>	 
                        
                        
                        
                       
                        <div class="col-lg-4 col-xs-12 text-center">
                            <div class="box">
                                <i class="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>
                                <div class="box-title">
                                    <h3>Submission Details</h3>
                                </div>
                                <div class="box-text">
                                <img src={table} alt=''></img>
                                </div>
                                <div class="box-btn">
                                <Link to="/tickettable" className="primary-button">Submission Details</Link>
                                </div>
                            </div>
                        </div>	 
                        
                        
                        
                        <div class="col-lg-4 col-xs-12 text-center">
                            <div class="box">
                                <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                                <div class="box-title">
                                    <h3>User Information</h3>
                                </div>
                                <div class="box-text">
                                <img src={user} alt=''></img>
                                </div>
                                <div class="box-btn">
                                <Link to="/userdetails" className="primary-button">User Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>		
                    <div class="col-lg-4 col-xs-12 text-center">
                            <div class="box">
                                <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                                <div class="box-title">
                                    <h3>Chat box</h3>
                                </div>
                                <div class="box-text">
                                <img src={msg} alt=''></img>
                                </div>
                                <div class="box-btn">
                                <Link to="/messages" className="primary-button">Messages</Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        
        </>
    )
}