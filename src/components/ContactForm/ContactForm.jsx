import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./ContactForm.module.css";
import SiteVisitImg from "../../assets/Images/ride.webp";
import BrochureModal from "../BrochureModal/BrochureModal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = (title, description) => {
    setModalTitle(title);
    setModalDescription(description);
    setShowModal(true);
  };

  const sendMail = async () => {
    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    try {
      const response = await fetch(
        "https://formsubmit.co/jepalpratham@gmail.com",
        {
          method: "POST",
          body: formdata,
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully!");

        setName("");
        setEmail("");
        setPhone("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get The Best Quote</h2>

        <div className={styles.callUsBox}>
          <FaPhoneAlt className={styles.callIcon} />
          <div className={styles.callUsText}>
            <p className={styles.callUs}>Call Us</p>
            <p className={styles.phone}>+91 2248905671</p>
          </div>
        </div>

        <input
          type="text"
          placeholder="Enter your name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <PhoneInput
          country={"in"} // Default India
          value={phone}
          onChange={(value) => setPhone(value)}
          inputClass={styles.phoneInput}
          className={styles.phoneInputContainer}
        />

        <input
          type="email"
          placeholder="Enter your email (optional)"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className={styles.submitButton} onClick={sendMail}>
          Submit
        </button>

        <div className={styles.siteVisitBox}>
          <img
            src={SiteVisitImg}
            alt="Book Free Site Visit"
            className={styles.siteVisitImage}
          />
          <div className={styles.siteVisiteText}>
            <p className={styles.siteVisitTitle}>Book A Free Site Visit</p>
            <p className={styles.siteVisitSubtitle}>
              Schedule at your convenience
            </p>
          </div>
        </div>

        <button
          className={styles.bookVisitButton}
          onClick={() =>
            openModal("Book A Free Site Visit", "Schedule at your convenience")
          }
        >
          Book Free Site Visit
        </button>
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

export default ContactForm;
