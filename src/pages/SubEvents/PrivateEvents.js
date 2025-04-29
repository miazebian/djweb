// PrivateEvents.js
import React, { useState, useEffect } from 'react';
import PrivateImage from '../../assets/images/PrivateEvent.jpg';
import VideoWed from "../../assets/videos/WeddingVideo.mp4";
import { useTranslation } from 'react-i18next';
import EventSection from './EventSection';

import MainImage from '../../assets/images/SubEvents/Social/Social2.jpg'
import social1 from "../../assets/images/SubEvents/Social/social4.jpg"
import social2 from "../../assets/images/SubEvents/Social/Social1.jpg";
import social3 from "../../assets/images/SubEvents/Social/Social2.jpg";

import VideoSocial from '../../assets/videos/video1.mp4'

function PrivateEvents() {
  const { t } = useTranslation();

  const imageCarouselImages = [MainImage];
  const imageCarouselText = t("events.privateEvent.header");
  const subHeader = t("events.privateEvent.SubHeader");
  const miniHeaders = [
    t("events.privateEvent.MiniHeader")
  ];
  const imageStackImages = [social1, social2, social3];
  const parallaxImage = PrivateImage;
  const parallaxHeaderText = t("about.Image.header")
  const parallaxButtonText = t("about.Image.buttonText");
  const parallaxNavText = "/contact";

  return (
    <EventSection
      imageCarouselImages={imageCarouselImages}
      imageCarouselText={imageCarouselText}
      subHeader={subHeader}
      miniHeaders={miniHeaders}
      videoSrc={VideoSocial}
      imageStackImages={imageStackImages}
      parallaxImage={parallaxImage}
      parallaxHeaderText={parallaxHeaderText}
      parallaxButtonText={parallaxButtonText}
      parallaxNavText={parallaxNavText}
    />
  );
}

export default PrivateEvents;
