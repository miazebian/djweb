import React, { useEffect, useState } from "react";
import "../../css/components/ParallaxSection.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ParallaxSection = ({ image, headerText, paragraphText, buttonText, NavText }) => {
  const navigate = useNavigate();
  const [isIphone, setIsIphone] = useState(false);

  // Function to detect if the user is on an iPhone
  const checkIfIphone = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPhone/i.test(userAgent)) {
      setIsIphone(true);
    }
  };

  useEffect(() => {
    checkIfIphone(); // Check on initial load
    window.addEventListener("resize", checkIfIphone); // Recheck on resize

    return () => {
      window.removeEventListener("resize", checkIfIphone); // Cleanup on unmount
    };
  }, []);

  const handleButtonClick = () => {
    navigate(NavText); // Navigate to the path provided in NavText
  };

  return (
    <div
    className={`${isIphone ? "parallax-container1" : "parallax-container"}`} >
      <div
        className={`${isIphone ? "parallax-image1" : "parallax-image"}`} // Conditional class
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="parallax-text">
        <h1>{headerText}</h1>
        <p>{paragraphText}</p>
        <button onClick={handleButtonClick}>
          {buttonText}
          <FaHeart style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
};

export default ParallaxSection;
