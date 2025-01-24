export default function CuoreLike({ functionLike, colorHeart }) {
  return (
    <div onClick={functionLike} className="cuore-like-container">
      <i className={`fa-solid fa-heart immobile-img-heart ${colorHeart}`}></i>
    </div>
  );
}
