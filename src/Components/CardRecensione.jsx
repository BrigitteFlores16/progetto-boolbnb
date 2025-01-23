import React from "react";
import recensioniArray from "../array_recensioni";

const CardRecensione = ({ recensioni = recensioniArray }) => {
  const getStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa ${index < rating ? "fa-star" : "fa-star-o"}`}
      ></i>
    ));
  };

  const averageRating =
    recensioni.reduce((acc, recensione) => acc + recensione.voto, 0) /
    recensioni.length;

  let title;
  if (averageRating > 4) {
    title = "Amato dagli ospiti";
  } else if (averageRating >= 2) {
    title = "Apprezzato dagli ospiti";
  } else {
    title = "Da migliorare";
  }

  return (
    <div className="container">
      <h2 className="text-center display-1 fw-bold">
        {averageRating.toFixed(1)}
      </h2>
      <p className="text-center mb-4">{title}</p>
      <hr />
      <div className="row">
        {recensioni.map((recensione, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title">
                    {recensione.nome} {recensione.cognome}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {recensione.titolo}
                  </h6>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    {getStarRating(recensione.voto)}
                    <p className="card-text text-muted ml-2 ms-2">
                      {new Date(recensione.creata_il).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="card-text">{recensione.testo}</p>
                  <p className="card-text">
                    Giorni di permanenza: {recensione.num_giorni_di_permanenza}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRecensione;
