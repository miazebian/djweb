import React from "react";
import { useTranslation } from "react-i18next";
import EventBox from "./EventBox"; // Import the EventBox component
import "../../css/components/Event.css";
import wedding2 from "../../assets/images/SubEvents/Weddings/Wedding7.jpg"
import schoolImage from "../../assets/images/SubEvents/School/School4.webp";
import privateImage from "../../assets/images/SubEvents/Social/Social1.jpg";
import copimage from "../../assets/images/SubEvents/Coroprate/cop6.jpg"
import holiday from "../../assets/images/SubEvents/Holiday/holiday3.jpg"
import birthdayImage from "../../assets/images/SubEvents/Birthdays/birthday2.jpg";
import nightlifeImage from "../../assets/images/SubEvents/Nightlife/night1.jpeg"
import fitnessImage from "../../assets/images/SubEvents/Fitness/fitness4.jpg"


import dj from "../../assets/images/lightup.jpg"

const ServicesMain = () => {
  const { t } = useTranslation();

  const handleReload = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <h1>{t("services.servicesmain.header")}</h1>
      <h3 style={{ fontStyle: "normal", fontWeight: "normal"}}>
      {t("services.servicesmain.description")}</h3>
      <h4 style={{ fontStyle: "normal", fontWeight: "normal", paddingBottom:"2%" }}>
      {t("services.servicesmain.desc2")}</h4>      
      <div className="event-box-container">
        <EventBox
          image={dj}
          title={t("services.servicesmain.options.dj")}
          link="/events"
          onClick={() => handleReload("/events")}
        />
        <EventBox
          image={privateImage}
          title={t("services.servicesmain.options.venues")}
          link="/venues"
          onClick={() => handleReload("/venues")}
        />
        <EventBox
          image={schoolImage}
          title={t("services.servicesmain.options.catering")}
          link="/catering"
          onClick={() => handleReload("/catering")}
        />
         <EventBox
          image={birthdayImage}
          title={t("services.servicesmain.options.bar")}
          link="/bar"
          onClick={() => handleReload("/bar")}
        />
         <EventBox
          image={copimage}
          title={t("services.servicesmain.options.chairs")}
          link="/chairs"
          onClick={() => handleReload("/chairs")}
        />
         <EventBox
          image={holiday}
          title={t("services.servicesmain.options.tents")}
          link="/tents"
          onClick={() => handleReload("/tents")}
        />
      </div>
    </div>
  );
};

export default ServicesMain;