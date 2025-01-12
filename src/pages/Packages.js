import React from "react";
import ImageCarousel from '../components/Events/ImageCarousel'; // Adjust the path

import EventMain from '../components/Events/EventMain'


import wedding2 from "../assets/images/SubEvents/Weddings/Wedding7.jpg";
import schoolImage from "../assets/images/SubEvents/School/School4.webp";
import privateImage from "../assets/images/SubEvents/Social/Social1.jpg";
import copimage from "../assets/images/SubEvents/Coroprate/cop6.jpg"
import holiday from "../assets/images/SubEvents/Holiday/holiday3.jpg"
import birthdayImage from "../assets/images/SubEvents/Birthdays/birthday2.jpg";
import nightlifeImage from "../assets/images/SubEvents/Nightlife/night1.jpeg"
import fitnessImage from "../assets/images/SubEvents/Fitness/fitness4.jpg"
import PackageCont from "../components/Home/PackageCont";
import chairsimage from "../assets/images/SubServices/Chairs&Tables/pic1.jpg";
import tentsimage from "../assets/images/SubServices/Tents/t8.jpg";
import venuesimage from "../assets/images/SubServices/Venues/v6.jpg";
import dj from "../assets/images/lightup.jpg"
import barimage from "../assets/images/SubServices/bar/b5.avif";
import cateringimage from "../assets/images/SubServices/cartering/c10.jpeg";
import v8 from "../assets/images/SubServices/Venues/v8.jpg";

const Packages = () => {


  return (
    <div>
<ImageCarousel 

images={[
  fitnessImage,
  v8,
  nightlifeImage,
  cateringimage,
  birthdayImage,
  barimage,
  holiday,
  venuesimage,
  copimage,
  dj,
  privateImage,
  chairsimage,
  schoolImage,
  tentsimage,
  wedding2  
]}
text="packages.packagecont.header" />
<div style={{paddingLeft:"3%",paddingRight:"3%",paddingBottom:"3%"}}>
<PackageCont/>
</div>
</div>
  );
};

export default Packages;
