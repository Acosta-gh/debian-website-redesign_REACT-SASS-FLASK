import React from 'react'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import mockup__intro from "../../assets/images/laptop.png";

const IntroSection = () => {
    const descriptions = [
        "is Free Software.",
        "is stable and secure.",
        "has extensive Hardware Support.",
        "offers a flexible Installer.",
        "provides smooth Upgrades.",
        "is the Base for many other Distributions.",
        "is a Community."
    ];
    return (

        <section className="home-content-intro">

            <Fade cascade triggerOnce damping={0.18}>
                <h2 className="home-content-intro__title">
                    Debian
                </h2>

                <h3 className="home-content-intro__subtitle">The Universal Operating System</h3>
                <h4 className="home-content-intro__caption">
                    <ReactTyped
                        strings={descriptions}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        showCursor={true}
                    />
                </h4>
                <div className='home-content-intro__special-feature-mobile'>
                    <div className="home-content-intro__buttons">
                        <Link to="/" className="home-content-intro__button">
                            Try Debian Live
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" className='home-content-intro__button-icon'>
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                            </svg>
                        </Link>
                        <Link to="/" className="home-content-intro__button">
                            Learn More
                        </Link>
                    </div>
                    <img src={mockup__intro} alt="Computer Mockup" className="home-content-intro__image-element" />
                </div>
            </Fade>
        </section>
    )
}

export default IntroSection