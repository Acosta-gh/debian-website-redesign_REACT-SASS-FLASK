import React from 'react'
import { Fade } from "react-awesome-reveal";

import { translations } from '../../i18n/Translations';
import { useLanguage } from '../../contexts/LanguageContext'

const FossSection = () => {
    const { language } = useLanguage();
    return (
        <section className='home-content-foss'>
            <Fade triggerOnce duration="500">
                <div className='home-content-foss__intro'>
                    <h3 className='home-content-foss__title'>{translations.homePage.fossSection.intro.title[language]}</h3>
                    <p className='home-content-foss__description'>
                        {translations.homePage.fossSection.intro.description[language]}
                    </p>
                    <a className='home-content-foss__link' href='#'>{translations.homePage.fossSection.intro.link[language]}
                    </a>
                </div>
                <div className='home-content-foss__features'>
                    <div className='home-content-foss__feature'>
                        <h4 className='home-content-foss__feature-title'>{translations.homePage.fossSection.features.title[language]}</h4>
                        <p className='home-content-foss__feature-description'>
                            {translations.homePage.fossSection.features.description[language]}
                        </p>
                        <a className='home-content-foss__feature-link' href='#'> {translations.homePage.fossSection.features.link[language]}
                        </a>
                    </div>
                    <div className='home-content-foss__feature'>
                        <h4 className='home-content-foss__feature-title'>{translations.homePage.fossSection.feature.title[language]}</h4>
                        <p className='home-content-foss__feature-description'>
                            {translations.homePage.fossSection.feature.description[language]}
                        </p>
                        <a className='home-content-foss__feature-link' href='#'>{translations.homePage.fossSection.feature.link[language]}</a>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default FossSection