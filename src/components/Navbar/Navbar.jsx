import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  FaHome,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section on URL change
  useEffect(() => {
    const sectionId = location.pathname.substring(1); // Remove "/"
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.pathname]);

  const handleNavigation = (id) => {
    navigate(`/${id}`); // Updates URL
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
                className={
                  location.pathname === "/home" ? styles.activeLink : ""
                }
                onClick={() => handleNavigation("home")}
              >
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/priceFactor" ? styles.activeLink : ""
                }
                onClick={() => handleNavigation("priceFactor")}
              >
                <FaRupeeSign /> Price
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/floorplan" ? styles.activeLink : ""
                }
                onClick={() => handleNavigation("floorplan")}
              >
                <GridViewOutlinedIcon sx={{ fontSize: "15px" }} /> Site & Floor
                Plan
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/amenities" ? styles.activeLink : ""
                }
                onClick={() => handleNavigation("amenities")}
              >
                <WifiOutlinedIcon sx={{ fontSize: "15px" }} /> Amenities
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/gallery" ? styles.activeLink : ""
                }
                onClick={() => handleNavigation("gallery")}
              >
                <MdPhotoLibrary /> Gallery
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/location" ? styles.activeLink : ""
                }
                onClick={() => handleNavigation("location")}
              >
                <FaMapMarkerAlt /> Location
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === "/virtualSite" ? styles.activeLink : ""
                }
                onClick={() => handleNavigation("virtualSite")}
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
