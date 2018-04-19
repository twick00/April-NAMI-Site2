import React, { Component } from "react";
import image from "../images/IMG_9042.jpg";

class MobileHeaderComponent extends Component {
  constructor() {
    super();
    this.styles = {
      backgroundImage: {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottom: "3px solid black",
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr 1fr"
      },
      overlayText: {
        zIndex: "1",
        positon: "sticky",
        top: "50vh",
        margin: "auto",
        alignText: "center",
        fontSize: "50px",
        color: "white",
        textShadow: "4px 3px black"
      },
      introText: {
        height: "100vh",
        alignText: "center"
      }
    };
  }
  render() {
    return (
      <div>
        <div id="mobile-image-container" style={this.styles.backgroundImage}>
          <h1 style={this.styles.overlayText}>Bryan Is My Hero</h1>
        </div>
        <div id="mobile-intro">
          <h3>Test</h3>
        </div>
      </div>
    );
  }
}

export default MobileHeaderComponent;
