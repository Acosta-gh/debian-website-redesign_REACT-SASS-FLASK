import React from 'react';
import { Fade } from "react-awesome-reveal";

import { translations } from "../../i18n/Translations";
import { useLanguage } from "../../contexts/LanguageContext";

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

const SponsorSection = () => {
    const { language } = useLanguage();

    return (
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
    );
};

export default SponsorSection;
