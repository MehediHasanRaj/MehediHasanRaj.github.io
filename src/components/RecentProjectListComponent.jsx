import React from "react";
import {Link} from "react-router-dom";



export default function RecentProjectListComponent() {

    // let [data, setData] = useState([]);
    // const authContext = useAuth()
    // useEffect(() => {
    //     authContext.apiClient.get('/api/projects')
    //         .then((res) => {
    //             setData(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    // console.log(data);


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
                        recent Projects..</h1>


                        <article className="postcard light blue" style={{ textAlign: 'justify' }}>

                            <img
                                className="postcard__img" src={'https://picsum.photos/501/501'}
                                alt="Image Title"/>
                            <div className="postcard__text t-dark">
                                <h1 className="postcard__title blue"><Link to={`/smart-bank-project-details`}>Smart Bank</Link></h1>
                                <div className="postcard__subtitle small">
                                    <time dateTime="2020-05-25 12:00:00">
                                        <i className="fas fa-calendar-alt mr-2"></i> 20, Dec, 2024
                                    </time>
                                </div>
                                <div className="postcard__bar"></div>
                                <div className="postcard__preview-txt">
                                    Smart Bank is a digital banking solution that uses modern technologies like JWT authentication, third-party API integrations, and AI-driven support to deliver secure, fast, and seamless banking experiences.
                                    It enables users to track finances, generate statements, and access customer support all in one comprehensive platform.
                                </div>
                                <ul className="postcard__tagbox">
                                    <li className="tag__item play blue">
                                        <i className="fas fa-tag mr-2">Java</i>
                                    </li>
                                    <li className="tag__item play blue">
                                        <i className="fas fa-tag mr-2">spring boot</i>
                                    </li>
                                    <li className="tag__item play blue">
                                        <i className="fas fa-tag mr-2">JWT</i>
                                    </li>
                                    <li className="tag__item play blue">
                                        <i className="fas fa-tag mr-2">MySQL</i>
                                    </li>
                                    <li className="tag__item play blue">
                                        <i className="fas fa-tag mr-2">ChatBot</i>
                                    </li>
                                    <li className="tag__item play blue">
                                        <i className="fas fa-tag mr-2">Rest API</i>
                                    </li>

                                </ul>
                            </div>
                        </article>



                        <article className="postcard light blue" style={{ textAlign: 'justify' }}>

                                                    <img
                                                        className="postcard__img" src={'https://picsum.photos/501/502'}
                                                        alt="Image Title"/>
                                                    <div className="postcard__text t-dark">
                                                        <h1 className="postcard__title blue"><Link to={`/extreme-multilabel-project-details`}>🎓 M.Sc Thesis: Extreme Multi-label Text Classification | University of Essex</Link></h1>
                                                        <div className="postcard__subtitle small">
                                                            <time dateTime="2020-05-25 12:00:00">
                                                                <i className="fas fa-calendar-alt mr-2"></i> 1, Mar, 2023
                                                            </time>
                                                        </div>
                                                        <div className="postcard__bar"></div>
                                                        <div className="postcard__preview-txt">
                                                            I conducted research on extreme multi-label text classification using deep learning, showing that title-based semantic annotation can outperform full-text annotation. I implemented CNN, GRU, LSTM, and MLP models, with CNN achieving the highest F1 score of 0.498. My work combines Python, NLP, and deep learning to tackle large-scale datasets with thousands of labels
                                                        </div>
                                                        <ul className="postcard__tagbox">
                                                            <li className="tag__item play blue">
                                                                <i className="fas fa-tag mr-2">Deep Learning</i>
                                                            </li>
                                                            <li className="tag__item play blue">
                                                                <i className="fas fa-tag mr-2">NLP</i>
                                                            </li>
                                                            <li className="tag__item play blue">
                                                                <i className="fas fa-tag mr-2">CNN</i>
                                                            </li>
                                                            <li className="tag__item play blue">
                                                                <i className="fas fa-tag mr-2">Python</i>
                                                            </li>
                                                            <li className="tag__item play blue">
                                                                <i className="fas fa-tag mr-2">Semantic-Annotation</i>
                                                            </li>
                                                            <li className="tag__item play blue">
                                                                <i className="fas fa-tag mr-2">AI Research</i>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </article>
                    {/*}*/}


                    {/*<article className="postcard light red">*/}

                    {/*    <img className="postcard__img" src={`${authContext.baseUrl}${ob.imageLink}` || 'https://picsum.photos/501/501'} alt="Image Title"/>*/}

                    {/*        <div className="postcard__text t-dark">*/}
                    {/*            <h1 className="postcard__title red"><Link to={`/project-details/${ob.id}`}>{ob.projectName}</Link></h1>*/}
                    {/*            <div className="postcard__subtitle small">*/}
                    {/*                <time dateTime="2020-05-25 12:00:00">*/}
                    {/*                    <i className="fas fa-calendar-alt mr-2"></i> {ob.date}*/}
                    {/*                </time>*/}
                    {/*            </div>*/}
                    {/*            <div className="postcard__bar"></div>*/}
                    {/*            <div className="postcard__preview-txt">*/}
                    {/*                {ob.summary}*/}
                    {/*            </div>*/}
                    {/*            <ul className="postcard__tagbox">*/}
                    {/*                {ob.techStack.map((tech) => (*/}
                    {/*                    <li className="tag__item play red" key={tech}>*/}
                    {/*                        <i className="fas fa-tag mr-2"></i>*/}
                    {/*                        {tech}*/}
                    {/*                    </li>*/}
                    {/*                ))}*/}
                    {/*                /!*<li className="tag__item play red">*!/*/}
                    {/*                /!*    <a href="#"><i className="fas fa-thin fa-at mr-2"></i>{ob.author}</a>*!/*/}
                    {/*                /!*</li>*!/*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </article>*/}
                    {/*}*/}


                    {/*    <article className="postcard light green">*/}

                    {/*        <img className="postcard__img" src={`${authContext.baseUrl}${ob.imageLink}` || 'https://picsum.photos/501/501'}*/}
                    {/*             alt="Image Title"/>*/}

                    {/*        <div className="postcard__text t-dark">*/}
                    {/*            <h1 className="postcard__title green"><Link to={`/project-details/${ob.id}`}>{ob.projectName}</Link></h1>*/}
                    {/*            <div className="postcard__subtitle small">*/}
                    {/*                <time dateTime="2020-05-25 12:00:00">*/}
                    {/*                    <i className="fas fa-calendar-alt mr-2"></i>{ob.date}*/}
                    {/*                </time>*/}
                    {/*            </div>*/}
                    {/*            <div className="postcard__bar"></div>*/}
                    {/*            <div className="postcard__preview-txt">{ob.summary}*/}
                    {/*            </div>*/}
                    {/*            <ul className="postcard__tagbox">*/}
                    {/*                {ob.techStack.map((tech) => (*/}
                    {/*                    <li className="tag__item play green" key={tech}>*/}
                    {/*                        <i className="fas fa-tag mr-2"></i>*/}
                    {/*                        {tech}*/}
                    {/*                    </li>*/}
                    {/*                ))}*/}



                    {/*                /!*<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>*!/*/}
                    {/*                /!*<li className="tag__item play green">*!/*/}
                    {/*                /!*    <a href="#"><i*!/*/}
                    {/*                /!*        className="fas fa-thin fa-at mr-2"></i>{ob.author}</a>*!/*/}
                    {/*                /!*</li>*!/*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </article>*/}
                    {/*}*/}


                    {/*    <article className="postcard light yellow">*/}

                    {/*        <img className="postcard__img" src={`${authContext.baseUrl}${ob.imageLink}` || 'https://picsum.photos/501/501'}*/}
                    {/*             alt="Image Title"/>*/}

                    {/*        <div className="postcard__text t-dark">*/}
                    {/*            /!*<h1 className="postcard__title yellow"><a href="#">{ob.title}</a>*!/*/}
                    {/*            /!*</h1>*!/*/}
                    {/*            <h1 className="postcard__title yellow">*/}
                    {/*                <Link to={`/project-details/${ob.id}`}>{ob.projectName}</Link>*/}
                    {/*            </h1>*/}

                    {/*            <div className="postcard__subtitle small">*/}
                    {/*                <time dateTime="2020-05-25 12:00:00">*/}
                    {/*                    <i className="fas fa-calendar-alt mr-2"></i>{ob.date}*/}
                    {/*                </time>*/}
                    {/*            </div>*/}
                    {/*            <div className="postcard__bar"></div>*/}
                    {/*            <div className="postcard__preview-txt">{ob.summary}*/}
                    {/*            </div>*/}
                    {/*            <ul className="postcard__tagbox">*/}
                    {/*                {ob.techStack.map((tech) => (*/}
                    {/*                    <li className="tag__item play yellow" key={tech}>*/}
                    {/*                        <i className="fas fa-tag mr-2"></i>*/}
                    {/*                        {tech}*/}
                    {/*                    </li>*/}
                    {/*                ))}*/}
                    {/*                /!*<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>*!/*/}
                    {/*                /!*<li className="tag__item play yellow">*!/*/}
                    {/*                /!*    <a href="#"><i className="fas fa-thin fa-at mr-2"></i>{ob.author}</a>*!/*/}
                    {/*                /!*</li>*!/*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </article>*/}
                    {/*}*/}




                    {/*{data.length > 0 ? (*/}
                    {/*    data.map((ob, index) => (*/}

                    {/*            <React.Fragment key={index}>*/}
                    {/*                */}


                    {/*            </React.Fragment>*/}


                    {/*        )*/}
                    {/*    )*/}
                    {/*) : (*/}
                    {/*    <p>Loading Recent works....</p>*/}
                    {/*)*/}
                    {/*}*/}


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





    // this was previous
    //
    //
    //
    // return(
    //     <>
    //         {/*<section >*/}
    //         {/*    <div className="innerPageBannerCol" style={{paddingTop:'60px', paddingBottom:'50px'}}>*/}
    //         {/*        <div className="container" >*/}
    //         {/*            <div className="row g-4 g-md-3  align-items-center">*/}
    //         {/*                <div className="col-md-6">*/}
    //         {/*                    <div className="bannerContent" >*/}
    //         {/*                        <h1 className="xlTitle pb-md-3">See my recent projects below</h1>*/}
    //         {/*                    </div>*/}
    //         {/*                </div>*/}
    //         {/*            </div>*/}
    //         {/*        </div>*/}
    //         {/*    </div>*/}
    //         {/*</section>*/}
    //         <div className="projcard-container">
    //             <section>
    //                 <br/>
    //                 <br/>
    //                 <br/>
    //                 {/*<div className="container">*/}
    //                 {/*    <div className="row g-4 g-md-3  align-items-center">*/}
    //                 {/*        <div className="col-md-6">*/}
    //                 {/*            <div className="bannerContent">*/}
    //                 {/*                <h1 className="xlTitle pb-md-3" style={{padding: '5px', border: '5px'}}>See*/}
    //                 {/*                    recent Blogs..</h1>*/}
    //                 {/*            </div>*/}
    //                 {/*        </div>*/}
    //                 {/*    </div>*/}
    //                 {/*</div>*/}
    //                 <h1 className="xlTitle pb-md-3" style={{textAlign:'justify'}}>See
    //                     recent projects..</h1>
    //
    //             </section>
    //             <hr/>
    //         </div>
    //
    //         <ProjectListComponent/>
    //     </>
    // )
}