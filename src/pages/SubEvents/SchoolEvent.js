// SchoolEvent.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import schoolImage from '../../assets/images/SchoolEventjpg.jpg';
import school1 from "../../assets/images/SubEvents/School/School1.jpg";
import school2 from "../../assets/images/SubEvents/School/School2.jpeg";
import school3 from "../../assets/images/SubEvents/School/School3.jpg";
import school4 from "../../assets/images/SubEvents/School/School4.webp";
import school5 from "../../assets/images/SubEvents/School/School5.jpg";
import school6 from "../../assets/images/SubEvents/School/School6.webp";
import VideoSocial from '../../assets/videos/SocialVideo.mp4'

import EventSection from './EventSection';

function SchoolEvent() {
  const { t } = useTranslation();

  const imageCarouselImages = [school2];
  const imageCarouselText = t("events.schoolEvent.header");
  const subHeader = t("events.schoolEvent.SubHeader");
  const miniHeaders = [t("events.schoolEvent.MiniHeader")]; // can add more miniHeaders if needed
  const imageStackImages = [schoolImage, school3, school5];
  const parallaxImage = school6;
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

export default SchoolEvent;
