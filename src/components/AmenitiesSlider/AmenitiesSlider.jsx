import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AmenitiesSlider.module.css";
import { FaDownload } from "react-icons/fa";
import Swimming1 from "../../assets/Images/swimming1.webp";
import Childpool1 from "../../assets/Images/childpool1.webp";
import Jogging1 from "../../assets/Images/jogging1.webp";
import Seniorciti1 from "../../assets/Images/seniorciti1.webp";
import multicourt1 from "../../assets/Images/multicourt1.webp";
import gameroom1 from "../../assets/Images/gameroom1.webp";
import gym1 from "../../assets/Images/gym1.webp";
import greenspace1 from "../../assets/Images/greenspace1.webp";
import clubhouse1 from "../../assets/Images/clubhouse1.webp";
import parking1 from "../../assets/Images/parking1.webp";
// import security1 from "../../assets/Images/security1.webp";
import BrochureModal from "../BrochureModal/BrochureModal";

const amenitiesData = [
  { name: "Indoor Pool", image: Swimming1 },
  { name: "Multiple Party Hall", image: Childpool1 },
  { name: "Pool Side Cafe", image: Jogging1 },
  { name: "Pool Side Deck", image: Seniorciti1 },
  { name: "Private Theatre", image: multicourt1 },
  { name: "Private Woods", image: gameroom1 },
  { name: "Gym & Fitness", image: gym1 },
  { name: "Green Space", image: greenspace1 },
  { name: "Clubhouse", image: clubhouse1 },
  { name: "Parking", image: parking1 },
  // { name: "Security", image: security1 },
];

// Function to split data into chunks of 3
const chunkArray = (array, size) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

const groupedAmenities = chunkArray(amenitiesData, 2);

const CustomPrevArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <FaArrowRight />
  </div>
);

const AmenitiesSlider = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = (title, description) => {
    setModalTitle(title);
    setModalDescription(description);
    setShowModal(true);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className={styles.container} id="amenities">
        <div className={styles.sliderContainer}>
          <div>
            <h2 className={styles.mainTitle}>
              <span>Amenities</span>
            </h2>
            <p className={styles.mainSubtitle}>
              Discover a lifestyle enriched with premium amenities and
              facilities
            </p>
          </div>
          <div className={styles.buttonGrp}>
            <button
              className={styles.brochureButton}
              onClick={() =>
                openModal(
                  "Download Amenities",
                  "Download the amenities of Lodha Amara"
                )
              }
            >
              <FaDownload className={styles.downloadIcon} /> Download Amenities
            </button>
          </div>
        </div>
        <div className={styles.subHeading}>
          <h2 className={styles.title}>
            32+ <span>World-Class</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need for a luxurious lifestyle
          </p>
        </div>
        <Slider {...settings} className={styles.slider}>
          {groupedAmenities.map((group, index) => (
            <div key={index} className={styles.amenityRow}>
              {group.map((amenity, i) => (
                <div key={i} className={styles.amenityCard}>
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>{amenity.name}</div>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
      {showModal && (
        <BrochureModal
          onClose={() => setShowModal(false)}
          title={modalTitle}
          description={modalDescription}
        />
      )}
    </>
  );
};

export default AmenitiesSlider;
