import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/debian-logo.png";
import { Squeeze as Hamburger } from 'hamburger-react';

import { useLanguage } from '../../contexts/LanguageContext'; //Importa el Contexto
import { translations } from '../../i18n/Translations'; // Importa las traducciones

function Header() {
  const { language, toggleLanguage } = useLanguage(); //Obtiene el idioma elegido
  console.log(language); 

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isHamburguerMenuOpen, setIsHamburguerMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown') === null) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = (e) => {
    e.stopPropagation();
    setIsDropDownOpen(prevState => !prevState);
  };

  const toggleHamburguerMenu = (e) => {
    e.stopPropagation();
    setIsHamburguerMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setIsDropDownOpen(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <h1>
        <Link to="/">
          <img src={logo} alt="Logo de la página" className="header__logo" />
        </Link>
      </h1>

      {/* Menú de navegación */}
      <nav className="header__nav">
        <ul className={`header__nav-list ${isHamburguerMenuOpen ? 'header__nav-list-hamburguer_icon--active' : ''}`}>
          <div className="header__nav-hamburguer_icon" onClick={toggleHamburguerMenu}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          {/* Links */}
            <li className="header__nav-item">
            <Link to="/" className="header__nav-item--link">{translations.header.home[language]}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="learnmore" className="header__nav-item--link">{translations.header.getDebian[language]}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="news" className="header__nav-item--link">{translations.header.projectNews[language]}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="donate" className="header__nav-item--link">{translations.header.donate[language]}</Link>
          </li>

          {/* Menú de idioma */}
          <li className="header__nav-item header__nav-item--language">
            <p
              className="header__nav-item--link header__nav-item--language-text dropdown"
              onClick={toggleLanguageDropdown}
            >
              {language} {/* Muestra el idioma seleccionado */}
              {isDropDownOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              )}
            </p>

            <div className="dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down header__nav-item--svg header__nav-item--arrow" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-translate header__nav-item--svg header__nav-item--arrow" viewBox="0 0 16 16">
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
              </svg>
              <ul className={`dropdown-menu ${isDropDownOpen ? 'dropdown-menu--active' : ''}`}>
                <li className="dropdown-menu__item" onClick={() => handleLanguageChange("es")}>Español</li>
                <li className="dropdown-menu__item" onClick={() => handleLanguageChange("en")}>English</li>
                <li className="dropdown-menu__item" onClick={() => handleLanguageChange("fr")}>Français</li>
                <li className="dropdown-menu__item" onClick={() => handleLanguageChange("pt")}>Português</li>
                <li className="dropdown-menu__item" onClick={() => handleLanguageChange("zh-Hans")}>简体中文</li>
                <li className="dropdown-menu__item" onClick={() => handleLanguageChange("zh-Hant")}>繁體中文</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
