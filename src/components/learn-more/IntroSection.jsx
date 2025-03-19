import React from 'react'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import mockup__intro from "../../assets/images/framework.png";

import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../i18n/Translations';

const IntroSection = () => {
    const { language } = useLanguage(); //Obtiene el idioma elegido

    return (
        <section className="learn-more__intro">
            <Fade triggerOnce duration="500">
                <div className="learn-more__intro-blankspace">
                    <h3 className="learn-more__title">{translations.learnMorePage.title[language]}</h3>
                    <p className="learn-more__description">
                        {translations.learnMorePage.description[language]}
                    </p>
                </div>
                <div className="learn-more__wave"></div>
                <img
                    src={mockup__intro}
                    alt="Computer Mockup"
                    className="learn-more__image"
                />
                <div className="learn-more__content">
                    <h2 className="learn-more__heading"> {translations.learnMorePage.heading[language]}</h2>
                    <p className='learn-more__paragraph'> {translations.learnMorePage.paragraph[language]}</p>
                    <h3 className="learn-more__subheading"> {translations.learnMorePage.subheading1[language]}</h3>
                    <p className="learn-more__text">
                        {translations.learnMorePage.text1[language]}
                    </p>

                    <h3 className="learn-more__subheading"> {translations.learnMorePage.subheading2[language]}</h3>
                    <p className="learn-more__text">
                        {translations.learnMorePage.text2[language]}
                    </p>

                    <h3 className="learn-more__subheading"> {translations.learnMorePage.subheading3[language]}</h3>
                    <p className="learn-more__text">
                        {translations.learnMorePage.text3[language]}
                    </p>

                    <Link to="https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.10.0-amd64-netinst.iso" className="learn-more-intro__button">
                        {translations.homePage.introSection.tryDebian[language]}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" className='learn-more-intro__button-icon'>
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>
                    </Link>

                </div>
            </Fade>
        </section>

    )
}

export default IntroSection