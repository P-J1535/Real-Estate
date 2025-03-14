import React, { useState } from "react";
import styles from "./BrochureModal.module.css";
import { FaPhoneAlt, FaCarAlt, FaRupeeSign, FaTimes } from "react-icons/fa";
import NavLogo from "../../assets/Images/logo.svg";
import PhoneInput from "react-phone-input-2";

const BrochureModal = ({ onClose, title, description }) => {
  const [phone, setPhone] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.leftSide}>
          <img src={NavLogo} alt="Lodha" className={styles.image} />
          <div className={styles.textBlock}>
            <h2>We Promise</h2>
            <div className={styles.menu}>
              <FaPhoneAlt className={styles.icon} />
              <div>
                <p>Instant Call Back</p>
                <p>Get a call from our experts</p>
              </div>
            </div>
            <div className={styles.menu}>
              <FaCarAlt className={styles.icon} />
              <div>
                <p>Free Site Visit</p>
                <p>Schedule at your convenience</p>
              </div>
            </div>
            <div className={styles.menu}>
              <FaRupeeSign className={styles.icon} />
              <div>
                <p>Unmatched Price</p>
                <p>Best offers guaranteed</p>
              </div>
            </div>
            <p className={styles.callUs}>
              Call Us: <br />
              <strong>+91 2248905671</strong>
            </p>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.closeIcon1}>
            <FaTimes className={styles.closeIcon} onClick={onClose} />
          </div>
          <h2>{title}</h2>
          <p>{description}</p>

          <div className={styles.textBlockMobile}>
            <div className={styles.menuMobile}>
              <FaPhoneAlt className={styles.iconMobile} />
              <div>
                <p className={styles.textDisplayMobile}>Instant Call Back</p>
              </div>
            </div>
            <div className={styles.menuMobile}>
              <FaCarAlt className={styles.iconMobile} />
              <div>
                <p className={styles.textDisplayMobile}>Free Site Visit</p>
              </div>
            </div>
            <div className={styles.menuMobile}>
              <FaRupeeSign className={styles.iconMobile} />
              <div>
                <p className={styles.textDisplayMobile}>Unmatched Price</p>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
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
            />

            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputClass={styles.phoneInput}
              className={styles.phoneInputContainer}
            />

            <input
              type="email"
              placeholder="Enter your email (optional)"
              className={styles.input}
            />

            <button className={styles.submitButton}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;
