import React, { useState } from "react";
import styles from "./PriceComponent.module.css";
import { FaDownload } from "react-icons/fa";
import Costing from "../../assets/Images/costing.webp";
import BrochureModal from "../BrochureModal/BrochureModal";

const PriceComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = (title, description) => {
    setModalTitle(title);
    setModalDescription(description);
    setShowModal(true);
  };

  // Pricing Static Data use
  const pricingData = [
    {
      type: "2 BHK",
      area: "840 Sq.ft.",
      price: "₹  1.55 Cr Onwards",
      tower: "Fern",
    },
    {
      type: "3 BHK",
      area: "1120 Sq.ft.",
      price: "₹ 2.07 Cr Onwards",
      tower: "Fern",
    },
    {
      type: "3 BHK",
      area: "1060 Sq.ft.",
      price: "₹ 2.60 Cr Onwards",
      tower: "Glade",
    },
  ];

  const fullDescription = `
    Experience the elegance of Sheth Vasant Lawns in Thane, where you can live in unimaginable luxury! The lavish residential complex houses the dazzling tower - Fern. Its 2, 3, and 4 BHK stylish apartments bestow plush interiors and beautiful views of the majestic Yeoor Hills. Here - your lifestyle is enriched as you stroll amid the open spaces and green lawns and enjoy memorable experiences with more than 40 lifestyle amenities.

Based right at the Eastern Express Highway - Vasant lawns opens up the posh, bustling locale of the Thane Platinum Belt to you. Here, you get access to the top schools, healthcare, shopping malls, and commute routes. In fact, Viviana Mall, Jupiter Hospital, and Singhania School are all within 5 minutes of the property. With an urban-green cityscape at your doors - you can enjoy the ethereal views of the night cityscape yet hear the lovely calls of nature nearby.
  `;

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={styles.container} id="priceFactor">
        <section className={styles.headerSection}>
          <h1 className={styles.title}>
            <span>Welcome</span> To Sheth Vasant Lawns
          </h1>

          <p className={styles.description}>
            {expanded
              ? fullDescription
              : `${fullDescription.substring(0, 600)}...`}
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={styles.readMoreButton}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
            <button
              className={styles.brochureButton}
              onClick={() =>
                openModal(
                  "Download Brochure",
                  "Download the brochure to learn more about Lodha Amara."
                )
              }
            >
              <FaDownload className={styles.downloadIcon} /> Download Brochure
            </button>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>
            <span>Pricing</span> Plans
          </h2>
          <p className={styles.pricingDescription}>
            Choose from our range of luxurious 2, 3 & 4 BHK residences, each
            designed to offer the perfect blend of comfort and sophistication.
          </p>

          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Carpet Area</th>
                <th>Price</th>
                <th>Tower</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.area}</td>

                  <td>{item.price}</td>
                  <td>{item.tower}</td>
                  <td>
                    <button
                      className={styles.priceBreakupButton}
                      onClick={() =>
                        openModal(
                          "Price Breakup",
                          "Request complete pricing information."
                        )
                      }
                    >
                      Price Breakup
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Costing Details */}
        <section className={styles.costingSection}>
          <div className={styles.imagePlaceholder}>
            <img src={Costing} alt="costing" className={styles.animatedImage} />
          </div>
          <div className={styles.costingContent}>
            <h3>Need Complete Costing Details?</h3>
            <p>
              Download our detailed cost breakdown including all charges and
              payment plans.
            </p>
            <button
              className={styles.getDetailsButton}
              onClick={() =>
                openModal(
                  "Get Price Details",
                  "Request complete pricing information"
                )
              }
            >
              Get Price Details
            </button>
          </div>
        </section>
      </div>
      {/* Modal render*/}
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

export default PriceComponent;
