// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';

import t1 from "../../assets/images/SubServices/Tents/t1.jpg";
import t2 from "../../assets/images/SubServices/Tents/t2.jpg";
import t3 from "../../assets/images/SubServices/Tents/t3.jpg";
import t4 from "../../assets/images/SubServices/Tents/t4.jpg";
import t5 from "../../assets/images/SubServices/Tents/t5.jpg";
import t6 from "../../assets/images/SubServices/Tents/t6.jpg";
import t7 from "../../assets/images/SubServices/Tents/t7.jpg";
import t8 from "../../assets/images/SubServices/Tents/t8.jpg";
import t9 from "../../assets/images/SubServices/Tents/t9.jpg";
import t10 from "../../assets/images/SubServices/Tents/t10.jpg";
import t11 from "../../assets/images/SubServices/Tents/t11.jpg";


import EventSection from '../SubEvents/EventSection';

function Photo() {
  const { t } = useTranslation();

  const imageCarouselImages = [t10];
  const imageCarouselText = t("services.photo.header");
  const subHeader = t("services.photo.SubHeader");
  const miniHeaders = [
    t("services.photo.MiniHeader")
  ];
  const imageStackImages = [t1,t2,t6];
  const reverseImageImages = [t7, t3, t11];
  const parallaxHeaderText = t("services.parallax");
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";

  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
  //    videoSrc={videoSrc}
      imgSrc={t5}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={t8}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Photo;
