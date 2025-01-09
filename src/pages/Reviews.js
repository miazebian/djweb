import React from "react";
import { useTranslation } from "react-i18next";
import "../css/pages/Reviews.css"; // cCreate a CSS file for styling
import ReviewList from "../components/ReviewList";
import StaticImage from "../components/StaticImage";
import aboutimage from '../assets/images/ReviewImage.jpg';
import Feed from "./Feed.js";
import celebrateimage from "../assets/images/SubEvents/Weddings/Wedding1jpg.jpg";
import ParallaxSection from "../components/Home/ParallaxSection.js";


const Reviews = () => {
  const { t } = useTranslation();
  const reviews = t('reviews.reviews', { returnObjects: true }); // Assuming reviews are stored as an array in 'reviews'

  return (
    <div>
      <StaticImage imageSrc={aboutimage} text={"WHAT THE PEOPLE ARE SAYING"}/>
    <div className="main-review">
    <ReviewList reviews={reviews} />
    </div>
    <div className="arrow-down2"></div> {/* The downward arrow */}
    <ParallaxSection
          image={celebrateimage}
          headerText={t("about.Image.header")}
          buttonText={t("about.Image.buttonText")}
          NavText="/contact"
        />
<Feed/>
    </div>
  );
};

export default Reviews;
