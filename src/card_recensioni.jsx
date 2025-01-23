import React from "react";
import recensioni from "./array_recensioni";

const CardRecensioni = ({ recensioni }) => {
  return (
    <div>
      <h2>gli ospiti</h2>
      <p>recensioni e affidabilità</p>
      <div className="reviews-grid">
        {recensioni.map((recensione, index) => (
          <div key={index} className="review-card">
            <h3>{recensione.name}</h3>
            {recensione.location && <p>{recensione.location}</p>}
            {recensione.time_on_boolbnb && <p>{recensione.time_on_boolbnb}</p>}
            <p>Rating: {recensione.rating}</p>
            <p>{recensione.time_ago}</p>
            <p>{recensione.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRecensioni;
