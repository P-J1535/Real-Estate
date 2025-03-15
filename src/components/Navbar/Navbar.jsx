import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  FaHome,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  MdOutlineArchitecture,
  MdPhotoLibrary,
  MdVideoLibrary,
} from "react-icons/md";
import NavLogo from "../../assets/Images/logo.svg";
import { Download } from "lucide-react";
import BrochureModal from "../BrochureModal/BrochureModal";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Download Brochure",
    description: "Download the brochure to learn more about Lodha Amara",
  });
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  const handleModalOpen = (title, description) => {
    setModalContent({ title, description });
    setShowModal(true);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={NavLogo} alt="Logo" />

          <ul
            className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
          >
            <li>
              <a
                className={activeSection === "home" ? styles.activeLink : ""}
                onClick={() => scrollToSection("home")}
              >
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a
                className={
                  activeSection === "priceFactor" ? styles.activeLink : ""
                }
                onClick={() => scrollToSection("priceFactor")}
              >
                <FaRupeeSign /> Price
              </a>
            </li>
            <li>
              <a
                className={
                  activeSection === "floorplan" ? styles.activeLink : ""
                }
                onClick={() => scrollToSection("floorplan")}
              >
                <GridViewOutlinedIcon sx={{ fontSize: "15px" }} /> Site & Floor
                Plan
              </a>
            </li>
            <li>
              <a
                className={
                  activeSection === "amenities" ? styles.activeLink : ""
                }
                onClick={() => scrollToSection("amenities")}
              >
                <WifiOutlinedIcon sx={{ fontSize: "15px" }} /> Amenities
              </a>
            </li>
            <li>
              <a
                className={activeSection === "gallery" ? styles.activeLink : ""}
                onClick={() => scrollToSection("gallery")}
              >
                <MdPhotoLibrary /> Gallery
              </a>
            </li>
            <li>
              <a
                className={
                  activeSection === "location" ? styles.activeLink : ""
                }
                onClick={() => scrollToSection("location")}
              >
                <FaMapMarkerAlt /> Location
              </a>
            </li>
            <li>
              <a
                className={
                  activeSection === "virtualSite" ? styles.activeLink : ""
                }
                onClick={() => scrollToSection("virtualSite")}
              >
                <VideocamOutlinedIcon sx={{ fontSize: "20px" }} /> Virtual Site
                Visit
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.something}>
          <button
            className={styles.downloadBtn}
            onClick={() =>
              handleModalOpen(
                "Download Brochure",
                "Download the brochure to learn more about Lodha Amara"
              )
            }
          >
            <span>
              <Download size={16} className={styles.icon} />
              Download Brochure
            </span>
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Modal Rendering */}
      {showModal && (
        <BrochureModal
          title={modalContent.title}
          description={modalContent.description}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Navbar;
