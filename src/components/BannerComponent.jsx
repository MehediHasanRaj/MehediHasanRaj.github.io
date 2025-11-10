import React, {useEffect, useState} from 'react';
import userImg from '../images/profile.jpg';
import '../css/button85.css'

import {Link} from "react-router-dom";

import resume from "../images/Md Mehedi Hasan Raj.pdf";
const Banner = () => {

    return (
        <section>
            <div className="bannerSection" style={{paddingBottom: '10px'}}>
                <div className="container" >
                    <div className="row g-4 g-md-3 align-items-center">
                        <div className="col-md-auto order-md-last">
                            <div className="bannerUserImg">
                                <img src={userImg} alt="User"/>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="bannerContent">
                                <h1 className="xlTitle pb-3" style={{textAlign: 'left'}}>Hi, I’m Mehedi Hasan
                                    Raj, <br/>a Software Developer</h1>
                                <div style={{textAlign:'justify', fontFamily:'courier', fontStyle:'italic'}}>
                                    <p><b>B.Sc. in Computer Science @NSU, BD.(1<sup>st</sup> class)</b><br/>
                                    <b>M.Sc. in Data Science @Essex, UK.(Distinction)</b></p>
                                </div>
                                <p style={{
                                    textAlign: 'left',
                                    fontFamily: 'Arial, Helvetica, sans-serif',
                                    fontSize: 'medium'
                                }}>
                                    a Junior Java Software Engineer specializing in scalable, secure microservices using Spring Boot. I excel in debugging, performance optimization—improving applications by 15%—and implementing efficient CI/CD pipelines.
                                    <br/><br/>Recognized in the top 30% of LeetCode global contests, I also have research expertise in machine learning and deep learning, with published work in the field. Let's connect and innovate together!
                                    {/*{ data.bio }*/}
                                </p>
                                <div className="bannerBtnCol">
                                    <div className="row">
                                        <div className="col-auto">
                                            {/*<a download href="javascript:void(0)" className="btn btnPrimary">Download Resume</a>*/}
                                            <a download  href={resume}>
                                                <button className="button-85 me-3" role="button"
                                                        style={{padding: '12px'}}>Download Resume
                                                </button>
                                            </a>

                                            <Link to="/contact">
                                                <button className="button-85" role="button"
                                                        style={{padding: '12px'}}>Contact Me
                                                </button>
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr/>
                </div>
            </div>

        </section>
    );
};

export default Banner;
