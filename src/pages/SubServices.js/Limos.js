// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';

import l1 from "../../assets/images/SubServices/limos&buses/LB1.png"
import l2 from "../../assets/images/SubServices/limos&buses/LB2.jpeg"
import l3 from "../../assets/images/SubServices/limos&buses/LB3.jpg";
import l4 from "../../assets/images/SubServices/limos&buses/LB4.jpg";
import l5 from "../../assets/images/SubServices/limos&buses/LB5.jpg";
import l6 from "../../assets/images/SubServices/limos&buses/LB6.jpeg";
import l7 from "../../assets/images/SubServices/limos&buses/LB7.jpg";
import l8 from "../../assets/images/SubServices/limos&buses/LB8.jpg";
import l9 from "../../assets/images/SubServices/limos&buses/LB9.jpeg";
import l10 from "../../assets/images/SubServices/limos&buses/LB10.jpeg";
import l11 from "../../assets/images/SubServices/limos&buses/LB11.jpg";
import l12 from "../../assets/images/SubServices/limos&buses/LB12.jpg";
import l13 from "../../assets/images/SubServices/limos&buses/LB13.png";
import l14 from "../../assets/images/SubServices/limos&buses/LB14.jpg";

import EventSection from '../SubEvents/EventSection';

function Limos() {
  const { t } = useTranslation();

  const imageCarouselImages = [l12];
  const imageCarouselText = t("services.limos.header");
  const subHeader = t("services.limos.SubHeader");
  const miniHeaders = [
    t("services.limos.MiniHeader")
  ];
  const imageStackImages = [l9,l6,l3];
  const reverseImageImages = [l4, l5, l1];
  const imageStackImages2=[l7,l8,l2];
  const parallaxHeaderText = t("services.parallax");
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";

  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
      imageStackImages2={imageStackImages2}
  //    videoSrc={videoSrc}
      imgSrc={l14}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={l13}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Limos;
