import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import NavBar from "./components/NavbarComponent";
import MobileHeaderComponent from "./components/MobileHeaderComponent";
import MobileBodyComponent from "./components/MobileBodyComponent";
import Media from "react-media";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }
  render() {
    return (
      <div className="App">
        <Media query="(max-width: 1023px)">
          {matches =>
            matches ? (
              <React.Fragment>
                <NavBar />
                <MobileHeaderComponent />
                <a name="connect">
                  <hr />
                </a>
                <MobileBodyComponent />
              </React.Fragment>
            ) : (
              <div className="desktop">Not Yet Available</div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default App;
