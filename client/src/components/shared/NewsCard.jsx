import React from 'react';

function NewsCard({ title, description, imageUrl, date }) {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} className="news-card__image" />
      <div className="news-card__content">
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <span className="news-card__date">{date}</span>
      </div>
    </div>
  );
}

export default NewsCard;
