import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import logo from "../../assets/images/debian-logo.png";

function Header() {
  {/* const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);

  };*/}

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown') === null) {
        setDropDownOpen(false); 
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setDropDownOpen(prevState => !prevState);
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
        <ul className="header__nav-list">
          {/* Links */}
          <li className="header__nav-item">
            <Link to="/" className="header__nav-item--link">
              HOME
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/blog" className="header__nav-item--link">
              GET DEBIAN
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/micronews" className="header__nav-item--link">
              ABOUT US
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/planet" className="header__nav-item--link">
              EVENTS
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/planet" className="header__nav-item--link">
              DONATE
            </Link>
          </li>
          {/* Menú de idioma */}
          <li className="header__nav-item header__nav-item--language">
            <p className="header__nav-item--link header__nav-item--language-text" onClick={toggleLanguageDropdown}>LENGUAGE</p>
            <div className="dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" className="header__nav-item--svg header__nav-item--arrow">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="header__nav-item--svg"
                viewBox="0 0 16 16"
              >
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
              </svg>
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">Español</li>
                <li className="dropdown-menu__item">English</li>
                <li className="dropdown-menu__item">Français</li>
                <li className="dropdown-menu__item">Português</li>
                <li className="dropdown-menu__item">简体中文</li>
                <li className="dropdown-menu__item">繁體中文</li>
              </ul>
            </div>
          </li>

          {/* Modo Oscuro */}   {/*
          <li
            className="header__nav-item header__nav-item--darkmode"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              // Ícono para modo claro
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="header__nav-item--svg"
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            ) : (
              // Ícono para modo oscuro
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="header__nav-item--svg"
                viewBox="0 0 16 16"
              >

                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" /> </svg>
            )}
          </li>
          */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
