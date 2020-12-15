import React, { Component } from "react";
import SeasonDisplay from "./seasonDisplay";
import "./App.css";

class App extends Component {
  state = {
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    const { lat, errorMessage } = this.state;
    if (errorMessage && !lat) {
      return (
        <div className="container-fluid" id="main">
          <h1 className="text-center mt-5">Error</h1>
          <h3 className="fw-bold text-center mt-5">
            <span style={{ color: "#CA2E55" }}>{errorMessage}</span>
          </h3>
        </div>
      );
    }
    if (!errorMessage && lat) {
      return (
        <>
          <SeasonDisplay lat={lat} />
        </>
      );
    }
    return (
      <div className="text-center" style={{ marginTop: "15%" }}>
        <div
          className="spinner-border"
          style={{ width: "15rem", height: "15rem" }}
          role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="mt-3">
          <strong className="fs-1">Loading...</strong>
        </div>
      </div>
    );
  }
}

export default App;
