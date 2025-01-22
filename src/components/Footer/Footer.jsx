import React from 'react';
import { Link } from "react-router-dom";
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text"> Copyright © 1997-{currentYear} SPI and others; <a href='#'>See license terms</a></p>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                About Us
              </Link>
              <Link to="/" className="footer__link">
                Events
              </Link>
              <Link to="/" className="footer__link">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
        <p className="footer__text">  Debian is a registered trademark of Software in the Public Interest, Inc. </p>
        <div className="footer__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16" className='footer__icon'>
            <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16" className='footer__icon'>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2m0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2m.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
