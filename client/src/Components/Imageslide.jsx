import React from 'react'
import { useState, useEffect } from "react";
import ban1 from "../images/bann.webp";
import ban2 from "../images/ban1.webp";
import ban3 from "../images/face.webp";
import ban4 from "../images/ban3.webp";

const images = [ban1, ban2, ban3, ban4];

const Imageslide = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }, []);
  
    return (
        <>
      <div className="slider-container">
        <img
          src={images[current]}
          alt="banner"
          className="slider-image"
        />
      </div>
    
    </>
  )
}

export default Imageslide;