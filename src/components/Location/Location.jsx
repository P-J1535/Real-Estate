import React, { useState } from "react";
import styles from "./Location.module.css";
import LocationImg from "../../assets/Images/map.webp";
import { LocationOn } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BrochureModal from "../BrochureModal/BrochureModal";

const Location = () => {
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
      <div className={styles.container} id="location">
        <h2 className={styles.title}>Address of Sheth Vasant Lawns</h2>
        <p className={styles.subtitle}>
          Strategically located for your convenience
        </p>

        <div className={styles.locationWrapper}>
          <div className={styles.mapView}>
            <h2>Map View</h2>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.604635223777!2d72.97213787498097!3d19.21246328202033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9412e66b20d%3A0x36c7e21ac72b6c03!2sPampas%20Vasant%20Lawns!5e0!3m2!1sen!2sin!4v1741886809229!5m2!1sen!2sin"
              className={styles.map}
            ></iframe>
            {/* <button className={styles.directionsButton}>
            <LocationOn className={styles.icon} /> Get Directions
          </button> */}
          </div>

          <div className={styles.locationDetails}>
            <h2>Location Details</h2>
            <div className={styles.imageWrapper}>
              <img
                src={LocationImg}
                alt="Location Details"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <button
                  className={styles.locationButton}
                  onClick={() =>
                    openModal(
                      "Get Location",
                      "Get detailed information about this location"
                    )
                  }
                >
                  <LocationOn className={styles.icon} /> Get Location
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.landmarks}>
          <h3>Nearby Landmarks</h3>
          <ul className={styles.landmarkList}>
            <div className={styles.firstRow}>
              <li>
                <LocationOnOutlinedIcon className={styles.landmarkIcon} />
                <p>
                  Thane Railway Station <span>18 min</span>
                </p>
              </li>
              <li>
                <LocationOnOutlinedIcon className={styles.landmarkIcon} />
                <p>
                  Eastern Express Highway <span>2 Mins</span>
                </p>
              </li>
            </div>
            <div className={styles.firstRow}>
              <li>
                <LocationOnOutlinedIcon className={styles.landmarkIcon} />
                <p>
                  Viviana Mall <span>4 Mins</span>
                </p>
              </li>
              <li>
                <LocationOnOutlinedIcon className={styles.landmarkIcon} />
                <p>
                  Jupiter Hospital <span>5 Mins</span>
                </p>
              </li>
            </div>
            <div className={styles.firstRow}>
              <li>
                <LocationOnOutlinedIcon className={styles.landmarkIcon} />
                <p>
                  Cadbury Junction <span>8 Mins</span>
                </p>
              </li>
              <li>
                <LocationOnOutlinedIcon className={styles.landmarkIcon} />
                <p>
                  Singhania School <span>6 Mins</span>
                </p>
              </li>
            </div>
          </ul>
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

export default Location;
