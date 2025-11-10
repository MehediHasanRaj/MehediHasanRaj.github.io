import React from "react";

export default function ExperienceComponent() {

    return(
        <div className={'container'}>
            <hr/>
            <div className="testimonialCol" style={{paddingTop:'1px'}}>
                <h4 className="smText regular d-block"
                    style={{textAlign: 'left', fontWeight: 'bolder'}}>Experience</h4>
                <h4 className="xsTitle bold" style={{textAlign: 'justify'}}>Junior Java Full-Stack
                    Developer, <p
                        style={{fontSize: '11px', fontStyle:'italic'}}>@
                        Exsentra Innovation Limited, Bangladesh</p></h4>

            </div>
            <div style={{textAlign: 'left'}}>
                <ul>
                    <li style={{listStyle: 'inside' , listStyleType:'square'}}>
                        Designed and implemented Java applications improving system efficiency by 10%, delivering 2 major projects.
                    </li>
                    <li style={{listStyle: 'inside' , listStyleType:'square'}}>
                        Enhanced web application functionality leading to 15% increase in user satisfaction.
                    </li>
                    <li style={{listStyle: 'inside' , listStyleType:'square'}}>
                        Built scalable solutions using AWS, Spring Boot, and React with 99% uptime.
                    </li>
                    <li style={{listStyle: 'inside', listStyleType:'square'}}>
                        Implemented secure authentication and containerized applications using Docker.
                    </li>
                </ul>

            </div><br/>

        </div>
    )
}