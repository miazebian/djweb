// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';


import fp1 from "../../assets/images/SubServices/FacePainting/fp1.jpeg";
import fp2 from "../../assets/images/SubServices/FacePainting/fp2.webp";
import fp3 from "../../assets/images/SubServices/FacePainting/fp3.jpg";
import fp4 from "../../assets/images/SubServices/FacePainting/fp4.jpg";
import fp5 from "../../assets/images/SubServices/FacePainting/fp5.jpg";
import fp6 from "../../assets/images/SubServices/FacePainting/fp6jpg.jpg";
import fp7 from "../../assets/images/SubServices/FacePainting/fp7.jpg";
import fp8 from "../../assets/images/SubServices/FacePainting/fp8..jpg";
import fp9 from "../../assets/images/SubServices/FacePainting/fp9.webp";
import fp10 from "../../assets/images/SubServices/FacePainting/fp10.jpg";

import EventSection from '../SubEvents/EventSection';

function Painting() {
  const { t } = useTranslation();

  const imageCarouselImages = [fp2];
  const imageCarouselText = t("services.painting.header");
  const subHeader = t("services.painting.SubHeader");
  const miniHeaders = [
    t("services.painting.MiniHeader")
  ];
  const imageStackImages = [fp4,fp5,fp6];
  const reverseImageImages = [fp7, fp10, fp9];
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
      imgSrc={fp3}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={fp8}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Painting;
