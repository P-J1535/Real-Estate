import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { FaDownload } from "react-icons/fa";
import Gallery1 from "../../assets/Images/Gallery1.webp";
import Gallery2 from "../../assets/Images/Gallery2.webp";
import Gallery3 from "../../assets/Images/Gallery3.webp";
import Gallery4 from "../../assets/Images/Gallery4.webp";
import BrochureModal from "../BrochureModal/BrochureModal";

const galleryImages = [
  { src: Gallery1, alt: "Gallery Image 1" },
  { src: Gallery2, alt: "Gallery Image 2" },
  { src: Gallery3, alt: "Gallery Image 3" },
  { src: Gallery4, alt: "Gallery Image 4" },
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = (title, description) => {
    setModalTitle(title);
    setModalDescription(description);
    setShowModal(true);
  };
  return (
    <>
      <div className={styles.container} id="gallery">
        <div className={styles.header}>
          <h2 className={styles.title}>Gallery of Sheth Vasant Lawns</h2>
        </div>

        <div className={styles.textButtonContainer}>
          <p className={styles.subtitle}>
            Experience luxury living through our carefully curated spaces
          </p>
          <button
            className={styles.downloadButton}
            onClick={() =>
              openModal(
                "Download Gallery",
                "Download the gallery of Lodha Amara"
              )
            }
          >
            <FaDownload className={styles.downloadIcon} /> Download Gallery
          </button>
        </div>

        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={image.src} alt={image.alt} className={styles.image} />
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
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

export default Gallery;
