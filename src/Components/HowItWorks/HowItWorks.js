import React from "react";
import "./HowItWorks.css";
import Card from "../Howitworks-card/Card";

const HowItWorks = () => (
  <div id="how">
    <div className="container">
      <div className="how-text">
        <h3>How It Works</h3>
        <p>It's quite easy</p>
      </div>

      <div className="how-cards">
        <Card
          image="/Images/icon-one-80.svg"
          title="dfhjbsdfhhf"
          paragraph="jbfbjdfhfh"
          alt="icon 1"
        />

        <Card
          image="/Images/icon-two-80.svg"
          title="dfhjbsdfhhf"
          paragraph="jbfbjdfhfh"
          alt="icon 1"
        />

        <Card
          image="/Images/icon-two-80.svg"
          title="dfhjbsdfhhf"
          paragraph="jbfbjdfhfh"
          alt="icon 1"
        />
      </div>
    </div>
  </div>
);

export default HowItWorks;
