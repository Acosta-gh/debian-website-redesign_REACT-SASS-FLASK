import React from 'react'
import { Fade } from "react-awesome-reveal";

import { translations } from "../../i18n/Translations";
import { useLanguage } from "../../contexts/LanguageContext";

const FaqSection = () => {
  const { language } = useLanguage();

  return (
    <section className='home-content-faq'>
      <Fade triggerOnce duration="500" >

        <h3 className='home-content-faq__title'>{translations.faqSection.title[language]}</h3>
        <div className='home-content-faq__questions'>
          {translations.faqSection.faqs.map((f, index) => (
            <Fade key={index} triggerOnce duration={500} delay={index * 100}>
              <p className='home-content-faq__text'>
                <span className='home-content-faq__text home-content-faq__text--question'>
                  {f.question[language]}:
                </span>
                {f.answer[language]}
              </p>
            </Fade>
          ))}
        </div>
      </Fade>
    </section>
  )
}

export default FaqSection