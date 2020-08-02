import React from "react";
import "./HowItWorks.css";
import Card from "../Howitworks-card/Card";

const HowItWorks = () => (
  <div id="how">
    <div className="container">
      <div className="how-text">
        <h3>How It Works</h3>
        <p>It's quite easy and simple</p>
      </div>

      <img
        src="/Images/img_left_graphic.svg"
        className="how-background"
        alt="circle graphic"
      />

      <div className="how-cards">
        <Card
          image="/Images/icon-one-80.svg"
          title="Browse and Shop"
          paragraph="From thousands of items and brands"
          alt="icon 1"
        />

        <Card
          image="/Images/icon-two-80.svg"
          title="Pick a time"
          paragraph="At your convenience"
          alt="icon 2"
        />

        <Card
          image="/Images/icon-three-80.svg"
          title="Receive your order"
          paragraph="Directly to your doorstep"
          alt="icon 3"
        />
      </div>
    </div>
  </div>
);

export default HowItWorks;
