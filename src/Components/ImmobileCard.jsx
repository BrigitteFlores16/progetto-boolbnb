import { useState } from "react";
import CuoreLike from "./CuoreLike";
import { Link } from "react-router-dom";

export default function ImmobileCard({ immobile, refreshData }) {
  // ? debug
  const [colorHeart, setColorHeart] = useState("");

  // const idCard = () => {};

  const handleButtonLike = (id) => {
    fetch(`http://localhost:3000/api/immobili/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("like aggiunto");
      });
    // colorHeart == "" ? setColorHeart("red-heart") : setColorHeart("");
    colorHeart == "" && setColorHeart("red-heart");

    refreshData();
  };

  return (
    <div className="wrap-immobile-card-container">
      <CuoreLike
        functionLike={() => handleButtonLike(immobile.id)}
        colorHeart={colorHeart}
        isAbsolute={true}
        numLike={immobile && immobile.num_likes}
      />

      <Link
        key={immobile && immobile.id}
        to={`/${immobile && immobile.id}`}
        className="immobile-card-container"
      >
        {/* header */}
        <div className="img-immobile-container">
          <img
            className="img-immobile"
            src={immobile && immobile.immagine}
            alt=""
          />
        </div>

        {/* body */}
        <div className="body-container">
          <h2>{immobile && immobile.titolo}</h2>

          <div className="immobile-card-body-content">
            {/* <span className="immobile-content-like">
              <i className="fa-solid fa-heart cardComforts icona"></i>{" "}
              {immobile && immobile.num_likes}
            </span> */}
            <span className="immobile-content-adress">
              <i className="fa-solid fa-map-pin cardComforts icona"></i>{" "}
              {immobile && immobile.indirizzo}
            </span>
            <div className="sub-container-card-body">
              <span className="immobile-content-room">
                <i className="fa-solid fa-door-open cardComforts icona"></i>{" "}
                {immobile && immobile.num_stanze}
              </span>
              <span className="immobile-content-bathroom">
                <i className="fa-solid fa-shower cardComforts icona"></i>{" "}
                {immobile && immobile.num_bagni}
              </span>
              <span className="immobile-content-meters">
                <i className="fa-solid fa-ruler cardComforts icona"></i>{" "}
                {immobile && immobile.mq}
              </span>
              <span className="immobile-content-star">
                <i className="fa-solid fa-star cardComforts icona"></i>
                {parseFloat(immobile && immobile.voto).toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
