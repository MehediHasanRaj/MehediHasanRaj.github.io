import '../css/button33.css'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../security/AuthContext";


export default function ProjectDetailsComponent() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const authContext = useAuth();
    useEffect(()=> {
        authContext.apiClient.get('/api/projects/'+id)
            .then((res) => {setData(res.data);})
            .catch((err)=>{console.log(err);});
    },[]);
    console.log(data)
    let techStack = data.techStack;
    console.log(techStack);

    return (
        <>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '40px', paddingBottom: '5px'}}>
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
                <div className="container">
                    <div style={{textAlign: 'justify'}}>
                        <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i> {data.date}

                        </time>
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
                                    <h4 style={{textAlign: 'justify'}}>Summary</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <p style={{textAlign: 'justify'}}>{data.summary}
                        </p>

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
                                    <h4 style={{textAlign: 'justify'}}>Features</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        {/*<p style={{textAlign: 'justify'}}>{data.description}*/}
                        {/*</p>*/}
                        <div style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: data.description}}/>

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
                                    <h4 style={{textAlign: 'justify'}}>Demo Images</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>


                        <div>
                            <img src={`${authContext.baseUrl}${data.imageLink}`} style={{height: '250px'}} alt="..."/>
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