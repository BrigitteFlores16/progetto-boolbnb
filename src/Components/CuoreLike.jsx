export default function CuoreLike({
  functionLike,
  colorHeart,
  isAbsolute,
  numLike,
}) {
  return (
    <div
      onClick={functionLike}
      className={
        isAbsolute
          ? "cuore-like-container position-absolute"
          : "cuore-like-container"
      }
    >
      <div className="heart-container">
        <span className="num-like-container">{numLike && numLike}</span>
        <i className={`fa-solid fa-heart immobile-img-heart ${colorHeart}`}></i>
      </div>
    </div>
  );
}
