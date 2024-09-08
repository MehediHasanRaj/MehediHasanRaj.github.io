import React, {useEffect, useState} from "react";
import './cardstyle.css'
import '../css/bootstrap.min.css'

import $ from 'jquery'
import axios from "axios";
import {Link} from "react-router-dom";
export default function ProjectListComponent() {
    // const [isGridVisible, setIsGridVisible] = useState(false);
    // const [isButtonOrange, setIsButtonOrange] = useState(false);
    // const [isClicked, setIsClicked] = useState(false);
    // const [isArrowHovered, setIsArrowHovered] = useState(false);
    // const [isCardHovered, setIsCardHovered] = useState(false);
    //
    // const handlePushBarClick = (event) => {
    //     if (!isClicked) {
    //         event.preventDefault();
    //         handleArrowClick();
    //     }
    // };
    //
    // const handleArrowClick = () => {
    //     setIsClicked((prev) => !prev);
    // };
    //
    // const handleArrowMouseEnter = () => {
    //     setIsArrowHovered(true);
    // };
    //
    // const handleArrowMouseLeave = () => {
    //     if (!isClicked) {
    //         setIsArrowHovered(false);
    //     }
    // };
    //
    // const handleCardMouseEnter = () => {
    //     setIsCardHovered(true);
    // };
    //
    // const handleCardMouseLeave = () => {
    //     setIsCardHovered(false);
    // };
    // useEffect(() => {
    //     const handleKeyPress = (event) => {
    //         // If 'alt + g' keys are pressed:
    //         if (event.altKey && event.key === 'g') {
    //             setIsGridVisible((prev) => !prev);
    //         }
    //     };
    //
    //     document.addEventListener('keypress', handleKeyPress);
    //
    //     return () => {
    //         document.removeEventListener('keypress', handleKeyPress);
    //     };
    // }, []);
    //
    // const handleButtonClick = () => {
    //     setIsGridVisible((prev) => !prev);
    //     setIsButtonOrange((prev) => !prev);
    // };

    useEffect(() => {
        var main = function () {
            $('.push-bar').on('click', function(event){
                if (!isClicked){
                    event.preventDefault();
                    $('.arrow').trigger('click');
                    isClicked = true;
                }
            });

            $('.arrow').css({
                'animation': 'bounce 2s infinite'
            });
            $('.arrow').on("mouseenter", function(){
                $('.arrow').css({
                    'animation': '',
                    'transform': 'rotate(180deg)',
                    'background-color': 'black'
                });
            });
            $('.arrow').on("mouseleave", function(){
                if (!isClicked){
                    $('.arrow').css({
                        'transform': 'rotate(0deg)',
                        'background-color': 'black'
                    });
                }
            });

            var isClicked = false;

            $('.arrow').on("click", function(){
                if (!isClicked){
                    isClicked = true;
                    $('.arrow').css({
                        'transform': 'rotate(180deg)',
                        'background-color': 'black',
                    });

                    $('.bar-cont').animate({
                        top: "-15px"
                    }, 300);
                    $('.main-cont').animate({
                        top: "0px"
                    }, 300);
                    // $('.news-block').css({'border': '0'});
                    // $('.underlay').slideDown(1000);

                }
                else if (isClicked){
                    isClicked = false;
                    $('.arrow').css({
                        'transform': 'rotate(0deg)',       'background-color': 'black'
                    });

                    $('.bar-cont').animate({
                        top: "-215px"
                    }, 300);
                    $('.main-cont').animate({
                        top: "-215px"
                    }, 300);
                }
                console.log('isClicked= '+isClicked);
            });

            $('.card').on('mouseenter', function() {
                $(this).find('.card-text').slideDown(300);
            });

            $('.card').on('mouseleave', function(event) {
                $(this).find('.card-text').css({
                    'display': 'none'
                });
            });
        };

        $(document).ready(main);


        return () => {

        };
    }, []);


    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/projects')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    return(
        <>
            <div className="container-fluid main-cont">
                <div className="row news-row">
                    <div className="container-fluid col-md-12 col-sm-6 justify-content-center news-block">
                        <div className="card-group">

                            {data.length > 0 ? (
                                data.map((ob,index) => (
                                        <div className="underlay">
                                            <div className="card">
                                                <div className="card-img-top"
                                                     style={{ backgroundImage: `url(http://localhost:8080${ob.imageLink})` }}></div>
                                                <div className="card-block">
                                                    <h5 className="card-title"
                                                        style={{fontFamily: 'Anton, sans-serif'}}>{ob.summary}
                                                        <hr/>
                                                    </h5>
                                                    <p className="card-text">
                                                        {ob.description}.
                                                        <Link to={"/blog"}><u>Read More...</u></Link>
                                                    </p>
                                                    <p className="card-text"><small className="text-muted">{ob.date} </small></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
                            ) : (
                                <p>Loading Recent works....</p>
                            )
                            }


                            {/*<div className="underlay">*/}
                            {/*    <div className="card">*/}
                            {/*        <div className="card-img-top"*/}
                            {/*             style="background-image: url('https://i.imgur.com/yAFDnZ1.png')"></div>*/}
                            {/*        <div className="card-block">*/}
                            {/*            <h5 className="card-title" style="font-family: 'Anton', sans-serif">Intel*/}
                            {/*                Dismisses 7700k Problems*/}
                            {/*                <hr/>*/}
                            {/*            </h5>*/}
                            {/*            <p className="card-text">Modern processors can run at temperatures ranging from*/}
                            {/*                25 to 90 degrees, depending on configuration, cooling and workload. That*/}
                            {/*                said, when a CPU takes on a heavy load, that increase is gradual <a*/}
                            {/*                    href="#"><u>Read More...</u></a></p>*/}
                            {/*            <p className="card-text"><small className="text-muted">Last updated 3 mins*/}
                            {/*                ago</small></p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>


            {/*<div className="container-fluid main-cont">*/}
            {/*    <div className="row news-row">*/}
            {/*        <div className="container-fluid col-md-12 col-sm-6 justify-content-center news-block">*/}
            {/*            <div className="card-group">*/}
            {/*                <div className="underlay">*/}
            {/*                    <div className="card">*/}
            {/*                        <div*/}
            {/*                            className="card-img-top"*/}
            {/*                            style={{backgroundImage: "url('https://i.imgur.com/wLMJQPH.png')"}}*/}
            {/*                        ></div>*/}

            {/*                        <div className="card-block">*/}
            {/*                            <h5 className="card-title" style={{fontFamily: "'Anton', sans-serif"}}>*/}
            {/*                                Thhis is first*/}
            {/*                                <hr/>*/}
            {/*                            </h5>*/}
            {/*                            <p className="card-text">Canon will have a full slate of new and updated*/}
            {/*                                products to show attendees at this year’s NAB Show. The company has*/}
            {/*                                announced its new Compact-Servo 70-200mm telephoto zoom lens <a href="#"><u>Read*/}
            {/*                                    More...</u></a></p>*/}
            {/*                            <p className="card-text"><small className="text-muted">Last updated 3 mins*/}
            {/*                                ago</small></p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="underlay">*/}
            {/*                    <div className="card">*/}
            {/*                        <div*/}
            {/*                            className="card-img-top"*/}
            {/*                            style={{backgroundImage: "url('https://i.imgur.com/wLMJQPH.png')"}}*/}
            {/*                        ></div>*/}

            {/*                        <div className="card-block">*/}
            {/*                            <h5 className="card-title" style={{fontFamily: "'Anton', sans-serif"}}>*/}
            {/*                                Thhis is first*/}
            {/*                                <hr/>*/}
            {/*                            </h5>*/}
            {/*                            <p className="card-text">Canon will have a full slate of new and updated*/}
            {/*                                products to show attendees at this year’s NAB Show. The company has*/}
            {/*                                announced its new Compact-Servo 70-200mm telephoto zoom lens <a href="#"><u>Read*/}
            {/*                                    More...</u></a></p>*/}
            {/*                            <p className="card-text"><small className="text-muted">Last updated 3 mins*/}
            {/*                                ago</small></p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="underlay">*/}
            {/*                    <div className="card">*/}
            {/*                        <div*/}
            {/*                            className="card-img-top"*/}
            {/*                            style={{backgroundImage: "url('https://i.imgur.com/wLMJQPH.png')"}}*/}
            {/*                        ></div>*/}

            {/*                        <div className="card-block">*/}
            {/*                            <h5 className="card-title" style={{fontFamily: "'Anton', sans-serif"}}>*/}
            {/*                                Thhis is first*/}
            {/*                                <hr/>*/}
            {/*                            </h5>*/}
            {/*                            <p className="card-text">Canon will have a full slate of new and updated*/}
            {/*                                products to show attendees at this year’s NAB Show. The company has*/}
            {/*                                announced its new Compact-Servo 70-200mm telephoto zoom lens <a href="#"><u>Read*/}
            {/*                                    More...</u></a></p>*/}
            {/*                            <p className="card-text"><small className="text-muted">Last updated 3 mins*/}
            {/*                                ago</small></p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="underlay">*/}
            {/*                    <div className="card">*/}
            {/*                        <div*/}
            {/*                            className="card-img-top"*/}
            {/*                            style={{backgroundImage: "url('https://i.imgur.com/wLMJQPH.png')"}}*/}
            {/*                        ></div>*/}

            {/*                        <div className="card-block">*/}
            {/*                            <h5 className="card-title" style={{fontFamily: "'Anton', sans-serif"}}>*/}
            {/*                                Thhis is first*/}
            {/*                                <hr/>*/}
            {/*                            </h5>*/}
            {/*                            <p className="card-text">Canon will have a full slate of new and updated*/}
            {/*                                products to show attendees at this year’s NAB Show. The company has*/}
            {/*                                announced its new Compact-Servo 70-200mm telephoto zoom lens <a href="#"><u>Read*/}
            {/*                                    More...</u></a></p>*/}
            {/*                            <p className="card-text"><small className="text-muted">Last updated 3 mins*/}
            {/*                                ago</small></p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </>
    )
}