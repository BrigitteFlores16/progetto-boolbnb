export default function ImmobileCard() {
  return (
    <div className="immobile-card-container">
      {/* header */}
      <div className="img-immobile-container">
        <img src="" alt="" />
        <i className="fa-solid fa-heart immobile-img-heart"></i>
      </div>

      {/* body */}
      <div className="body-container">
        <h2>Title</h2>

        <div className="immobile-card-body-content">
          <span className="immobile-content-like">
            {" "}
            <i className="fa-solid fa-heart"></i> like
          </span>
          <span className="immobile-content-adress">
            <i class="fa-solid fa-map-pin"></i> adress
          </span>
          <span className="immobile-content-room">
            <i class="fa-solid fa-user"></i> room
          </span>
          <span className="immobile-content-bathroom">
            <i class="fa-solid fa-shower"></i> bathroom
          </span>
          <span className="immobile-content-meters">
            <i class="fa-solid fa-ruler"></i> meters
          </span>
          <span className="immobile-content-star">
            <i class="fa-solid fa-star"></i> star
          </span>
        </div>
      </div>
    </div>
  );
}
