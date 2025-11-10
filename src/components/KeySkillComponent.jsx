import React from 'react';
import skillIcon1 from '../images/key-skill-icon-1.svg';
import skillIcon2 from '../images/key-skill-icon-2.svg';
import skillIcon3 from '../images/key-skill-icon-3.svg';
import skillIcon4 from '../images/key-skill-icon-1.svg';
import '../css/techStackbutton.css'
import '../css/button33.css'
import '../css/button85.css'
const Skills = () => {
    return (
        <section>
            <div className="sectionSpace pt-0" >
                <div className="container" >
                    <div className="row">
                        <div className="col-md-auto">
                            <div className="keySkillCol">
                                <h4 className="smTitle pb-3" >Key Skills</h4>
                                <div className="keySkillCard">
                                    <div className="ksIconCol">
                                        <img src={skillIcon1} alt="Skill 1"/>
                                    </div>
                                    <span className="ksText">Problem Solving</span>
                                </div>
                                <div className="keySkillCard">
                                    <div className="ksIconCol">
                                        <img src={skillIcon2} alt="Skill 2"/>
                                    </div>
                                    <span className="ksText">Team Work</span>
                                </div>
                                <div className="keySkillCard">
                                    <div className="ksIconCol">
                                        <img src={skillIcon3} alt="Skill 3"/>
                                    </div>
                                    <span className="ksText">Leadership</span>
                                </div>
                                <div className="keySkillCard">
                                    <div className="ksIconCol">
                                        <img src={skillIcon4} alt="Skill 4"/>
                                    </div>
                                    <span className="ksText">Communication</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <h4 className="smTitle pb-3" style={{textAlign: 'left'}}>Coding Skills</h4>
                            <div className="progressCol">
                                {/* Repeat similar structure for progress bars */}
                                <div className="progressCard">
                                    <div className="progressCol" style={{textAlign: "left"}}>
                                        <span className="progressLbl">Java</span>
                                        <div className="row g-2 align-items-center">
                                            <div className="col">
                                                <div className="progress progressStyle">
                                                    <div className="progress-bar" role="progressbar"
                                                         style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span className="pLbl">95%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Repeat for other skills */}

                                </div>
                            </div>
                            <div className="progressCol">
                                {/* Repeat similar structure for progress bars */}
                                <div className="progressCard">
                                    <div className="progressCol" style={{textAlign: "left"}}>
                                        <span className="progressLbl">C++</span>
                                        <div className="row g-2 align-items-center">
                                            <div className="col">
                                                <div className="progress progressStyle">
                                                    <div className="progress-bar" role="progressbar"
                                                         style={{width: '90%'}} aria-valuenow="95" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span className="pLbl">85%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Repeat for other skills */}

                                </div>
                            </div>
                            <div className="progressCol">
                                {/* Repeat similar structure for progress bars */}
                                <div className="progressCard">
                                    <div className="progressCol" style={{textAlign: "left"}}>
                                        <span className="progressLbl">Python</span>
                                        <div className="row g-2 align-items-center">
                                            <div className="col">
                                                <div className="progress progressStyle">
                                                    <div className="progress-bar" role="progressbar"
                                                         style={{width: '80%'}} aria-valuenow="95" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span className="pLbl">80%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Repeat for other skills */}

                                </div>
                            </div>

                            {/*<div className="progressCol">*/}
                            {/*    /!* Repeat similar structure for progress bars *!/*/}
                            {/*    <div className="progressCard">*/}
                            {/*        <div className="progressCol" style={{textAlign: "left"}}>*/}
                            {/*            <span className="progressLbl">JavaScript</span>*/}
                            {/*            <div className="row g-2 align-items-center">*/}
                            {/*                <div className="col">*/}
                            {/*                    <div className="progress progressStyle">*/}
                            {/*                        <div className="progress-bar" role="progressbar"*/}
                            {/*                             style={{width: '75%'}} aria-valuenow="95" aria-valuemin="0"*/}
                            {/*                             aria-valuemax="100"></div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div className="col-auto">*/}
                            {/*                    <span className="pLbl">75%</span>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        /!* Repeat for other skills *!/*/}

                            {/*    </div>*/}
                            {/*</div>*/}
                            <div style={{textAlign: 'left'}}>
                                <br/>
                                <br/>
                                <h4 className="smTitle pb-3">Techlogies</h4>
                                <button className="techButton me-2 my-1">Java, C++, Python</button>
                                <button className="techButton me-2 my-1">JavaScript, SQL, TypeScript</button>
                                <button className="techButton me-2 my-1">Spring boot</button>
                                <button className="techButton me-2 my-1">Spring MVC</button>
                                <button className="techButton me-2 my-1">Spring Security</button>
                                <button className="techButton me-2 my-1">Spring Cloud</button>
                                <button className="techButton me-2 my-1">Microservice</button>
                                <button className="techButton me-2 my-1">React</button>
                                <button className="techButton me-2 my-1">Cloud Computing</button>
                                <button className="techButton me-2 my-1">AWS</button>
                                <button className="techButton me-2 my-1">Azure, GCP</button>
                                <button className="techButton me-2 my-1">Maven</button>
                                <button className="techButton me-2 my-1">Gradle</button>
                                <button className="techButton me-2 my-1">Hibernate</button>
                                <button className="techButton me-2 my-1">SQL</button>
                                <button className="techButton me-2 my-1">NoSql</button>

                                <button className="techButton me-2 my-1">Git</button>
                                <button className="techButton me-2 my-1">Docker</button>

                                <button className="techButton me-2 my-1">Kafka</button>
                                <button className="techButton me-2 my-1">CI/CD</button>
                                <button className="techButton me-2 my-1">Test-Driven-Development</button>
                                <button className="techButton me-2 my-1">Redis</button>

                                <button className="techButton me-2 my-1">Deep Learning</button>
                                <button className="techButton me-2 my-1">Machine Learning</button>
                                <button className="techButton me-2 my-1">LLM</button>
                                <button className="techButton me-2 my-1">AI</button>
                                <button className="techButton me-2 my-1">Software Development</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
