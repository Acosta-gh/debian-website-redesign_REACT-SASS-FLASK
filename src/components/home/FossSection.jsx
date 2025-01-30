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
                    <h3 className='home-content-foss__title'>{translations.fossSection.intro.title[language]}</h3>
                    <p className='home-content-foss__description'>
                        {translations.fossSection.intro.description[language]}
                    </p>
                    <a className='home-content-foss__link' href='#'>{translations.fossSection.intro.link[language]}
                    </a>
                </div>
                <div className='home-content-foss__features'>
                    <div className='home-content-foss__feature'>
                        <h4 className='home-content-foss__feature-title'>{translations.fossSection.features.title[language]}</h4>
                        <p className='home-content-foss__feature-description'>
                            {translations.fossSection.features.description[language]}
                        </p>
                        <a className='home-content-foss__feature-link' href='#'> {translations.fossSection.features.link[language]}
                        </a>
                    </div>
                    <div className='home-content-foss__feature'>
                        <h4 className='home-content-foss__feature-title'>{translations.fossSection.feature.title[language]}</h4>
                        <p className='home-content-foss__feature-description'>
                            {translations.fossSection.feature.description[language]}
                        </p>
                        <a className='home-content-foss__feature-link' href='#'>{translations.fossSection.feature.link[language]}</a>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default FossSection