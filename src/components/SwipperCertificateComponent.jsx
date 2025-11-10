import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperCertificateComponent() {
    return (
        <Swiper
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
                640: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 2, spaceBetween: 16 },
            }}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="cardStyle1">
                    <h4 className="mdTitle cs1Title">
                        <a>Master Spring Boot 3 & Spring Framework 6 with Java</a>
                    </h4>
                    <ul className="cardOptionCol">
                        <li>1 Aug 2024</li>
                        <li>Udemy</li>
                    </ul>
                    <p>
                        Master Spring Boot and Spring Framework from scratch, build real-world full-stack applications with React, and gain expertise in modern Java development best practices.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="cardStyle1">
                    <h4 className="mdTitle cs1Title">
                        <a>Learning Spring with Spring boot</a>
                    </h4>
                    <ul className="cardOptionCol">
                        <li>08 Oct 2023</li>
                        <li>Linkedin</li>
                    </ul>
                    <p>
                        Learn to build enterprise-style Java applications with Spring Boot, leveraging its opinionated approach for fast and efficient development. Gain hands-on experience with core Spring projects to enhance your skills.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cardStyle1">
                    <h4 className="mdTitle cs1Title">
                        <a>Spring Cloud: Cloud-Native Architecture and Distributed Systems</a>
                    </h4>
                    <ul className="cardOptionCol">
                        <li>08 Jan 2025</li>
                        <li>Linkedin</li>
                    </ul>
                    <p>
                        Learn to build scalable cloud-native apps with Spring Boot and Spring Cloud, leveraging microservices, service discovery, and load balancing. Explore Spring Cloud Netflix patterns like Eureka for seamless service management.
                    </p>
                </div>
            </SwiperSlide>

            {/* Navigation and Pagination Elements */}
            <div className="cert-swiper-button-next swiper-button-next swiperBtnStyle"></div>
            <div className="cert-swiper-button-prev swiper-button-prev swiperBtnStyle"></div>
            <div className="swiper-pagination swiperPaginationStyle posInitial"></div>
        </Swiper>
    );
}
