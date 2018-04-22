import React, { Component } from "react";

function NavBar(props) {
  const styles = {
    navContainer: {
      position: "fixed",
      backgroundColor: "#d4e0de",
      borderBottom: "1px solid black",
      opacity: "0.6",
      width: "100%",
      height: "50px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      zIndex: "1"
    },
    navText: {
      margin: "auto",
      textDecoration: "none",
      fontSize: "26px",
      color: "black"
    }
  };
  return (
    <div id="mobile-nav" style={styles.navContainer}>
      <a style={styles.navText} href="#connect">
        Connect
      </a>
      <a style={styles.navText} href="/">
        Support
      </a>
      <a style={styles.navText} href="/">
        Learn
      </a>
    </div>
  );
}

export default NavBar;
