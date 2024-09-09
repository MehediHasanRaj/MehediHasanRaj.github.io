import '../css/TestBlogCardStyle.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useAuth} from "../security/AuthContext";

export default function TestBlogCardComponent() {
    let [data, setData] = useState([]);
    const authContext = useAuth()
    useEffect(() => {
        authContext.apiClient.get('/api/blogs')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(data);


    return(
        <>
            <section className="light">

                <div className="container py-2" style={{textAlign: 'justify'}}>
                    {/*<div className="h1 text-dark" id="pageHeaderTitle" >See recent Blogs..</div>*/}
                    {/*<div><h1 style={{textAlign:'justify'}}>See recent Blogs..</h1></div>*/}
                    {/*<hr/>*/}

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'justify'}}>See
                        recent Blogs..</h1>

                    {data.length > 0 ? (
                        data.map((ob, index) => (

                                <React.Fragment key={index}>
                                    {index % 4 === 0 && (
                                        <article className="postcard light blue" style={{ textAlign: 'justify' }}>
                                                <img className="postcard__img" src={`${authContext.baseUrl}${ob.imageLink}` || 'https://picsum.photos/501/501'} alt="Image Title"/>

                                            <div className="postcard__text t-dark">
                                                <h1 className="postcard__title blue"><Link to={`/blog-details/${ob.id}`}>{ob.title}</Link></h1>
                                                <div className="postcard__subtitle small">
                                                    <time dateTime="2020-05-25 12:00:00">
                                                        <i className="fas fa-calendar-alt mr-2"></i> {ob.date}
                                                    </time>
                                                </div>
                                                <div className="postcard__bar"></div>
                                                <div className="postcard__preview-txt">
                                                    {ob.summary}
                                                </div>
                                                <ul className="postcard__tagbox">
                                                    <li className="tag__item"><i className="fas fa-tag mr-2"></i>{ob.tag}</li>
                                                    <li className="tag__item play blue">
                                                        <i className="fas fa-thin fa-at mr-2"></i>{ob.author}
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    )}

                                    {index % 4 === 1 && (
                                        <article className="postcard light red">

                                                <img className="postcard__img" src={`${authContext.baseUrl}${ob.imageLink}` || 'https://picsum.photos/501/501'} alt="Image Title"/>

                                            <div className="postcard__text t-dark">
                                                <h1 className="postcard__title red"><Link to={`/blog-details/${ob.id}`}>{ob.title}</Link></h1>
                                                <div className="postcard__subtitle small">
                                                    <time dateTime="2020-05-25 12:00:00">
                                                        <i className="fas fa-calendar-alt mr-2"></i> {ob.date}
                                                    </time>
                                                </div>
                                                <div className="postcard__bar"></div>
                                                <div className="postcard__preview-txt">
                                                    {ob.summary}
                                                </div>
                                                <ul className="postcard__tagbox">
                                                    <li className="tag__item"><i className="fas fa-tag mr-2"></i>{ob.tag}</li>
                                                    <li className="tag__item play red">
                                                        <i className="fas fa-thin fa-at mr-2"></i>{ob.author}
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    )}

                                    {index % 4 === 2 && (
                                        <article className="postcard light green">

                                                <img className="postcard__img" src={`${authContext.baseUrl}${ob.imageLink}` || 'https://picsum.photos/501/501'}
                                                     alt="Image Title"/>

                                            <div className="postcard__text t-dark">
                                                <h1 className="postcard__title green"><Link to={`/blog-details/${ob.id}`}>{ob.title}</Link></h1>
                                                <div className="postcard__subtitle small">
                                                    <time dateTime="2020-05-25 12:00:00">
                                                        <i className="fas fa-calendar-alt mr-2"></i>{ob.date}
                                                    </time>
                                                </div>
                                                <div className="postcard__bar"></div>
                                                <div className="postcard__preview-txt">{ob.summary}
                                                </div>
                                                <ul className="postcard__tagbox">
                                                    <li className="tag__item"><i className="fas fa-tag mr-2"></i>{ob.tag}
                                                    </li>
                                                    {/*<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>*/}
                                                    <li className="tag__item play green">
                                                        <i className="fas fa-thin fa-at mr-2"></i>{ob.author}
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    )}

                                    {index % 4 === 3 && (
                                        <article className="postcard light yellow">

                                                <img className="postcard__img" src={`${authContext.baseUrl}${ob.imageLink}` || 'https://picsum.photos/501/501'}
                                                     alt="Image Title"/>
                                            
                                            <div className="postcard__text t-dark">
                                                <h1 className="postcard__title yellow"><Link to={`/blog-details/${ob.id}`}>{ob.title}</Link>
                                                </h1>
                                                <div className="postcard__subtitle small">
                                                    <time dateTime="2020-05-25 12:00:00">
                                                        <i className="fas fa-calendar-alt mr-2"></i>{ob.date}
                                                    </time>
                                                </div>
                                                <div className="postcard__bar"></div>
                                                <div className="postcard__preview-txt">{ob.summary}
                                                </div>
                                                <ul className="postcard__tagbox">
                                                    <li className="tag__item"><i className="fas fa-tag mr-2"></i>{ob.tag}
                                                    </li>
                                                    {/*<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>*/}
                                                    <li className="tag__item play yellow">
                                                        <i className="fas fa-thin fa-at mr-2"></i>{ob.author}
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    )}


                                </React.Fragment>


                            )
                        )
                    ) : (
                        <p>Loading Recent works....</p>
                    )
                    }


                    {/*<article className="postcard light green">*/}
                    {/*    <a className="postcard__img_link" href="#">*/}
                    {/*        <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title"/>*/}
                    {/*    </a>*/}
                    {/*    <div className="postcard__text t-dark">*/}
                    {/*        <h1 className="postcard__title green"><a href="#">Podcast Title</a></h1>*/}
                    {/*        <div className="postcard__subtitle small">*/}
                    {/*            <time dateTime="2020-05-25 12:00:00">*/}
                    {/*                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020*/}
                    {/*            </time>*/}
                    {/*        </div>*/}
                    {/*        <div className="postcard__bar"></div>*/}
                    {/*        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing*/}
                    {/*            elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi*/}
                    {/*            quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis*/}
                    {/*            molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla*/}
                    {/*            unde ipsum dolores nobis enim quidem excepturi, illum quos!*/}
                    {/*        </div>*/}
                    {/*        <ul className="postcard__tagbox">*/}
                    {/*            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>*/}
                    {/*            /!*<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>*!/*/}
                    {/*            <li className="tag__item play green">*/}
                    {/*                <a href="#"><i className="fas fa-thin fa-at mr-2"></i>Play Episode</a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</article>*/}



                </div>
            </section>
        </>
    )
}