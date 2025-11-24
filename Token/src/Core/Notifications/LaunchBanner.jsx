import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/LaunchBanner.module.css";
const LaunchBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Coomingsoon");
  };

  return (
      <div   style={styles.container} onClick={handleClick}>
        <h1 style={styles.title}>LAUNCHING SOON! UP TO <span style={styles.highlight}>10% REFERRAL BONUS </span></h1>
      </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "40px",
    textAlign: "center",
    color: "#090A0E",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "transform 0.2s",
    backgroundColor: "rgba(245, 249, 255, 1)",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "2px",
    lineheight: "100%",
  },
  highlight: {
    fontWeight: "bold",
  },
};

export default LaunchBanner;