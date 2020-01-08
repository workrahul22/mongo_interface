import React, { Component } from "react";
import logo from "../images/mon.png";
export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          backgroundImage: `url(${logo})`
        }}
      >
        <nav
          style={{ height: "100px" }}
          class="navbar navbar-expand-sm purple-gradient"
        ></nav>
        {/* <img
          style={{
            position: "relative",
            height: window.innerHeight,
            width: "100%"
          }}
          src={logo}
        /> */}
        <div class="container">
          <div class="pmd-intro-container d-flex row justify-content-start">
            <div style={{ left: "150px" }} class="align-self-center col-lg-6">
              <p
                style={{ color: "white" }}
                class="lead mb-0 pmd-text-before-line-dark"
              >
                Want new way to Access Your Database?
              </p>
              <h1
                style={{ color: "white" }}
                class="pb-3 text-uppercase pmd-display4"
              >
                Come to us <br></br>
                And Connect Now
              </h1>
              <button
                style={{ color: "white" }}
                class="btn btn-outline-light pmd-ripple-effect"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
