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
      />

      <Link
        key={immobile.id}
        to={`/${immobile.id}`}
        className="immobile-card-container"
      >
        {/* header */}
        <div className="img-immobile-container">
          <img src="" alt="" />
        </div>

        {/* body */}
        <div className="body-container">
          <h2>{immobile.titolo}</h2>

          <div className="immobile-card-body-content">
            <span className="immobile-content-like">
              <i className="fa-solid fa-heart"></i> {immobile.num_likes}
            </span>
            <span className="immobile-content-adress">
              <i class="fa-solid fa-map-pin"></i> {immobile.indirizzo}
            </span>
            <span className="immobile-content-room">
              <i class="fa-solid fa-user"></i> {immobile.num_letti}
            </span>
            <span className="immobile-content-bathroom">
              <i class="fa-solid fa-shower"></i> {immobile.num_bagni}
            </span>
            <span className="immobile-content-meters">
              <i class="fa-solid fa-ruler"></i> {immobile.mq}
            </span>
            <span className="immobile-content-star">
              <i class="fa-solid fa-star"></i>
              {parseFloat(immobile.voto).toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
