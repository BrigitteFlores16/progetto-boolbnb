import CuoreLike from "./CuoreLike";

export default function ImmobileCard({ immobile }) {
  return (
    <div className="immobile-card-container">
      {/* header */}
      <div className="img-immobile-container">
        <img src="" alt="" />
        <CuoreLike />
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
    </div>
  );
}
