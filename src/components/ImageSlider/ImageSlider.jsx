import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";
import Banner1 from "../../assets/Images/banner-1.webp";
import Banner2 from "../../assets/Images/banner-2.webp";

const images = [Banner1, Banner2];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider} id="home">
      <img src={images[currentIndex]} alt="Slider" className={styles.image} />
    </div>
  );
};

export default ImageSlider;
