import React, { useEffect, useState, useRef } from "react";
import "../../css/components/HighligthtImage.css";

const HighlightImage = ({ imageSrc, altText }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const imageRef = useRef(null); // Using a ref to access the DOM element

  const handleScroll = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      
      // Check if the element is within the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsHighlighted(true);
      } else {
        setIsHighlighted(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Check if the element is in the viewport when the component mounts
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={imageRef} // Use the ref to reference the DOM element
      className={`highlight-container ${isHighlighted ? "highlighted" : ""}`}
      onMouseEnter={() => setIsHighlighted(true)} // Highlight on hover
      onMouseLeave={() => setIsHighlighted(false)} // Remove highlight when not hovering
    >
      <img src={imageSrc} alt={altText} className="highlight-image" />
    </div>
  );
};

export default HighlightImage;
