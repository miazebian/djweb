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



import chairsimage from "../../assets/images/SubServices/Chairs&Tables/pic1.jpg";
import tentsimage from "../../assets/images/SubServices/Tents/t8.jpg";
import venuesimage from "../../assets/images/SubServices/Venues/v6.jpg";
import dj from "../../assets/images/lightup.jpg"
import barimage from "../../assets/images/SubServices/bar/b5.avif";
import cateringimage from "../../assets/images/SubServices/cartering/c10.jpeg";
import limoimage from "../../assets/images/SubServices/limos&buses/LB13.png"
import facepaingtingimage from "../../assets/images/SubServices/FacePainting/fp1.jpeg";
import p9 from "../../assets/images/SubEvents/Weddings/Wedding8.jpg"

const PackageCont = () => {
  const { t } = useTranslation();

  const handleReload = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <h1>{t("header.packages")}</h1>
      <h3 style={{ fontStyle: "normal", fontWeight: "normal", textAlign:"center",paddingBottom:"1%" }}>
  {t("packages.description")}
</h3>
      <div className="event-box-container1">
        <Carouselbox
images={[wedding2,schoolImage, privateImage, p9,copimage, holiday, birthdayImage, nightlifeImage, limoimage,fitnessImage, facepaingtingimage]}          title={t("packages.section1")}
          link="/events"
          onClick={() => handleReload("/events")}
        />
        <Carouselbox
          images={[chairsimage,tentsimage,dj,venuesimage,barimage,cateringimage]}
          title={t("packages.section2")}
          link="/services"
          onClick={() => handleReload("/services")}
        />
</div>
    </div>
  );
};

export default PackageCont;