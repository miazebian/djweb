// SchoolEvent.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import schoolImage from '../../assets/images/SchoolEventjpg.jpg';
import Wedding1 from '../../assets/images/SubEvents/Weddings/Wedding1jpg.jpg';
import Wedding2 from '../../assets/images/SubEvents/Weddings/Wedding7.webp';
import Wedding3 from '../../assets/images/SubEvents/Weddings/Wedding3.jpg';
import Wedding4 from '../../assets/images/SubEvents/Weddings/Wedding4.webp';
import Wedding5 from '../../assets/images/SubEvents/Weddings/Wedding5jpg.jpg';
import Wedding6 from '../../assets/images/SubEvents/Weddings/Wedding6.jpeg';
import EventSection from './EventSection';
import fitness1 from "../../assets/images/SubEvents/Fitness/fitness1.webp"
import fitness2 from "../../assets/images/SubEvents/Fitness/fitness2.jpg"
import fitness3 from "../../assets/images/SubEvents/Fitness/fitness3.jpg"


function FitnessEvents() {
  const { t } = useTranslation();

  const imageCarouselImages = [fitness3];
  const imageCarouselText = t("events.fitnessEvents.header");
  const subHeader = t("events.fitnessEvents.SubHeader");
  const miniHeaders = [t("events.fitnessEvents.MiniHeader")]; // can add more miniHeaders if needed
  const imgSrc = fitness2;
  const parallaxImage = fitness1;
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

export default FitnessEvents;
