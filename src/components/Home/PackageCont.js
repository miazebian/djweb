import React from "react";
import { useTranslation } from "react-i18next";
import EventBox from "../Events/EventBox"; // Import the EventBox component
import "../../css/components/Event.css";
import wedding2 from "../../assets/images/SubEvents/Weddings/Wedding7.jpg"
import schoolImage from "../../assets/images/SubEvents/School/School4.webp";
import privateImage from "../../assets/images/SubEvents/Social/Social1.jpg";
import copimage from "../../assets/images/SubEvents/Coroprate/cop6.jpg"
import holiday from "../../assets/images/SubEvents/Holiday/holiday3.jpg"
import birthdayImage from "../../assets/images/SubEvents/Birthdays/birthday2.jpg";
import nightlifeImage from "../../assets/images/SubEvents/Nightlife/night1.jpeg"
import fitnessImage from "../../assets/images/SubEvents/Fitness/fitness4.jpg"
import Carouselbox from "../Carouselbox";

const PackageCont = () => {
  const { t } = useTranslation();

  const handleReload = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <h1>{t("header.packages")}</h1>
      <h3 style={{ fontStyle: "normal", fontWeight: "normal", textAlign:"center" }}>
  {t("packages.description")}
</h3>
      <div className="event-box-container1">
        <Carouselbox
images={[wedding2,schoolImage, privateImage, copimage, holiday, birthdayImage, nightlifeImage, fitnessImage]}          title={t("packages.section1")}
          link="/events"
          onClick={() => handleReload("/events")}
        />
        <Carouselbox
          images={[wedding2]}
          title={t("packages.section2")}
          link="/services"
          onClick={() => handleReload("/services")}
        />
</div>
    </div>
  );
};

export default PackageCont;