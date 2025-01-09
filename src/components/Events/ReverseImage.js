import React from "react";

const ReverseImage = ({images}) => {

  return (
    <div style={{ display: "flex", justifyContent: "center", position: "relative", alignContent:"center",alignItems:'center' }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`image-${index}`}
          style={{

            width:"22vw",
             height:"20vw",
             position: "absolute",
          //   top:`${index!==1?15:0}vw`,
           //  left: `${index===0?0:(index)*15}vw`, // adjust overlap distance
 
           top:`${index===1?15:index===0?5:20}vw`,
            left:`${index===0?12:index===1?-2:35}vw`,

         //   width: "300px", // adjust size as needed
         //   height:"300px",
         //   top:`${index===1?100:index===0?-100:70}px`,
           // left:`${index===0?240:index===1?-80:550}px`,
            zIndex: index === 1 ? 0 : 2, // ensures the middle image is on top
            transition: "left 0.3s", // smooth transition if needed
            borderRadius:20,
          }}
        />
      ))}
    </div>
  );
};

export default ReverseImage;
