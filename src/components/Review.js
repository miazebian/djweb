import React, { useRef, useEffect, useState } from "react";
import "../css/pages/Reviews.css"; // Add styling here

const Review = ({ username, text, avatar }) => {
  const [isVisible, setIsVisible] = useState(false); // Track if the review is visible
  const reviewRef = useRef(null); // Reference to the review card

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Review is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (reviewRef.current) {
      observer.observe(reviewRef.current); // Observe the review element
    }

    return () => {
      if (reviewRef.current) {
        observer.unobserve(reviewRef.current); // Clean up the observer
      }
    };
  }, []);

  return (
    <div
      ref={reviewRef}
      className={`review-card ${isVisible ? "visible" : ""}`} // Apply the 'visible' class when in view
    >
      <img src={avatar} alt={`avatar`} className="review-avatar" />
      <div className="review-details">
        <p className="review-text">{text}</p>
      </div>
    </div>
  );
};

export default Review;
