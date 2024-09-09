import React, {useContext, useEffect, useState} from 'react';
import '../css/style.css'
import workimage from '../images/work-img.jpg'
import thumbimage from '../images/user-thumb.jpg'
import ashiq from '../images/ashiq2.jpg'
import axios from "axios";
import {Link} from "react-router-dom";
import {useAuth} from "../security/AuthContext";


export default function FeatureWorkComponents() {
    let [data, setData] = useState([]);
    const authContext = useAuth()

    useEffect(() => {
        authContext.apiClient.get('/api/projects')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    data = data.slice(data.length - 2) // taking the last 2 element





    return (
        <section>
            <div className="sectionSpace">
                <div className="container">
                    <div className="portfolioCol">
                        <div className="row pb-3">
                            <div className="col">
                                <h4 className="smText regular"
                                    style={{textAlign: 'left', fontWeight: 'bolder'}}>Featured Work</h4>
                            </div>
                            <div className="col-auto">
                                {/*<a href="" className="simpleLink">View all</a>*/}
                                <Link to={"/project-list"} className="simpleLink">View all</Link>
                            </div>
                        </div>

                        {data.length > 0 ? (
                            data.map((ob,index) => (
                                    <div className="portfolioCard">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-md-auto">
                                                <div className="portfolioImgCol">
                                                    <Link to={`/project-details/${ob.id}`}>
                                                        <img src={`${authContext.baseUrl}${ob.imageLink}`} alt="..." />
                                                    </Link>

                                                </div>
                                        </div>
                                            <div className="col-md">
                                            <div className="portfolioContentCol" style={{textAlign: 'left'}}>
                                                    <h4 className="lgTitle">
                                                        <Link to={`/project-details/${ob.id}`}>
                                                            {ob.projectName}
                                                        </Link>
                                                    </h4>
                                                    <ul className="portfolioOption">
                                                        <li><span className="dateLbl">2024</span></li>
                                                    </ul>
                                                    <p>{ob.summary}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <p>Loading Recent works....</p>
                        )
                        }


                        {/*<div className="portfolioCard">*/}
                        {/*    <div className="row g-4 align-items-center">*/}
                        {/*        <div className="col-md-auto">*/}
                        {/*            <div className="portfolioImgCol">*/}
                        {/*                <a href=""><img src={workimage} alt="..."/></a>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-md">*/}
                        {/*            <div className="portfolioContentCol" style={{textAlign: 'left'}}>*/}
                        {/*                <h4 className="lgTitle"><a href="">title2</a></h4>*/}
                        {/*                <ul className="portfolioOption">*/}
                        {/*                    <li><span className="dateLbl">2024</span></li>*/}
                        {/*                    <li>Java</li>*/}
                        {/*                    <li>Spring boot</li>*/}
                        {/*                </ul>*/}
                        {/*                <p> paragraph</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>


                    <div className="testimonialCol">
                        <h4 className="smText regular d-block"
                            style={{textAlign: 'left', fontWeight: 'bolder'}}>Testimonials</h4>
                        <div className="testimonialSlider">
                            <div className="swiper testimonialSwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonialCard">
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto">
                                                    <div className="tImgCol">
                                                        <img src={ashiq} alt="..."/>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="tContentCol">
                                                        <h4 className="xsTitle bold">Ashequr Rahman, <p
                                                            style={{fontSize: '11px'}}>CEO & Visual Strategist at
                                                            Exsentra Innovation Limited</p></h4>
                                                        <p>He is highly dedicated to his work, consistently
                                                            demonstrating a strong ability to learn quickly. His
                                                            eagerness to embrace modern technologies makes him a
                                                            valuable asset to any team.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonialCard">
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto">
                                                    <div className="tImgCol">
                                                        <img src={thumbimage} alt="..."/>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="tContentCol">
                                                        <h4 className="xsTitle bold">Ashequr Rahman,CEO & Visual
                                                            Strategist at Exsentra Innovation Limited</h4>
                                                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                                            do amet sint. Velit officia consequat duis enim velit
                                                            mollit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="test-swiper-button-next swiper-button-next swiperBtnStyle"></div>
                                <div className="test-swiper-button-prev swiper-button-prev swiperBtnStyle"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};