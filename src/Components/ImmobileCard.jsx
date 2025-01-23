export default function ImmobileCard({ immobile }) {
  const voto = parseFloat(immobile.voto);
  const votoToFixed = voto.toFixed(1);

  return (
    <div className="immobile-card-container">
      {/* header */}
      <div className="img-immobile-container">
        <img src="" alt="" />
        <i className="fa-solid fa-heart immobile-img-heart"></i>
      </div>

      {/* body */}
      <div className="body-container">
        <h2>{immobile.titolo}</h2>

        <div className="immobile-card-body-content">
          <span className="immobile-content-like">
            <i className="fa-solid fa-heart"></i> {immobile.num_likes}
          </span>
          <span className="immobile-content-adress">
            <i className="fa-solid fa-map-pin"></i> {immobile.indirizzo}
          </span>
          <span className="immobile-content-room">
            <i className="fa-solid fa-user"></i> {immobile.num_letti} letti
          </span>
          <span className="immobile-content-bathroom">
            <i className="fa-solid fa-shower"></i> {immobile.num_bagni} bagni
          </span>
          <span className="immobile-content-meters">
            <i className="fa-solid fa-ruler"></i> {immobile.mq} mq
          </span>
          <span className="immobile-content-star">
            <i className="fa-solid fa-star"></i> {votoToFixed}
          </span>
        </div>
      </div>
    </div>
  );
}
