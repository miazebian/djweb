// WeddingEventComponent.js
import React from 'react';
import ImageStack from '../../components/Events/ImageStack';
import ReverseImage from '../../components/Events/ReverseImage';
import ImageCarousel from "../../components/Events/ImageCarousel";
import Above2 from '../../components/Events/Above2';
import ParallaxSection from '../../components/Home/ParallaxSection';
import Feed from '../Feed';
import "../../css/pages/SubEvents.css";

function EventSection({
  imageCarouselImages,
  imageCarouselText,
  subHeader,
  miniHeaders,
  videoSrc,
  imgSrc,
  imageStackImages,
  reverseImageImages,
  parallaxImage,
  parallaxHeaderText,
  parallaxParagraphText,
  parallaxButtonText,
  parallaxNavText,
}) {
  return (
    <div className="wedding-events-container">
      <ImageCarousel images={imageCarouselImages} text={imageCarouselText} />
      
      {/* SubHeader and MiniHeaders */}
      <div className="event-header">
        <div className="text-container">
          <h2 className="Subheader">{subHeader}</h2>
          {miniHeaders.map((miniHeader, index) => (
            <p className="Miniheader" key={index}>{miniHeader}</p>
          ))}
        </div>

        {/* Video or Image */}
        <div className="video-container-event">
          {videoSrc ? (
            <video
              className="wedding-video"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img src={imgSrc} alt="Image" className="wedding-video" />
          )}
        </div>
      </div>

      {(imageStackImages!==null &&imageStackImages!==undefined)?


      (reverseImageImages!==null &&reverseImageImages!==undefined)?

      <div className="centered-images-container">
        <div className="image-stack-container">
          <ImageStack images={imageStackImages} />
        </div>

        <div className="reverse-image-container">
          <ReverseImage images={reverseImageImages} />
        </div>
      </div>
      :
<div style={{alignContent:"center",alignItems:"center",alignSelf:"center",justifyContent:"center",display:'flex',width:"50%",paddingTop:"5%"}}>
<div className="image-stack-container">
          <ImageStack images={imageStackImages} />
        </div>   
        </div>   :""}
      
      <Above2 />

      <div className="arrow-down"></div> {/* The downward arrow */}

      <ParallaxSection
        image={parallaxImage}
        headerText={parallaxHeaderText}
        paragraphText={parallaxParagraphText}
        buttonText={parallaxButtonText}
        NavText={parallaxNavText}
      />
      <Feed />
    </div>
  );
}

export default EventSection;
