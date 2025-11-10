import React, {useEffect} from 'react';
import logo from '../images/Copilot-Logo-PNG_002.png'
import {Link} from "react-router-dom";


export default function HeaderComponent() {
    useEffect(() => {
        const navToggle = document.querySelector('.navToggle');
        const body = document.body;

        const handleNavToggleClick = (e) => {
            e.preventDefault();
            body.classList.toggle('navToggleActive');
        };

        const handleScroll = () => {
            if (window.scrollY > 10) {
                body.classList.add('fixedHeader');
            } else {
                body.classList.remove('fixedHeader');
            }
        };

        navToggle.addEventListener('click', handleNavToggleClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            navToggle.removeEventListener('click', handleNavToggleClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="headerCol">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <div className="logoCol">
                                <Link to="/"><img src={logo} alt="Logo"/></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-md-none">
                                <button className="navToggle">
                                    <span className="navToggle__text">Toggle Menu</span>
                                </button>
                            </div>
                            <div className="navCollapseCol">
                                <div className="navCol">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/project-list">Portfolio</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>

                                        {/*<li><a href="/">Home</a></li>*/}
                                        {/*<li><a href="/project-list">Portfolio</a></li>*/}
                                        {/*<li><a href="/blog">Blog</a></li>*/}
                                        {/*<li><a href="/contact">Contact</a></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

