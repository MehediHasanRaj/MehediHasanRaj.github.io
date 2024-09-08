import '../css/button33.css'
import '../css/projectFeaturesList.scss'
import '../css/projectImageSlider.scss'
import profile from '../images/profile.jpg'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


export default function ProjectDetailsComponent() {
    useEffect(() => {
        return () => {
            let slideIndex = 0;
            showSlides();

            function showSlides() {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                let dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {slideIndex = 1}
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
                setTimeout(showSlides, 2000); // Change image every 2 seconds
            }
        };
    }, []);

    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/api/projects/'+id)
            .then((res) => {setData(res.data);})
            .catch((err)=>{console.log(err);});
    },[]);
    console.log(data)
    let techStack = data.techStack;
    console.log(techStack);

    return (
        <>


            <section>
                <div className="innerPageBannerCol" style={{padding: '40px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'left'}}>{data.projectName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'justify'}}>Demo Images</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>

                        {/*image slider*/}
                        <div>

                            <div className="slideshow-container">

                                <div className="mySlides fade">
                                    <div className="numbertext">1 / 3</div>
                                    <img src={`http://localhost:8080${data.imageLink}`} style={{width: '100%'}} alt={""}/>
                                    <div className="text"></div>
                                </div>

                                <div className="mySlides fade">
                                    <div className="numbertext">2 / 3</div>
                                    <img src={`http://localhost:8080${data.imageLink}`} style={{width: '100%'}} alt={""}/>
                                    <div className="text"></div>
                                </div>

                                <div className="mySlides fade">
                                    <div className="numbertext">3 / 3</div>
                                    <img src={`http://localhost:8080${data.imageLink}`} style={{width: '100%'}} alt={""}/>
                                    <div className="text"></div>
                                </div>

                            </div>
                            <br/>

                            <div style={{textAlign: 'center'}}>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
            <br/>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'justify'}}>Tech Stack</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div style={{textAlign: 'justify'}}>

                            {techStack?.map((item) => (
                                <button className={'button-33 me-2'} key={item}>
                                    {item}
                                </button>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            <br/>

            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'justify'}}>Description</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        {/*<p style={{textAlign: 'justify'}}>{data.description}*/}
                        {/*</p>*/}
                        <div style={{textAlign: 'justify'}}  dangerouslySetInnerHTML={{__html: data.description}} />

                    </div>
                </div>
            </section>

            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'justify'}}>Features</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>

                        <main>
                            <ol className="gradient-list">
                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </li>
                                <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>

                            </ol>
                        </main>

                    </div>
                </div>
            </section>

            <br/>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'justify'}}>Demo Video</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div>
                            <iframe width="420" height="345" src={`https://www.youtube.com/embed/${data.youtubeLink}`}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}