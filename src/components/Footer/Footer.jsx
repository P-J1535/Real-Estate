import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import NavLogo from "../../assets/Images/logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.companyInfo}>
          <img src={NavLogo} alt="Company Logo" className={styles.logo} />
          <p className={styles.address}>
            4B / 49 4th Floor, Highland Corporate Centre, High Street Mall,
            Junction, above Big Bazaar, Samata Nagar, Kapurbawdi, Thane West,
            Thane, Maharashtra 400607
          </p>
        </div>

        {/* Navigation Links */}
        <div className={styles.quickLinks}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="#" className={styles.link}>
                About Us
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="#" className={styles.link}>
                Services
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.socialMedia}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <p className={styles.contactDetails}>contact@mycompany.com</p>
          <p className={styles.contactDetails}>+1 234 567 890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © Copyright |{" "}
          <span>Terms & Conditions | Privacy Policy | Cookies Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
