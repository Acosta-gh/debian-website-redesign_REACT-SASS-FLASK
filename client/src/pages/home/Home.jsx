import React, { useEffect, useState } from 'react';

import NewsCard from '../../components/shared/NewsCard';

import debiansvg__logo from "../../assets/images/debian.svg";
import mockup__performance from "../../assets/images/mockup.png";
import mockup__performance_old from "../../assets/images/mockup-old.png";
import mockup__intro from "../../assets/images/laptop.png";

import { Link } from "react-router-dom";

import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

import { ReactTyped } from "react-typed";

import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../i18n/Translations';

const sponsors = [
  { src: "/images/1und1.png", alt: "1und1" },
  { src: "/images/ampere.jpg", alt: "Ampere" },
  { src: "/images/bytemark_logo.svg", alt: "Bytemark" },
  { src: "/images/conova.png", alt: "Conova" },
  { src: "/images/credativ.png", alt: "Credativ" },
  { src: "/images/fastly.png", alt: "Fastly" },
  { src: "/images/freexian.svg", alt: "Freexian" },
  { src: "/images/gandi.svg", alt: "Gandi" },
  { src: "/images/google.svg", alt: "Google" },
  { src: "/images/hetzner-logo.svg", alt: "Hetzner" },
  { src: "/images/hpe.png", alt: "HPE" },
  { src: "/images/logo_leaseweb.png", alt: "Leaseweb" },
  { src: "/images/loongson.png", alt: "Loongson" },
  { src: "/images/manda_logo.png", alt: "Manda" },
  { src: "/images/osuosl.png", alt: "OSUOSL" },
  { src: "/images/rcodezerodns.png", alt: "RcodeZeroDNS" },
  { src: "/images/ubc.png", alt: "UBC" },
  { src: "/images/wellcome_sanger.png", alt: "Wellcome Sanger" },
];

const Home = () => {
  const { language } = useLanguage(); //Obtiene el idioma elegido / Gets the chosen language
  const descriptions = translations.homePage.introSection.descriptions[language];
  const backDelay = (language === 'zh-Hans' || language === 'zh-Hant') ? 3500 : 1500;

  const images = [
    { src: "/images/image1.webp", alt: "image1" },
    { src: "/images/image2.webp", alt: "image2" },
    { src: "/images/image3.webp", alt: "image3" },
    { src: "/images/image4.webp", alt: "image4" },
    { src: "/images/image5.webp", alt: "image5" },
    { src: "/images/image6.webp", alt: "image6" },
  ];



  return (
    <div className="home">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download home-content-intro__button-icon" viewBox="0 0 16 16" >
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
      <section className='home-content-news'>
        <img src={debiansvg__logo} alt="Debian Logo" className="home-content-news__logo" />
        <h2 className="home-content-news__title">
          {translations.homePage.newsSection.title[language]}
        </h2>
        <p className='home-content-news__text'>
          {translations.homePage.newsSection.paragraph[language]}
        </p>
        <div className='home-content-news__cards'>
          {translations.homePage.newsCards.slice(0, 3).map((post, index) => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            return (
              <Link to={`/article/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <NewsCard
                  key={index}
                  title={post.title[language]}
                  description={post.description[language]}
                  imageUrl={randomImage.src}
                  date={new Date(post.created_at).toLocaleString()}
                />
              </Link>
            );
          })}
        </div>
      </section>
      <section className='home-content-performance'>
        <div className='home-content-performance__block'>
          <div className='home-content-performance__text '>
            <Slide triggerOnce >
              <h3 className='home-content-performance__text--title'>
                {translations.homePage.performanceSection.title_speed[language]}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-takeoff home-content-performance__text--title-icon" viewBox="0 0 16 16">
                  <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                  <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                  <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                </svg>
              </h3>
            </Slide>
            <Slide triggerOnce>
              <p>  {translations.homePage.performanceSection.paragraph_speed[language]} </p>
            </Slide>
          </div>
          <Slide triggerOnce direction="right">
            <img src={mockup__performance} alt="Computer Mockup" className="home-content-performance__image-element" />
          </Slide>
        </div>
        <div className='home-content-performance__block home-content-performance__block--second'>
          <Slide triggerOnce >
            <img src={mockup__performance_old} alt="Computer Mockup" className="home-content-performance__image-element home-content-performance__image-element--second" />
          </Slide>
          <div className='home-content-performance__text home-content-performance__text--second'>
            <Slide triggerOnce direction="right">
              <h3 className='home-content-performance__text--title home-content-performance__text--title--second'>{translations.homePage.performanceSection.title_green[language]}</h3>
            </Slide>
            <Slide triggerOnce direction="right">
              <p>{translations.homePage.performanceSection.paragraph_green[language]}</p>
            </Slide>
          </div>
        </div>
      </section >
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
      <section className='home-content-faq'>
        <Fade triggerOnce duration="500" >
          <h3 className='home-content-faq__title'>{translations.homePage.faqSection.title[language]}</h3>
          <div className='home-content-faq__questions'>
            {translations.homePage.faqSection.faqs.map((f, index) => (
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
      <section className='home-content-sponsors'>
        <Fade triggerOnce duration="500">
          <h3 className='home-content-sponsors__title'>{translations.homePage.sponsorSection.title[language]}</h3>
          <p className='home-content-sponsors__text'>
            {translations.homePage.sponsorSection.text[language]}
          </p>
          <div className='home-content-sponsors__images'>
            {sponsors.map((s, index) => (
              <img key={index} src={s.src} alt={s.alt} />
            ))}
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Home;