export default function CuoreLike({ functionLike, colorHeart, isAbsolute }) {
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
      <i className={`fa-solid fa-heart immobile-img-heart ${colorHeart}`}></i>
    </div>
  );
}
