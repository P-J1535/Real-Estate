import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ContactForm from "./components/ContactForm/ContactForm";
import styles from "./App.module.css";
import PriceComponent from "./components/PriceComponent/PriceComponent";
import SiteFloorPlan from "./components/SiteFloorPlan/SiteFloorPlan";
import AmenitiesSlider from "./components/AmenitiesSlider/AmenitiesSlider";
import Gallery from "./components/Gallery/Gallery";
import BookingCard from "./components/BookingCard/BookingCard";
import Location from "./components/Location/Location";
import Layout from "./pages/Layout/Layout";
import BrochureModal from "./components/BrochureModal/BrochureModal";
import VirtualTour from "./components/VirtualTour/VirtualTour";
import ReraInfo from "./components/ReraInfo/ReraInfo";
const App = () => {
  return (
    <div className={styles.container}>
      <Layout /> {/* Navbar at the top */}
      <div className={styles.mainContent}>
        <div className={styles.imageSlider}>
          <ImageSlider />
          <BookingCard />
        </div>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
      </div>
      <PriceComponent />
      <SiteFloorPlan />
      <AmenitiesSlider />
      <Gallery />
      <Location />
      <VirtualTour />
      <ReraInfo />
    </div>
  );
};

export default App;
