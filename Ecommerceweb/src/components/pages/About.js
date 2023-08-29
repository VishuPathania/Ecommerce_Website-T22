import React from "react";
import Image1 from "../../image/ecomerce.jpg";
import "../../App.css";

const About = () => {
  return (
    <section>
      <div className="generic-section">
        <h1>The Generics</h1>
      </div>
      <h2
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "70px",
          fontStyle: "italic",
          fontFamily: "Ink Free",
        }}
      >
        About
      </h2>
      <div>
        <div>
          {" "}
          <div style={{ textAlign: "center" }}>
            {" "}
            <img src={Image1} style={{ width: "40%" }} />
          </div>
        </div>
        <p className="a">
          "Welcome to our demo music concert website! We are a passionate
          community dedicated to the art of music and live performances. Our
          platform serves as a virtual stage, connecting both emerging talents
          and established artists, and curating a diverse range of musical
          experiences. Founded by music enthusiasts, our mission is to foster
          creativity and authenticity, offering a space where artists thrive and
          audiences discover their next favorites. Beyond performances, we
          provide insights into artists, genres, and trends, harmonizing
          technology and artistry for a truly immersive musical journey. Join us
          at "DemoMusicConcert" and be a part of this symphonic adventure!"
        </p>
      </div>
    </section>
  );
};

export default About;
