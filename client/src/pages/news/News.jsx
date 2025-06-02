import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { getPosts } from '../../../services/post.service';

import { Link } from 'react-router-dom'
import NewsCard from '../../components/shared/NewsCard';

const images = [
    { src: "/images/image1.webp", alt: "image1" },
    { src: "/images/image2.webp", alt: "image2" },
    { src: "/images/image3.webp", alt: "image3" },
    { src: "/images/image4.webp", alt: "image4" },
    { src: "/images/image5.webp", alt: "image5" },
    { src: "/images/image6.webp", alt: "image6" },
];


import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../i18n/Translations';

function News() {
    const [posts, setPosts] = useState([]);
    const { language } = useLanguage();

    useEffect(() => {
        getPosts().then(data => {
            setPosts([...data.posts].reverse());
        });
    }, []);

    return (
        <div className='news'>
            <Fade triggerOnce duration={500}>
                <h1 className='news-title'>{translations.homePage.newsSection.latest_news[language]}</h1>
                <div className='news-list'>
                    {posts.slice(0, 4).map((post, index) => {
                        const randomImage = images[Math.floor(Math.random() * images.length)];
                        return (
                            <Link to={`/article/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <NewsCard
                                    title={post.title}
                                    description={post.description}
                                    imageUrl={randomImage.src}
                                    date={new Date(post.created_at).toLocaleString()}
                                />
                            </Link>
                        );
                    })}
                </div>
            </Fade>
        </div>
    );
}

export default News;
