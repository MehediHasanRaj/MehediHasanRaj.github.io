import React from 'react';
import proIma from '../images/project-img.jpg'
const Portfolio = () => {
    return (
        <div>
            <section>
                <div className="innerPageBannerCol">
                    <div className="container">
                        <div className="row g-4 g-md-3 align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h1 className="xlTitle pb-md-3">See my recent projects below</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lightBg">
                    <div className="container">
                        <div className="portfolioContentMain">
                            <div className="row g-3 g-md-4 g-lg-5 portfolioRow">
                                {[...Array(6)].map((_, index) => (
                                    <div className="col-md-6 pColMain" key={index}>
                                        <div className="pCol">
                                            <img src={proIma} alt="Project" className="pImg" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
