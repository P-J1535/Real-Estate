import React, { useState } from "react";
import styles from "./VirtualTour.module.css";
import { Button, Grid, Typography, Card, CardContent } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import TourImage from "../../assets/Images/Gallery1.webp";
import BrochureModal from "../BrochureModal/BrochureModal";

const VirtualTour = () => {
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
      <div className={styles.container} id="virtualSite">
        <Typography variant="h4" className={styles.title}>
          Virtual Tour Request
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Experience Lodha Amara from the comfort of your home
        </Typography>

        <div className={styles.videoContainer}>
          <img
            src={TourImage}
            alt="Virtual Tour"
            className={styles.videoThumbnail}
          />
          <div className={styles.overlayText}>
            <Button
              className={styles.playButton}
              onClick={() =>
                openModal(
                  "Request Virtual Tour",
                  "Schedule at your convenience"
                )
              }
            >
              <PlayCircleOutlineIcon
                fontSize="large"
                className={styles.playIcon}
              />
            </Button>
            <p className={styles.videoText}>VIRTUAL SITE VISIT</p>
            <p variant="body2" className={styles.videoSubText}>
              Sheth Vasant Lawns
            </p>
          </div>
        </div>

        <Grid container spacing={2} className={styles.features}>
          <Grid item xs={12} sm={4}>
            <Card className={styles.featureCard}>
              <CardContent>
                <p variant="h6" className={styles.featureTitle}>
                  360° Views
                </p>
                <p variant="body2" className={styles.featureText}>
                  Explore every corner of our property in detail
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.featureCard}>
              <CardContent>
                <p variant="h6" className={styles.featureTitle}>
                  Live Interaction
                </p>
                <p variant="body2" className={styles.featureText}>
                  Real-time guidance from our property experts
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.featureCard}>
              <CardContent>
                <p variant="h6" className={styles.featureTitle}>
                  Flexible Timing
                </p>
                <p variant="body2" className={styles.featureText}>
                  Schedule your tour at your convenience
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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

export default VirtualTour;
