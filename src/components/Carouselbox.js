import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/components/Event.css"; // Import the styles for the event box

const Carouselbox = ({ images, title, link }) => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image loop and switching between images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  const handleClick = () => {
    navigate(link); // Navigate to the specified link when clicked
  };

  return (
    <div className="event-box" onClick={handleClick}>
      <div className="event-image-container">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            className="event-image"
            src={imageSrc}
            alt={`carousel-img-${index}`}
            style={{
              display: index === currentIndex ? "block" : "none", // Only show the current image
            }}
          />
        ))}
      </div>
      <div className="event-title">{title}</div>
    </div>
  );
};

export default Carouselbox;
