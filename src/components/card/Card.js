import React from "react";

const Card = ({ name, img, weight }) => {
  return (
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">weight: {weight}</p>
      </div>
    </div>
  );
};

export default Card;
