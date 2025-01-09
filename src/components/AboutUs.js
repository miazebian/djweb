// AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // To define and validate props
import "../css/components/AboutUs.css"
import { TbHeadphonesFilled } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

const AboutUs = ({ imageUrl, headerText, paragraphText, boldText, showButton }) => {
  // Find the part of the paragraph text that should be bolded
  const normalText = paragraphText.replace(boldText, '');
  const { t } = useTranslation(); // Use translation function

  return (
    <div className="about-us-container">
      {/* Left Section: Header and Paragraph */}
      <div className="text-section">
        <h2 className="header">{headerText}</h2>
        <p className="paragraph">
          {normalText}
          <strong>{boldText}</strong>
        </p>
        {showButton && (
  <Link to="/about" className="button">
    <div className="button-content">
    {t("about.buttonText")}
    <TbHeadphonesFilled size={20} />
    </div>
  </Link>
)}
      </div>

      {/* Right Section: Image */}
      <div className="image-section">
        <img src={imageUrl} alt="About Us" className="imageabout" />
      </div>
    </div>
  );
};

// Prop validation
AboutUs.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  boldText: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
};

// Default props
AboutUs.defaultProps = {
  showButton: false,
};

export default AboutUs;
