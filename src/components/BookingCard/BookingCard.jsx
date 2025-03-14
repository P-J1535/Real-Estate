import React, { useState } from "react";
import styles from "./BookingCard.module.css";
import BrochureModal from "../BrochureModal/BrochureModal";

const BookingCard = () => {
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
      <div className={styles.card}>
        <div className={styles.header}>
          <span>Early Bird Offer: Limited Time Only</span>
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Sheth Vasant Lawns</h2>
          <p className={styles.subtitle}>At Thane by Sheth Developers</p>

          <div className={styles.info}>
            <div>
              <strong>Land Parcel</strong>
              <p>7 Acres</p>
            </div>
            <div>
              <strong>Floors</strong>
              <p> 2B + G + 32 Storeys</p>
            </div>
            <div>
              <strong>Possession</strong>
              <p> June 2026</p>
            </div>
          </div>

          <div className={styles.offerBox}>
            <ul className={styles.bulletList}>
              <li> Price Rise By 4Lacs After Month End</li>
              <li> Pay Just 10% Now</li>
              <li> ₹10,000 Monthly For Next 2 Years</li>
            </ul>
          </div>
          <h6 className={styles.underline}></h6>
          <p className={styles.priceInfo}>
            Luxurious 2 & 3 BHK Starts from
            <br />
            <span className={styles.price}>₹ 1.55 Cr</span> Onwards
          </p>

          <button
            className={styles.siteVisitButton}
            onClick={() =>
              openModal(
                "Book A Free Site Visit",
                "Schedule at your convenience"
              )
            }
          >
            Book A Free Site Visit
          </button>
        </div>
      </div>

      {/* Modal Rendering */}
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

export default BookingCard;
