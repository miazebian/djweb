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

const EventMain = () => {
  const { t } = useTranslation();

  const handleReload = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <h1>{t("events.title")}</h1>
      <div className="event-box-container">
        <EventBox
          image={wedding2}
          title={t("events.wedding")}
          link="/wedding"
          onClick={() => handleReload("/wedding")}
        />
        <EventBox
          image={privateImage}
          title={t("events.private")}
          link="/private"
          onClick={() => handleReload("/private")}
        />
        <EventBox
          image={schoolImage}
          title={t("events.school")}
          link="/school"
          onClick={() => handleReload("/school")}
        />
         <EventBox
          image={birthdayImage}
          title={t("events.birthdays")}
          link="/birthday"
          onClick={() => handleReload("/birthday")}
        />
         <EventBox
          image={copimage}
          title={t("events.corporate")}
          link="/cop"
          onClick={() => handleReload("/cop")}
        />
         <EventBox
          image={holiday}
          title={t("events.holiday")}
          link="/holiday"
          onClick={() => handleReload("/holiday")}
        />
         <EventBox
          image={nightlifeImage}
          title={t("events.nightlife")}
          link="/nightlife"
          onClick={() => handleReload("/nightlife")}
        />
         <EventBox
          image={fitnessImage}
          title={t("events.fitness")}
          link="/fitness"
          onClick={() => handleReload("/fitness")}
        />
      </div>
    </div>
  );
};

export default EventMain;