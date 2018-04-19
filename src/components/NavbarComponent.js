import React, { Component } from "react";

class NavBar extends Component {
  constructor() {
    super();
    this.styles = {
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
  }
  render() {
    return (
      <div id="mobile-nav" style={this.styles.navContainer}>
        <a style={this.styles.navText} href="/">
          Connect
        </a>
        <a style={this.styles.navText} href="/">
          Support
        </a>
        <a style={this.styles.navText} href="/">
          Learn
        </a>
      </div>
    );
  }
}

export default NavBar;
