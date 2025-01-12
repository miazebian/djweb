// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';

import EventSection from '../SubEvents/EventSection';

import c1 from "../../assets/images/SubServices/cartering/c1.webp"
import c2 from "../../assets/images/SubServices/cartering/c2.jpg"
import c3 from "../../assets/images/SubServices/cartering/c3.avif";
import c4 from "../../assets/images/SubServices/cartering/c4.jpg";
import c5 from "../../assets/images/SubServices/cartering/c5.jpg";
import c6 from "../../assets/images/SubServices/cartering/c6.jpg";
import c7 from "../../assets/images/SubServices/cartering/c7.210";
import c8 from "../../assets/images/SubServices/cartering/c8.jpg";
import c9 from "../../assets/images/SubServices/cartering/c9.avif";
import c10 from "../../assets/images/SubServices/cartering/c10.jpeg";


function Catering() {
  const { t } = useTranslation();

  const imageCarouselImages = [c6];
  const imageCarouselText = t("services.catering.header");
  const subHeader = t("services.catering.SubHeader");
  const miniHeaders = [
    t("services.catering.MiniHeader")
  ];
  const imageStackImages = [c1,c2,c3];
  const reverseImageImages = [c4, c5, c9];
  const parallaxHeaderText = t("services.parallax");
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";

  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
     // videoSrc={videoSrc}
      imgSrc={c5}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={c10}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Catering;
