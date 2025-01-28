import React from "react";

export const getAverageRating = (recensioni) => {
  return (
    recensioni.reduce((acc, recensione) => acc + recensione.voto, 0) /
    recensioni.length
  );
};

const CardRecensione = ({ recensione }) => {
  const getStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa ${index < rating ? "fa-star" : "fa-star fa-regular"}`}
      ></i>
    ));
  };

  return (
    <div className="card h-100 border border-light">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">
            {recensione.nome} {recensione.cognome}
          </h5>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="card-subtitle mb-2 text-muted">{recensione.titolo}</h6>
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
  );
};

export default CardRecensione;
