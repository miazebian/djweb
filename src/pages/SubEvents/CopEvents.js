// SchoolEvent.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import EventSection from './EventSection';

import cop1 from "../../assets/images/SubEvents/Coroprate/cop1.webp";
import cop2 from "../../assets/images/SubEvents/Coroprate/cop2.jpg";
import cop3 from "../../assets/images/SubEvents/Coroprate/cop3.jpg";
import cop4 from "../../assets/images/SubEvents/Coroprate/cop4.jpeg";
import cop5 from "../../assets/images/SubEvents/Coroprate/cop5.jpg";
import cop6 from "../../assets/images/SubEvents/Coroprate/cop6.jpg";
import cop7 from "../../assets/images/SubEvents/Coroprate/cop7.jpg";
import cop8 from "../../assets/images/SubEvents/Coroprate/cop8.png";
import copvideo from "../../assets/videos/copvideo.mp4"

function CopEvents() {
  const { t } = useTranslation();

  const imageCarouselImages = [cop1];
  const imageCarouselText = t("events.corporateEvents.header");
  const subHeader = t("events.corporateEvents.SubHeader");
  const miniHeaders = [t("events.corporateEvents.MiniHeader")]; // can add more miniHeaders if needed
  const imgSrc = cop7;
  const imageStackImages = [cop2, cop3, cop4];
  const parallaxImage = cop5;
  const parallaxHeaderText = t("about.Image.header");
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";



  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
      videoSrc={copvideo}
      imageStackImages={imageStackImages}
      parallaxImage={parallaxImage}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default CopEvents;
