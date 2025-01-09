import React from "react";
import { useTranslation } from "react-i18next";
import aboutimage from '../assets/images/AboutUsImage.jpg';
import StaticImage from "../components/StaticImage";
import AboutUs from "../components/AboutUs";
import Owner from "../assets/images/AboutUsOwner.jpeg"
import "../css/components/AboutUs.css"
import ParallaxSection from "../components/Home/ParallaxSection";
import celebrateimage from '../assets/images/SubEvents/Weddings/Wedding1jpg.jpg'

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <StaticImage imageSrc={aboutimage} text="about.aboutUs.header" />
      <AboutUs
        imageUrl={Owner}
        headerText={t("about.aboutUs.header2")}
  paragraphText={t("about.aboutUs.paragraph")}
   boldText={t("about.aboutUs.boldText")}
      />
          <div className="arrow-down1"></div> {/* The downward arrow */}
 
          <ParallaxSection
  image={celebrateimage}
  headerText={t("about.Image.header")}
  buttonText={t("about.Image.buttonText")}
  NavText="/contact"
/>


    </div>
  );
};

export default About;
