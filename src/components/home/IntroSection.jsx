import React from 'react'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import mockup__intro from "../../assets/images/laptop.png";

import { useLanguage } from '../../contexts/LanguageContext'; 
import { translations } from '../../i18n/Translations'; 

const IntroSection = () => {
    const { language } = useLanguage(); //Obtiene el idioma elegido
    const descriptions = translations.homePage.introSection.descriptions[language];
    const backDelay = (language === 'zh-Hans' || language === 'zh-Hant') ? 3500 : 1500;

    return (
        <section className="home-content-intro">

            <Fade cascade triggerOnce damping={0.18}>
                <h2 className="home-content-intro__title">
                    Debian
                </h2>

                <h3 className="home-content-intro__subtitle">{translations.homePage.introSection.subtitle[language]}</h3>
                <h4 className="home-content-intro__caption">
                    <ReactTyped
                        strings={descriptions}
                        typeSpeed={100}
                        backDelay={backDelay}
                        loop
                        backSpeed={20}
                        showCursor={true}
                    />
                </h4>
                <div className='home-content-intro__special-feature-mobile'>
                    <div className="home-content-intro__buttons">
                        <Link to="https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.10.0-amd64-netinst.iso" className="home-content-intro__button">
                        {translations.homePage.introSection.tryDebian[language]}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" className='home-content-intro__button-icon'>
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                            </svg>
                        </Link>
                        <Link to="learnmore" className="home-content-intro__button">
                        {translations.homePage.introSection.learnMore[language]}
                        </Link>
                    </div>
                    <img src={mockup__intro} alt="Computer Mockup" className="home-content-intro__image-element" />
                </div>
            </Fade>
        </section>
    )
}

export default IntroSection