import React from 'react';
import NewsCard from '../shared/NewsCard';
import debiansvg__logo from "../../assets/images/debian.svg";

import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../i18n/Translations";

const NewsSection = () => {
    const { language } = useLanguage();

    return (
        <section className='home-content-news'>
            <img src={debiansvg__logo} alt="Debian Logo" className="home-content-news__logo" />
            <h2 className="home-content-news__title">
                {translations.newsSection.title[language]}
            </h2>
            <p className='home-content-news__text'>
                {translations.newsSection.paragraph[language]}
            </p>
            <div className='home-content-news__cards'>
                {translations.newsSection.newsCard.map((news, index) => (
                    <NewsCard
                        key={index}
                        title={news.title[language]}
                        description={news.description[language]}
                        imageUrl={`/images/${news.image}`}
                        date={news.date[language]}
                    />
                ))}
            </div>
        </section>
    );
}

export default NewsSection;
