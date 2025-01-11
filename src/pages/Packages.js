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


const Packages = () => {


  return (
    <div>
<ImageCarousel images={[wedding2,schoolImage, privateImage, copimage, holiday, birthdayImage, nightlifeImage, fitnessImage]} text="packages.packagecont.header" />
<div style={{paddingLeft:"3%",paddingRight:"3%",paddingBottom:"3%"}}>
<PackageCont/>
</div>
</div>
  );
};

export default Packages;
