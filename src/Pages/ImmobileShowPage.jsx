// UTILITY
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// COMPONENTS IMPORT
import CardProprietario from "../Components/CardProprietario";
import ComfortsImmobile from "../Components/ComfortsImmobile";
import CardRecensione, { getAverageRating } from "../Components/CardRecensione";
import CuoreLike from "../Components/CuoreLike";

// COMPONENT EXPORT
export default function ImmobileShowPage() {
  // GET URL PARAMS
  const { id: id } = useParams();

  // USE-STATE DATA
  const [immobile, setImmobile] = useState({ immobile: [] });
  const [newReview, setNewReview] = useState({
    nome: "",
    titolo: "",
    testo: "",
    voto: "",
    num_giorni_di_permanenza: "",
  });

  const [colorHeart, setColorHeart] = useState("");

  // INIT USE-EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
    ajaxShow();
  }, []);

  // AJAX REQUEST - SHOW
  const ajaxShow = () => {
    fetch("http://localhost:3000/api/immobili/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setImmobile(data);
        console.log("AJAX SHOW request: at http://localhost:3000/" + id);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error while fetching content");
      });
  };
  const handleButtonLike = (id) => {
    fetch(`http://localhost:3000/api/immobili/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("like aggiunto");
      });
    colorHeart == "" && setColorHeart("red-heart");
  };

  const handleReviewChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      nome: newReview.nome,
      id_immobile: id,
      titolo: newReview.titolo,
      testo: newReview.testo,
      voto: parseInt(newReview.voto),
      num_giorni_di_permanenza: parseInt(newReview.num_giorni_di_permanenza),
    };

    fetch("http://localhost:3000/api/recensioni", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          console.log("Failed to create review");
        }
      })
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error while submitting review:", error);
      });
  };

  const averageRating = immobile.recensioni
    ? getAverageRating(immobile.recensioni)
    : "";

  let voteTitle;
  if (averageRating > 4) {
    voteTitle = "Amato dagli ospiti";
  } else if (averageRating >= 3) {
    voteTitle = "Apprezzato dagli ospiti";
  } else {
    voteTitle = "Accettabile";
  }

  return (
    <>
      <div className="container show-page-container">
        <div className=" d-flex justify-content-between align-items-center ">
          <h1 className="h3 my-4">{immobile.titolo}</h1>
          <CuoreLike
            functionLike={() => handleButtonLike(immobile.id)}
            colorHeart={colorHeart}
            isAbsolute={false}
            className="cuore"
          />
        </div>

        <div className="row">
          <div className="col-lg-9 col-sm-12 mb-4">
            <div className="image-container d-flex justify-content-center">
              <img
                className="image-fluid h-100 w-100 rounded-1 img-show-page"
                src={immobile.immagine ? immobile.immagine : ""}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <ComfortsImmobile
              id={id}
              tipologia={immobile.tipologia}
              num_stanze={immobile.num_stanze}
              num_letti={immobile.num_letti}
              num_bagni={immobile.num_bagni}
              mq={immobile.mq}
            />
          </div>
        </div>

        <h2 className="h5 mt-5">
          {immobile.città}, {immobile.indirizzo}
        </h2>
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 mb-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              quaerat, neque consectetur cumque fugit eius pariatur quod nobis
              ab molestiae aut placeat reiciendis quas rerum modi veritatis
              culpa totam tempore. Incidunt laboriosam atque, veritatis
              asperiores modi quos. Consequuntur accusantium unde eius dolorum
              id esse provident veniam quos tempora, rerum nihil sed assumenda
              ut dicta facere velit quis! Quidem, repellat doloremque.
              Asperiores vitae ipsa nesciunt quo similique vel eveniet nam,
              minima, quod autem nulla officiis blanditiis aut nobis? Nobis
              ullam nesciunt sapiente debitis ratione, perferendis natus quas
              fuga voluptate praesentium ipsum?
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            {immobile.id_proprietario ? (
              <CardProprietario
                id={immobile.id_proprietario}
                email={immobile.email_proprietario}
                telefono={immobile.telefono_proprietario}
                nome={immobile.nome_proprietario}
                cognome={immobile.cognome_proprietario}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <hr />

        <div className="my-4"></div>
        <div className="text-center">
          <h2 className="display-1 fw-bold">
            <i className="fa-solid fa-star-half"></i>
            {immobile.recensioni?.length > 0 ? averageRating.toFixed(1) : "0"}
            <i className="fa-solid fa-star-half"></i>
          </h2>
          <p className="mb-4">{voteTitle}</p>
          <hr />
        </div>
        <div className="row">
          {immobile.recensioni
            ? immobile.recensioni.map((recensione, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <CardRecensione recensione={recensione} />
                </div>
              ))
            : ""}
        </div>

        <div className="formStore">
          <h2 className="h3 mb-3">Aggiungi una recensione</h2>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-3">
              <label htmlFor="nomeInput" className="form-label">
                Nome
              </label>
              <input
                value={newReview.nome}
                onChange={handleReviewChange}
                type="text"
                className="form-control"
                id="nomeInput"
                name="nome"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="titoloInput" className="form-label">
                Titolo
              </label>
              <input
                value={newReview.titolo}
                onChange={handleReviewChange}
                type="text"
                className="form-control"
                id="titoloInput"
                name="titolo"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="testoInput" className="form-label">
                Testo
              </label>
              <textarea
                value={newReview.testo}
                onChange={handleReviewChange}
                className="form-control"
                id="testoInput"
                name="testo"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="votoInput" className="form-label">
                Voto
              </label>
              <input
                value={newReview.voto}
                onChange={handleReviewChange}
                type="number"
                className="form-control"
                id="votoInput"
                name="voto"
                min="1"
                max="5"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numGiorniInput" className="form-label">
                Numero di giorni di permanenza
              </label>
              <input
                value={newReview.num_giorni_di_permanenza}
                onChange={handleReviewChange}
                type="number"
                className="form-control"
                id="numGiorniInput"
                name="num_giorni_di_permanenza"
                min="1"
                max="255"
                required
              />
            </div>
            <button type="submit" className="btn submitNewImmobileButton my-4">
              Invia Recensione
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
