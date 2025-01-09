// SchoolEvent.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EventSection from './EventSection';

import birthday1 from "../../assets/images/SubEvents/Birthdays/birthday1.webp";
import birthday2 from "../../assets/images/SubEvents/Birthdays/birthday2.jpg";
import birthday3 from "../../assets/images/SubEvents/Birthdays/birthday3.webp";
import birthday4 from "../../assets/images/SubEvents/Birthdays/birthday4.jpg";
import birthday5 from "../../assets/images/SubEvents/Birthdays/birthday5.avif";
import birthday6 from "../../assets/images/SubEvents/Birthdays/birthday6.jpg";
import birthday7 from "../../assets/images/SubEvents/Birthdays/birthday7.jpg";




function BirthdayEvents() {
  const { t } = useTranslation();

  const imageCarouselImages = [birthday1];
  const imageCarouselText = t("events.birthdayEvents.header");
  const subHeader = t("events.birthdayEvents.SubHeader");
  const miniHeaders = [t("events.birthdayEvents.MiniHeader1"),
    t("events.birthdayEvents.MiniHeader2"),
    t("events.birthdayEvents.MiniHeader3"),
    t("events.birthdayEvents.MiniHeader4")]; // can add more miniHeaders if needed
  const imgSrc = birthday4;
  const imageStackImages = [birthday3,birthday5, birthday6];
  const parallaxImage = birthday2;
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
      parallaxImage={parallaxImage}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default BirthdayEvents;
