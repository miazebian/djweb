import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "../../css/components/Event.css"; // Import the styles for the event box

const EventBox = ({ image, title, link }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleClick = () => {
    navigate(link); // Navigate to the specified link when clicked
  };

  return (
    <div className="event-box" onClick={handleClick}>
      <div className="event-image-container">
        <img src={image} alt={title} className="event-image" />
        <div className="event-title">{title}</div>
      </div>
    </div>
  );
};

export default EventBox;
