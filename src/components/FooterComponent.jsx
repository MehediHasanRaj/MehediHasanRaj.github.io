import React from 'react';
import fb from '../images/fb.svg'
import github from '../images/github-mark.svg'
import linkedin from '../images/linkedin.svg'
import instagram from '../images/insta.svg'

const FooterComponent = () => {
    return (
        <footer>
            <div className="footerCol">
                <div className="container">
                    <ul className="socialCol">
                        <li><a href="https://www.linkedin.com/in/mehedi-hasan-raj/"><img src={linkedin} alt="LinkedIn"/></a></li>
                        <li><a href="https://github.com/MehediHasanRaj"><img src={github} alt="Twitter"/></a></li>
                        <li><a href="https://facebook.com/md.mehedi.hasan.raj.007/"><img src={fb} alt="Facebook"/></a></li>
                        <li><a href="https://instagram.com/md.mehedi.hasan.raj.007/"><img src={instagram}
                                                                                          alt="Instagram"/></a></li>
                    </ul>
                    <div className="copyrightCol">
                        <p>Copyright ©2024 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
