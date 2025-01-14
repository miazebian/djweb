import React from "react";
import ImageCarousel from '../components/Events/ImageCarousel'; // Adjust the path
import ServicesMain from "../components/Events/ServicesMain";





import chairsimage from "../assets/images/SubServices/Chairs&Tables/pic1.jpg";
import tentsimage from "../assets/images/SubServices/Tents/t8.jpg";
import venuesimage from "../assets/images/SubServices/Venues/v6.jpg";
import dj from "../assets/images/lightup.jpg"
import barimage from "../assets/images/SubServices/bar/b5.avif";
import cateringimage from "../assets/images/SubServices/cartering/c10.jpeg";
import limoimage from "../assets/images/SubServices/limos&buses/LB13.png"
import facepaingtingimage from "../assets/images/SubServices/FacePainting/fp1.jpeg";
import p9 from "../assets/images/SubEvents/Weddings/Wedding8.jpg"

const Events = () => {


  return (
    <div>
<ImageCarousel images={[chairsimage,p9,tentsimage,dj,venuesimage,barimage,cateringimage,limoimage, facepaingtingimage]} text="services.header" />
<div style={{paddingLeft:"3%",paddingRight:"3%",paddingBottom:"3%"}}>
<ServicesMain/>
</div>
</div>
  );
};

export default Events;
