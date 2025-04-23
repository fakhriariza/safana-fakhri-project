import "./style.css";
import InfoCard from "./TimeCard";
import "animate.css";
import React, { useEffect, useRef } from "react";
import MusicPlayer from "./MusicPlayer";

class MyComponent extends React.Component {
  getNameFromURL() {
    const path = window.location.pathname;
    const nameFromPath = path.slice(1); // Removes the leading '/'
    return decodeURIComponent(nameFromPath.replace(/\+/g, " "));
  }

  render() {
    const name = this.getNameFromURL();

    return (
      <div className="app-container">
        <MusicPlayer />
        <div className="top-background animate__animated animate__fadeInDown animate__slower" />

        <div className="content animate__animated animate__fadeIn animate__slower animate__delay-4s">
          <p>Kepada Yth.</p>
          <h4>{name}</h4>
          <p>Anda diundang untuk menghadiri</p>
          <h1>Lamaran</h1>
          <div className="name">
            <h3>
              Safana Salsabila
              <br></br>Wicaksono
            </h3>
            <p className="and">&</p>
            <h3>
              Muhammad Fakhri <br></br>Dwi Ariza
            </h3>
            <InfoCard />
          </div>
        </div>

        <div className="bottom-background animate__animated animate__fadeInUp animate__slower" />
      </div>
    );
  }
}

export default MyComponent;
