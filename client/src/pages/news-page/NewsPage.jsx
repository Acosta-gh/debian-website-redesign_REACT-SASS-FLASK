import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { translations } from "../../i18n/Translations";
import { useLanguage } from "../../contexts/LanguageContext";
import { Fade } from "react-awesome-reveal";

const ITEMS_PER_PAGE = 3;

const NewsPage = () => {
  const { language } = useLanguage();
  const newsCards = translations.homePage.newsCards;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(newsCards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(newsCards.length / ITEMS_PER_PAGE));
  }, [itemOffset, newsCards]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % newsCards.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="news">
      <Fade cascade triggerOnce damping={0.1}>
        <h3 className="news__maintitle">Debian micronews</h3>
      </Fade>
      <ul className="news__list">
        <Fade cascade triggerOnce damping={0.1}>
          {currentItems.map((post) => (
            <li className="news__item" key={post.id}>
              <h3 className="news__title">{post.title[language]}</h3>
              <p className="news__description">{post.description[language]}</p>
              <time className="news__date">{new Date(post.created_at).toLocaleString()}</time>
            </li>
          ))}
        </Fade>
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<span>&gt;</span>}
        previousLabel={<span>&lt;</span>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        containerClassName="news__pagination"
        pageClassName="news__pagination-page"
        pageLinkClassName="news__pagination-link"
        activeClassName="news__pagination-page--active"
        previousClassName="news__pagination-prev"
        previousLinkClassName="news__pagination-link"
        nextClassName="news__pagination-next"
        nextLinkClassName="news__pagination-link"
        breakClassName="news__pagination-break"
        breakLinkClassName="news__pagination-link"
        disabledClassName="news__pagination--disabled"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default NewsPage;