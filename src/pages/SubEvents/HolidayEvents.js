// SchoolEvent.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import EventSection from './EventSection';
import holiday1 from "../../assets/images/SubEvents/Holiday/holiday1.jpg"
import holiday2 from "../../assets/images/SubEvents/Holiday/holiday2.webp"
import holiday3 from "../../assets/images/SubEvents/Holiday/holiday3.jpg"
import holiday4 from "../../assets/images/SubEvents/Holiday/holiday4.jpg"
import holiday5 from "../../assets/images/SubEvents/Holiday/holiday5.jpg"
import holiday6 from "../../assets/images/SubEvents/Holiday/holiday6.jpg"
import holiday7 from "../../assets/images/SubEvents/Holiday/holiday7.jpg"
import holiday8 from "../../assets/images/SubEvents/Holiday/holiday8.avif"
import holiday9 from "../../assets/images/SubEvents/Holiday/holiday9.jpg"
import holiday10 from "../../assets/images/SubEvents/Holiday/holiday10.jpg"


function HolidayEvents() {
  const { t } = useTranslation();

  const imageCarouselImages = [holiday2];
  const imageCarouselText = t("events.holidayEvents.header");
  const subHeader = t("events.holidayEvents.SubHeader");
  const miniHeaders = [t("events.holidayEvents.MiniHeader1"),
    t("events.holidayEvents.MiniHeader2")]; // can add more miniHeaders if needed
  const imgSrc = holiday10;
  const imageStackImages = [holiday1, holiday5, holiday4];
  const reverseImageImages = [holiday6, holiday8, holiday9];
  const parallaxImage = holiday7;
  const parallaxHeaderText = t("about.Image.header");
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";



  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
      imgSrc={imgSrc}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={parallaxImage}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default HolidayEvents;
