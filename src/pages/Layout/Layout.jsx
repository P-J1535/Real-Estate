import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from "./Layout.module.css"
import Navbar from '../../components/Navbar/Navbar';

const Layout = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Navbar />
      
      <div 
        className={`${styles.arrowContainer} ${showScroll ? styles.show : ''}`} 
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Layout;