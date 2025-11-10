import React from 'react';
import '../css/ResearchCard.css'

function Portfolio() {
    return (
        <div className="portfolio">

            <div className="research-list" style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left"
            }}>
                {/*<ResearchCard*/}
                {/*    title="Deep Learning Approaches for XYZ Problem"*/}
                {/*    authors="Mehedi Hasan Raj, Collaborator Name"*/}
                {/*    journal="International Journal of AI Research"*/}
                {/*    date="Jan 2024"*/}
                {/*    summary="This study explores novel deep learning techniques to solve the challenging problem of XYZ, achieving significant improvements over traditional methods."*/}
                {/*    link="https://linktopublication.com"*/}
                {/*/>*/}

                <div className="research-card">
                    <h3 className="research-title">IoT Botnet Detection Using Various One-Class Classifiers</h3>
                    <p className="research-meta">
                        <span className="research-authors">Mehedi Hasan Raj</span> |{' '}
                        <span className="research-journal">Vietnam Journal of Computer Science</span> |{' '}
                        <span className="research-date">Jan 2021</span>
                    </p>
                    <p className="research-summary">This study explores novel machine learning techniques to identify the
                        various IoT botnets, and improve the IoT security</p>
                    {(
                        <a
                            className="research-link"
                            href="https://www.worldscientific.com/doi/10.1142/S2196888821500123"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read Publication
                        </a>
                    )}
                </div>

                <div className="research-card">
                    <h3 className="research-title">A Title based Extreme Multi-label
                        Multi-class Text Classification</h3>
                    <p className="research-meta">
                        <span className="research-authors">Mehedi Hasan Raj</span> |{' '}
                        <span className="research-journal">M.Sc Thesis, University of Essex</span> |{' '}
                        <span className="research-date">Jan 2023</span>
                    </p>
                    <p className="research-summary">This study explores semantic annotation using deep learning, showing that title-based annotation can be competitive with full-text annotation.outperforming previous studies and full-text approaches.</p>
                    {(
                        <a
                            className="research-link"
                            href="https://drive.google.com/file/d/1n45VStoMExDeYzhn4dgJ6tFt362U170U/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read Publication
                        </a>
                    )}
                </div>


                {/* You can add more ResearchCard components here */}
            </div>
        </div>
    );
}

export default Portfolio;
