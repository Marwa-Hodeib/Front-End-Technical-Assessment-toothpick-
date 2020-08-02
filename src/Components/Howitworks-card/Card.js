import React from "react";
import "./Card.css";

const Card = (props) => (
  <div class="card-container">
    <div class="card-image">
      <img src={props.image} alt={props.alt} />
    </div>
    <div class="card-info">
      <h4>{props.title}</h4>
      <p>{props.paragraph}</p>
    </div>
  </div>
);

export default Card;
