// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';


import pic1 from "../../assets/images/SubServices/Chairs&Tables/pic1.jpg";
import pic2 from "../../assets/images/SubServices/Chairs&Tables/pic2.jpg";
import pic3 from "../../assets/images/SubServices/Chairs&Tables/pic3.jpg";
import pic4 from "../../assets/images/SubServices/Chairs&Tables/pic4.jpg";
import pic5 from "../../assets/images/SubServices/Chairs&Tables/pic5.jpg";
import pic6 from "../../assets/images/SubServices/Chairs&Tables/pic6.jpg";
import pic7 from "../../assets/images/SubServices/Chairs&Tables/pic7.jpg";
import pic8 from "../../assets/images/SubServices/Chairs&Tables/pic8.jpg";
import pic9 from "../../assets/images/SubServices/Chairs&Tables/pic9.jpg";
import pic10 from "../../assets/images/SubServices/Chairs&Tables/pic10.avif";
import pic11 from "../../assets/images/SubServices/Chairs&Tables/pic11.avif";
import pic12 from "../../assets/images/SubServices/Chairs&Tables/pic12.avif";

import EventSection from '../SubEvents/EventSection';

function Chairs() {
  const { t } = useTranslation();

  const imageCarouselImages = [pic9];
  const imageCarouselText = t("services.chairs.header");
  const subHeader = t("services.chairs.SubHeader");
  const miniHeaders = [
    t("services.chairs.MiniHeader")
  ];
  const imageStackImages = [pic10,pic11,pic5];
  const reverseImageImages = [pic6, pic7, pic8];
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
      imgSrc={pic2}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={pic12}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Chairs;
