import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import thumbimage from "../images/user-thumb.jpg";


export default function TestimonialComponent() {
    return(
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={2}
            navigation={{
                nextEl: ".test-swiper-button-next",
                prevEl: ".test-swiper-button-prev",
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
            <SwiperSlide>
                <div className="sliderOuter">
                    <div className="swiper testimonialSwiper">
                        <div className="swiper-wrapper">
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
                                                <h4 className="xsTitle bold">Ashequr Rahman,CEO & Visual Strategist at Exsentra Innovation Limited</h4>
                                                <p> duis enim velit mollit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="sliderOuter">
                    <div className="swiper testimonialSwiper">
                        <div className="swiper-wrapper">
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
                                                <h4 className="xsTitle bold">Amazing to work with!</h4>
                                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="sliderOuter">
                    <div className="swiper testimonialSwiper">
                        <div className="swiper-wrapper">
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
                                                <h4 className="xsTitle bold">Amazing to work with!</h4>
                                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <div className="test-swiper-button-next swiper-button-next swiperBtnStyle"></div>
            <div className="test-swiper-button-prev swiper-button-prev swiperBtnStyle"></div>
            <div className="swiper-pagination swiperPaginationStyle posInitial"></div>

        </Swiper>
    )
}
