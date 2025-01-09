// SchoolEvent.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EventSection from './EventSection';

import night1 from "../../assets/images/SubEvents/Nightlife/night1.jpeg"
import night2 from "../../assets/images/SubEvents/Nightlife/night2.jpg"
import night3 from "../../assets/images/SubEvents/Nightlife/night3.jpg"


function NightlifeEvents() {
  const { t } = useTranslation();

  const imageCarouselImages = [night1];
  const imageCarouselText = t("events.nightlifeevents.header");
  const subHeader = t("events.nightlifeevents.SubHeader");
  const miniHeaders = [t("events.nightlifeevents.MiniHeader1"),
    t("events.nightlifeevents.MiniHeader2"),
    t("events.nightlifeevents.MiniHeader3"),
    t("events.nightlifeevents.MiniHeader4")]; // can add more miniHeaders if needed
  const imgSrc = night2;
  const parallaxImage = night3;
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
      parallaxImage={parallaxImage}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default NightlifeEvents;
