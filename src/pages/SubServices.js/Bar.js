// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';
import Wedding1 from '../../assets/images/SubEvents/Weddings/Wedding1jpg.jpg';
import Wedding2 from '../../assets/images/SubEvents/Weddings/Wedding7.webp';
import Wedding3 from '../../assets/images/SubEvents/Weddings/Wedding3.jpg';
import Wedding4 from '../../assets/images/SubEvents/Weddings/Wedding4.webp';
import Wedding9 from '../../assets/images/SubEvents/Weddings/Wedding9.jpg';
import Wedding10 from '../../assets/images/SubEvents/Weddings/Wedding8.jpg';
import Wedding6 from '../../assets/images/SubEvents/Weddings/Wedding6.jpeg';
import Wedding8 from "../../assets/images/SubEvents/Weddings/Wedding7.jpg"
import Wedding11 from "../../assets/images/SubEvents/Weddings/Wedding10.jpeg"

import EventSection from '../SubEvents/EventSection';

function Bar() {
  const { t } = useTranslation();

  const imageCarouselImages = [Wedding11];
  const imageCarouselText = t("services.bar.header");
  const subHeader = t("services.bar.SubHeader");
  const miniHeaders = [
    t("services.bar.MiniHeader")
  ];
  const videoSrc = VideoWed;
  const imageStackImages = [Wedding4,Wedding8,Wedding10];
  const reverseImageImages = [weddingImage, Wedding9, Wedding1];
  const parallaxHeaderText = t("services.parallax");
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";

  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
      videoSrc={videoSrc}
     // imgSrc={Wedding1}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={Wedding1}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Bar;
