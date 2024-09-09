import React, {useEffect, useState} from 'react';
import userImg from '../images/profile.jpg';
import '../css/button85.css'

import {Link} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../security/AuthContext";
const Banner = () => {

    const [data, setData] = useState([]);
    const authContext = useAuth();
    useEffect(()=> {

        authContext.apiClient.get('/api/profile')
            .then((res) => {setData(res.data);})
            .catch((err)=>{console.log(err);});
    },[]);
    // console.log(data);


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
                                    Raj, <br/> a Java Full-Stack Software Developer</h1>
                                <div style={{textAlign:'justify', fontFamily:'courier', fontStyle:'italic'}}>
                                    <p><b>B.Sc. in Computer Science @NSU, BD.(1<sup>st</sup> class)</b><br/>
                                    <b>M.Sc. in Data Science @Essex, UK.(Distinction)</b></p>
                                </div>
                                <p style={{
                                    textAlign: 'left',
                                    fontFamily: 'Arial, Helvetica, sans-serif',
                                    fontSize: 'medium'
                                }}>
                                    {/*A Java Spring Boot Full Stack Cloud Developer. Working Technologies including AWS,*/}
                                    {/*React, Docker, Spring Data JPA, Hibernate, Spring Security, REST API, Maven,*/}
                                    {/*Gradle, Spring AOP, Junit, and Mochito.*/}
                                    {/*Problem solver on Codeforces, Leetcode, and Hackerrank.*/}
                                    {/* eslint-disable-next-line no-unused-expressions*/}
                                    { data.bio }
                                </p>
                                <div className="bannerBtnCol">
                                    <div className="row">
                                        <div className="col-auto">
                                            {/*<a download href="javascript:void(0)" className="btn btnPrimary">Download Resume</a>*/}
                                            <a download  href={`${authContext.baseUrl}${data.resumeLink}`}>
                                                <button className="button-85 me-3" role="button"
                                                        style={{padding: '12px'}}>Download Resume
                                                </button>
                                            </a>

                                            <a href="">
                                                <button className="button-85" role="button"
                                                        style={{padding: '12px'}}>Contact Me
                                                </button>
                                            </a>

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
