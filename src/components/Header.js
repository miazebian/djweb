// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/components/header.css"; // Make sure your CSS is correctly imported

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to change the language
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setMenuOpen(false);
    scrollToTop();
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
    scrollToTop();
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0); // This scrolls to the top of the page
  };

  return (
    <header>
      <nav>
        <Link className="cursive-text" to="/" onClick={closeMenu}>
          {t("header.companyname")}
        </Link>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button className="buttonLangauge" onClick={toggleLanguage}>
            {t("header.language")}
          </button>
          <Link to="/" onClick={closeMenu}>{t("header.home")}</Link>
          <Link to="/about" onClick={closeMenu}>{t("header.about")}</Link>
          <Link to="/reviews" onClick={closeMenu}>{t("header.reviews")}</Link>
          <Link to="/events" onClick={closeMenu}>{t("header.events")}</Link>
          <Link to="/faq" onClick={closeMenu}>{t("header.faq")}</Link>
          <Link to="/contact" onClick={closeMenu}>{t("header.contact")}</Link>

        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "X" : "☰"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
