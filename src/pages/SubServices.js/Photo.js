// WeddingEvents.js
import React, { useState, useEffect } from 'react';
import weddingImage from '../../assets/images/SubEvents/Weddings/Wedding6.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';


import p1 from "../../assets/images/SubEvents/Coroprate/cop5.jpg"
import p2 from "../../assets/images/SubEvents/Holiday/holiday6.jpg"
import p3 from "../../assets/images/SubEvents/Holiday/holiday7.jpg"
import p4 from "../../assets/images/SubEvents/School/School1.jpg"
import p5 from "../../assets/images/SubEvents/School/School2.jpeg"
import p6 from "../../assets/images/SubEvents/School/School4.webp"
import p7 from "../../assets/images/SubEvents/School/School5.jpg"
import p8 from "../../assets/images/SubEvents/School/School6.webp"
import p9 from "../../assets/images/SubEvents/Weddings/Wedding8.jpg"
import p10 from "../../assets/images/SubEvents/Weddings/Wedding9.jpg"
import p11 from "../../assets/images/SubEvents/Weddings/Wedding10.jpeg"


import EventSection from '../SubEvents/EventSection';

function Photo() {
  const { t } = useTranslation();

  const imageCarouselImages = [p10];
  const imageCarouselText = t("services.photo.header");
  const subHeader = t("services.photo.SubHeader");
  const miniHeaders = [
    t("services.photo.MiniHeader")
  ];
  const imageStackImages = [p2,p3,p1];
  const reverseImageImages = [p5, p6, p7];
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
      imgSrc={p4}
      imageStackImages={imageStackImages}
      reverseImageImages={reverseImageImages}
      parallaxImage={p11}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default Photo;
