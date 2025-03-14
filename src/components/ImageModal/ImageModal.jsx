import React from "react";
import styles from "./ImageModal.module.css";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.heading}>
          <h1>Master Plan</h1>
          <FaTimes className={styles.closeIcon} onClick={onClose} />
        </div>
        <img src={image} alt="Floor Plan" className={styles.modalImage} />
      </div>
    </div>
  );
};

export default ImageModal;
