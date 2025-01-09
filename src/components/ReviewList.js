import React from "react";
import Review from "./Review";
import "../css/pages/Reviews.css"; // Add your styling here
import avatars from "./Avatar";

const ReviewList = ({ reviews }) => {
  const midIndex = Math.ceil(reviews.length / 2);
  const leftColumnReviews = reviews.slice(0, midIndex); // First half of the reviews
  const rightColumnReviews = reviews.slice(midIndex); // Second half of the reviews

  return (
    <div className="review-list-container">
      <div className="review-column">
        {leftColumnReviews.map((review, index) => (
          <Review
            key={`left-${index}`}
            text={review.text}
            avatar={avatars[index]} // Use avatar from avatars array
          />
        ))}
      </div>
      <div className="review-column">
        {rightColumnReviews.map((review, index) => (
          <Review
            key={`right-${index}`}
            text={review.text}
            avatar={avatars[midIndex + index]} // Use avatar from avatars array for second column
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;