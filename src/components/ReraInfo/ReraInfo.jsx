import React from "react";
import styles from "./ReraInfo.module.css";
import QRCode1 from "../../assets/Images/qrcode_vasantlawns.webp";

const ReraInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>About Sheth Developers</h2>
        <p className={styles.description}>
          Founded in 1987, Ashwin Sheth Group specialises in developing modern
          residential complexes, luxury addresses, shopping malls, and
          commercial workspaces. The firm's properties are majestic landmarks
          that stand out for their elegant design, lovely landscaping, and
          state-of-the-art amenities. With a legacy of 3 decades, the company
          has developed a range of properties across the Western Suburbs,
          Mulund, Thane, and South Mumbai.
        </p>

        <h3 className={styles.subTitle}>RERA Information</h3>
        <div className={styles.qrContainer}>
          <div className={styles.qrBox}>
            <img
              src={QRCode1}
              alt={`RERA QR Code`}
              className={styles.qrImage}
            />
            <p className={styles.reraNumber}>Rera No: P51700003655</p>
          </div>
        </div>

        <div className={styles.legalSection}>
          <h3 className={styles.subTitle}>Legal Information</h3>
          <ul>
            <li>Project Registered under Government of India RERA Act 2016</li>
            <li>Government RERA-Authorized Advertiser</li>
            <li>RERA Project Registration No: P51700021684</li>
          </ul>
        </div>

        <div className={styles.disclaimer}>
          <h4>Disclaimer</h4>
          <p>
            We are an authorised marketing partner for this project. Provided
            content is given by respective owners and this website and content
            is for information purpose only and it does not constitute any offer
            to avail for any services. Prices mentioned are subject to change
            without prior notice and properties mentioned are subject to
            availability. You can expect a call, SMS or emails on details
            registered with us.
          </p>
        </div>
      </div>
      <div className={styles.copyRIght}>
        <p>
          © Copyright |{" "}
          <span>Terms & Conditions | Privacy Policy | Cookies Policy</span>
        </p>
      </div>
    </>
  );
};

export default ReraInfo;
