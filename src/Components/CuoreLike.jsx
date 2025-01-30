export default function CuoreLike({
  functionLike,
  colorHeart,
  isAbsolute,
  numLike,
}) {
  console.log(colorHeart);
  return (
    <div
      onClick={functionLike}
      className={
        isAbsolute
          ? "cuore-like-container position-absolute"
          : "cuore-like-container"
      }
    >
      {/* <span className="immobile-content-like immobile-img-heart"> */}
      <div className="heart-container">
        <span className="num-like-container">{numLike && numLike}</span>
        <i className={`fa-solid fa-heart immobile-img-heart ${colorHeart}`}></i>
      </div>
      {/* </span> */}
    </div>
  );
}
{
  /* <i className="fa-solid fa-heart cardComforts icona"></i>{" "} */
}
