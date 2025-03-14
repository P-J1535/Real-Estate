import React, { useState } from "react";
import styles from "./SiteFloorPlan.module.css";
import { FaEye } from "react-icons/fa";
import MasterPlan from "../../assets/Images/master-plan.webp";
import Floor1 from "../../assets/Images/floor-1.webp";
import Floor2 from "../../assets/Images/floor-2.webp";
import Floor3 from "../../assets/Images/floor-3.webp";
import Floor4 from "../../assets/Images/floor-4.webp";
import ImageModal from "../ImageModal/ImageModal"; // Import new modal

const floorPlans = [
  { type: "1 BHK", size: "446 Sq.ft", image: Floor1 },
  { type: "2 BHK", size: "618 Sq.ft", image: Floor2 },
  { type: "2 BHK", size: "722 Sq.ft", image: Floor3 },
  { type: "3 BHK", size: "965 Sq.ft", image: Floor4 },
];

const SiteFloorPlan = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const filteredPlans =
    selectedType === "All"
      ? floorPlans
      : floorPlans.filter((plan) => plan.type === selectedType);

  const openImageModal = (image) => {
    setModalImage(image);
    setShowImageModal(true);
  };

  return (
    <>
      <div className={styles.container} id="floorplan">
        <h2 className={styles.title}>
          <span>Site &</span> Floor Plan of Sheth Vasant Lawns
        </h2>
        <p className={styles.subtitle}>
          Explore our thoughtfully designed layouts that maximize space and
          comfort.
        </p>

        {/* Master Plan Section */}
        <h2 className={styles.titleHeading}>Master Plan</h2>
        <div
          className={styles.masterPlan}
          onClick={() => openImageModal(MasterPlan)}
        >
          <img
            src={MasterPlan}
            alt="Master Plan"
            className={styles.masterImage}
          />
          <div className={styles.masterOverlay}>
            <p className={styles.overlayText}>
              <FaEye /> View Master Plan
            </p>
          </div>
        </div>

        {/* Floor Plan Filter */}
        <div className={styles.FilterContainer}>
          <p className={styles.title}>Floor Plan</p>
          <div className={styles.filters}>
            {["All", "1 BHK", "2 BHK", "3 BHK"].map((type) => (
              <button
                key={type}
                className={`${styles.filterButton} ${
                  selectedType === type ? styles.activeFilter : ""
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Floor Plans Grid */}
        <div className={styles.floorPlans}>
          {filteredPlans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <div className={styles.planImageWrapper}>
                <img
                  src={plan.image}
                  alt={plan.type}
                  className={styles.planImage}
                />
                <div className={styles.planOverlay}>
                  <button
                    className={styles.enquireButton}
                    onClick={() => openImageModal(plan.image)}
                  >
                    <FaEye /> Enquire Now
                  </button>
                </div>
              </div>
              <p className={styles.planType}>
                {plan.type} {plan.size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <ImageModal
          image={modalImage}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </>
  );
};

export default SiteFloorPlan;
