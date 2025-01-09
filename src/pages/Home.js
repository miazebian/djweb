import React from "react";
import { useTranslation } from "react-i18next";
import Main from "../components/Main.js";
import About from "./About.js";
import EventMain from "../components/Events/EventMain.js";
import Above from "../components/Home/Above.js";
import "../App.css";
import ParallaxSection from "../components/Home/ParallaxSection.js";
import image from "../assets/images/PrivateEvent.jpg";
import Footer from "../components/Home/Footer.js";
import FooterBig from "../components/Home/FooterBig.js";
import AboutUs from "../components/AboutUs.js";
import celebrateimage from "../assets/images/SubEvents/Weddings/Wedding1jpg.jpg";
import HighlightImage from "../components/Home/HighlightImage.js";
import Reviews from "./Reviews.js";
import Feed from "./Feed.js";
import aboutimage from "../assets/images/AboutHome.jpeg"
import social from "../assets/images/lightup.jpg"
import ReviewList from "../components/ReviewList.js";

const Home = () => {
  const { t } = useTranslation();
  const reviews = t('reviews.reviews', { returnObjects: true }).slice(0, 6);

  return (
    <div>
      <div style={{ backgroundColor: "white" }}>
        <div>
          <Main />
        </div>
        <div style={{ padding: "3%", paddingTop: "3%" }}>
          <EventMain />
        </div>
        <Above />

        <div className="arrow-down"></div> {/* The downward arrow */}
     
      </div>
      <ParallaxSection
        image={image}
        headerText={t("parallel.headerText")}
        paragraphText={t("parallel.paragraphText")}
        buttonText={t("parallel.buttonText")}
        NavText="/reviews"
      />
      <div style={{ backgroundColor: "white" }}>
        <AboutUs
          imageUrl={aboutimage}
          headerText={t("about.home.header")}
          paragraphText={t("about.home.paragraphText")}
          boldText={t("about.home.boldText")}
          showButton={true}
        />
      </div>
      <HighlightImage imageSrc={social} altText="lightup" />
      <div className="main-review2">

      <ReviewList reviews={reviews} />
      </div>
      <div className="arrow-down"></div> {/* The downward arrow */}
      <div>
        <ParallaxSection
          image={celebrateimage}
          headerText={t("about.Image.header")}
          buttonText={t("about.Image.buttonText")}
          NavText="/contact"
        />
<Feed/>
      </div>
    </div>
  );
};

export default Home;
