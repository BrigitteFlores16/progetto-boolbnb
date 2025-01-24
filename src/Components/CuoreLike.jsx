export default function CuoreLike({ functionLike }) {
  return (
    <div onClick={functionLike} className="cuore-like-container">
      <i className="fa-solid fa-heart immobile-img-heart"></i>
    </div>
  );
}
