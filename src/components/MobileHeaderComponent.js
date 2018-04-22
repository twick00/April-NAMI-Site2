import React, { Component } from "react";
import image from "../images/IMG_9042.jpg";

function MobileHeaderComponent(props) {
  const styles = {
    backgroundImage: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderBottom: "1px solid #D9D9D9",
      display: "grid",
      gridTemplateRows: "1fr 1fr 1fr 1fr",
      width: "100%",
      positon: "relative",
      zIndex: "-2"
    },
    overlayText: {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      margin: "auto",
      alignText: "center",
      fontSize: "40px",
      color: "white",
      textShadow: "4px 3px black",
      zIndex: "-1",
      width: "80%"
    },
    introTextContainer: {
      height: "100vh",
      alignText: "center",
      background: "linear-gradient(#D9D9D9, #3897d8)",
      zIndex: "1",
      margin: "0px",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "3fr 2fr 2fr 3fr"
    },
    introText: {
      marginLeft: "20vw",
      marginRight: "20vw"
    }
  };
  return (
    <div>
      <div>
        <div id="mobile-image-container" style={styles.backgroundImage}>
          <h1 id="header-message" style={styles.overlayText}>
            Bryan Is My Hero
          </h1>
        </div>
      </div>
      <div style={styles.introTextContainer} id="mobile-intro">
        <p />
        <h3 style={styles.introText}>
          Bryan is my hero,<br /> and we need your help.
        </h3>
        <h3 style={styles.introText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          quibusdam, doloribus error placeat aspernatur dolores in qui iusto.
        </h3>
      </div>
    </div>
  );
}

export default MobileHeaderComponent;
