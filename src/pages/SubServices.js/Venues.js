// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';

import v1 from "../../assets/images/SubServices/Venues/v1.jpg";
import v2 from "../../assets/images/SubServices/Venues/v2.jpg";
import v3 from "../../assets/images/SubServices/Venues/v3.jpg";
import v4 from "../../assets/images/SubServices/Venues/v4.jpeg";
import v5 from "../../assets/images/SubServices/Venues/v5.jpg";
import v6 from "../../assets/images/SubServices/Venues/v6.jpg";
import v7 from "../../assets/images/SubServices/Venues/v7.jpg";
import v8 from "../../assets/images/SubServices/Venues/v8.jpg";
import v9 from "../../assets/images/SubServices/Venues/v9.jpg";
import v10 from "../../assets/images/SubServices/Venues/v10.jpg";
import v11 from "../../assets/images/SubServices/Venues/v11.jpg";
import v12 from "../../assets/images/SubServices/Venues/v12.jpg";
import v13 from "../../assets/images/SubServices/Venues/v13.jpg";


import EventSection from '../SubEvents/EventSection';

function Venues() {
  const { t } = useTranslation();

  const imageCarouselImages = [v7];
  const imageCarouselText = t("services.venues.header");
  const subHeader = t("services.venues.SubHeader");
  const miniHeaders = [
    t("services.venues.MiniHeader")
  ];
  const imageStackImages = [v12,v9,v3];
  const reverseImageImages = [v4, v5, v13];
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
      imgSrc={v11}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={v1}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Venues;
