import React, { useEffect, useState } from "react";
import "../../css/components/Event.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ImageCarousel = ({ images, text }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image loop and switching between images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  const handleButtonClick = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  console.log("Current Index:", currentIndex); // Check the current index

  return (
    <div className="image-container">
      {images.map((imageSrc, index) => (
        <img
          key={index}
          className="image"
          src={imageSrc}
          alt={`carousel-img-${index}`}
          onError={(e) => e.target.style.display = 'none'} // Hide broken images
          style={{
            display: index === currentIndex ? "block" : "none", // Only show the current image
          }}
        />
      ))}
      {/* Text Overlay */}
      <div className="image-text-container">
        <div className="image-text">{t(text)}</div>
        <button className="image-button" onClick={handleButtonClick}>
          {t("home.book")}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
