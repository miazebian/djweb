// StaticImage.js
import React from "react";
import { useTranslation } from "react-i18next";

const StaticImage = ({ imageSrc, text }) => {
  const { t } = useTranslation();

  return (
    <div className="image-container">
      <img
        className="image-static"
        src={imageSrc}
        alt="static-img"
        onError={(e) => e.target.style.display = 'none'} // Hide broken images
      />
      {/* Text Overlay */}
      <div className="image-text-container">
        <div className="image-text">{t(text)}</div>
      </div>
    </div>
  );
};

export default StaticImage;
