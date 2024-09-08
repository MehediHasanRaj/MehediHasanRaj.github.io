import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';
import '../css/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useEffect, useState} from "react";
import axios from "axios";

export default function SwipperCertificateComponent() {
    const [certificateData, setCertificateData] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/api/certificates')
            .then((res) => {setCertificateData(res.data);})
            .catch((err)=>{console.log(err);});
    },[]);
    // console.log(certificateData);
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={2}
            navigation={{
                nextEl: ".cert-swiper-button-next",
                prevEl: ".cert-swiper-button-prev",
            }}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
            }}


            // scrollbar={{draggable: true}}
            // onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {/*<SwiperSlide>*/}
            {/*    <div className="sliderOuter">*/}
            {/*        <div className="swiper certificatesSlider">*/}
            {/*            <div className="swiper-wrapper">*/}
            {/*                <div className="swiper-slide">*/}
            {/*                    <div className="cardStyle1">*/}
            {/*                        <h4 className="mdTitle cs1Title">*/}
            {/*                            <a href="">HTML css</a>*/}
            {/*                        </h4>*/}
            {/*                        <ul className="cardOptionCol">*/}
            {/*                            <li>08 Oct 2021</li>*/}
            {/*                            <li>Coursera</li>*/}
            {/*                        </ul>*/}
            {/*                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit*/}
            {/*                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt*/}
            {/*                            nostrud amet.</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</SwiperSlide>*/}
            {certificateData.length > 0 ? (
                certificateData.map((certificate) => (
                    <SwiperSlide key={certificate.id}>
                        <div className="sliderOuter">
                            <div className="swiper certificatesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="cardStyle1">
                                            <h4 className="mdTitle cs1Title">
                                                {certificate.title || 'not available'}
                                            </h4>
                                            <ul className="cardOptionCol">
                                                <li>{certificate.date || 'No date available'}</li>
                                                <li>{certificate.organization || 'No issuer available'}</li>
                                            </ul>
                                            <p>{certificate.description || 'No description available'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            ):(
                <p>Loading certificates....</p>
            )}










            
            {/*<SwiperSlide>*/}
            {/*    <div className="sliderOuter">*/}
            {/*        <div className="swiper certificatesSlider">*/}
            {/*            <div className="swiper-wrapper">*/}

            {/*                <div className="swiper-slide">*/}
            {/*                    <div className="cardStyle1">*/}
            {/*                        <h4 className="mdTitle cs1Title">*/}
            {/*                            <a href="javascript:void(0)">IBM Full Stack Cloud Developer</a>*/}
            {/*                        </h4>*/}
            {/*                        <ul className="cardOptionCol">*/}
            {/*                            <li>08 Oct 2021</li>*/}
            {/*                            <li>Coursera</li>*/}
            {/*                        </ul>*/}
            {/*                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit*/}
            {/*                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt*/}
            {/*                            nostrud amet.</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</SwiperSlide>*/}

            {/*<SwiperSlide>*/}
            {/*    <div className="sliderOuter">*/}
            {/*        <div className="swiper certificatesSlider">*/}
            {/*            <div className="swiper-wrapper">*/}
            {/*                <div className="swiper-slide">*/}
            {/*                    <div className="cardStyle1">*/}
            {/*                        <h4 className="mdTitle cs1Title">*/}
            {/*                            <a href="javascript:void(0)">IBM Full Stack Cloud Developer</a>*/}
            {/*                        </h4>*/}
            {/*                        <ul className="cardOptionCol">*/}
            {/*                            <li>08 Oct 2021</li>*/}
            {/*                            <li>Coursera</li>*/}
            {/*                        </ul>*/}
            {/*                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit*/}
            {/*                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt*/}
            {/*                            nostrud amet.</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</SwiperSlide>*/}
            <div className="cert-swiper-button-next swiper-button-next swiperBtnStyle"></div>
            <div className="cert-swiper-button-prev swiper-button-prev swiperBtnStyle"></div>
            <div className="swiper-pagination swiperPaginationStyle posInitial"></div>

        </Swiper>
    );
};