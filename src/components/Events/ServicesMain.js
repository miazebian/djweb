import React from "react";
import { useTranslation } from "react-i18next";
import EventBox from "./EventBox"; // Import the EventBox component
import "../../css/components/Event.css";

import cateringimage from "../../assets/images/SubServices/cartering/c10.jpeg";
import chairsimage from "../../assets/images/SubServices/Chairs&Tables/pic1.jpg";
import tentsimage from "../../assets/images/SubServices/Tents/t8.jpg";
import venuesimage from "../../assets/images/SubServices/Venues/v6.jpg";
import dj from "../../assets/images/lightup.jpg"
import barimage from "../../assets/images/SubServices/bar/b5.avif";
import limoimage from "../../assets/images/SubServices/limos&buses/LB13.png"
import facepaingtingimage from "../../assets/images/SubServices/FacePainting/fp1.jpeg";
import p9 from "../../assets/images/SubEvents/Weddings/Wedding8.jpg"


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
          image={cateringimage}
          title={t("services.servicesmain.options.catering")}
          link="/catering"
          onClick={() => handleReload("/catering")}
        />
          <EventBox
          image={p9}
          title={t("services.servicesmain.options.photo")}          
          link="/photo"
          onClick={() => handleReload("/photo")}
        />
        <EventBox
          image={venuesimage}
          title={t("services.servicesmain.options.venues")}
          link="/venues"
          onClick={() => handleReload("/venues")}
        />
       
        
         <EventBox
          image={chairsimage}
          title={t("services.servicesmain.options.chairs")}
          link="/chairs"
          onClick={() => handleReload("/chairs")}
        />
         <EventBox
          image={tentsimage}
          title={t("services.servicesmain.options.tents")}
          link="/tents"
          onClick={() => handleReload("/tents")}
        />
 <EventBox
          image={barimage}
          title={t("services.servicesmain.options.bar")}
          link="/bar"
          onClick={() => handleReload("/bar")}
        />
         <EventBox
          image={limoimage}
          title={t("services.servicesmain.options.limo")}          
          link="/limos"
          onClick={() => handleReload("/limos")}
        />
        
<EventBox
          image={facepaingtingimage}
          title={t("services.servicesmain.options.painting")}          
          link="/painting"
          onClick={() => handleReload("/painting")}
        />
       

      </div>
    </div>
  );
};

export default ServicesMain;