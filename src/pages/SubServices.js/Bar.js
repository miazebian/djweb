// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';
import EventSection from '../SubEvents/EventSection';


import b1 from "../../assets/images/SubServices/bar/b1.jpg";
import b2 from "../../assets/images/SubServices/bar/b2.jpg";
import b3 from "../../assets/images/SubServices/bar/b3.jpg";
import b4 from "../../assets/images/SubServices/bar/b4.jpg";
import b5 from "../../assets/images/SubServices/bar/b5.avif";
import b6 from "../../assets/images/SubServices/bar/b6.jpg";
import b7 from "../../assets/images/SubServices/bar/b7.webp";

function Bar() {
  const { t } = useTranslation();

  const imageCarouselImages = [b1];
  const imageCarouselText = t("services.bar.header");
  const subHeader = t("services.bar.SubHeader");
  const miniHeaders = [
    t("services.bar.MiniHeader")
  ];
  const videoSrc = VideoWed;
  const imageStackImages = [b3,b4,b7];
  const parallaxHeaderText = t("services.parallax");
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";

  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
    //  videoSrc={videoSrc}
      imgSrc={b6}
      imageStackImages={imageStackImages}
      parallaxImage={b2}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Bar;
