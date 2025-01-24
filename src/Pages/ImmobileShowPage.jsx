// UTILITY
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


// COMPONENTS IMPORT
import CardProprietario from "../Components/CardProprietario";
import ComfortsImmobile from "../Components/ComfortsImmobile";
import CardRecensione, { getAverageRating } from "../Components/CardRecensione";
import recensioniArray from "../array_recensioni";


// COMPONENT EXPORT
export default function ImmobileShowPage() {

  // GET URL PARAMS
  const { id: id } = useParams();

  // USE-STATE DATA
  const [immobile, setImmobile] = useState({ immobile: [] });

  // INIT USE-EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
    ajaxShow();
  }, []);

  // AJAX REQUEST - SHOW
  const ajaxShow = () => {
    fetch('http://localhost:3000/api/immobili/' + id, {
      method: 'GET',
    })
      .then(res => res.json())
      .then((data) => {
        setImmobile(data);
        console.log('AJAX SHOW request: at http://localhost:3000/' + id);
        console.log(data);
      })
      .catch((error) => {
        console.log('Error while fetching content')
      })
  };


  const averageRating = immobile.recensioni ? getAverageRating(immobile.recensioni) : '';

  let voteTitle;
  if (averageRating > 4) {
    voteTitle = "Amato dagli ospiti";
  } else if (averageRating >= 2) {
    voteTitle = "Apprezzato dagli ospiti";
  } else {
    voteTitle = "Accettabile";
  }

  return (
    <>
      <div className="container">
        <h1 className="h3 mb-3">{immobile.titolo}</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="image-container d-flex justify-content-center">
              <img
                className="image-fluid h-100 w-100 rounded-1"
                src={immobile.immagine ? immobile.immagine : ''}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
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

        <h2 className="h5 mt-5">{immobile.città}, {immobile.indirizzo}</h2>
        <div className="row">
          <div className="col-12 col-md-7">
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
          <div className="col-12 col-md-5">
            {immobile.id_proprietario ?
              <CardProprietario
                id={immobile.id_proprietario}
                email={immobile.email_proprietario}
                telefono={immobile.telefono_proprietario}
                nome={immobile.nome_proprietario}
                cognome={immobile.cognome_proprietario}
              />
              : ''}
          </div>
        </div>
        <div className="my-4"></div>
        <div className="text-center">
          <h2 className="display-1 fw-bold">{immobile.recensioni ? averageRating.toFixed(1) : ''}</h2>
          <p className="mb-4">{voteTitle}</p>
          <hr />
        </div>
        <div className="row">
          {immobile.recensioni ?
            immobile.recensioni.map((recensione, index) => (
              <div key={index} className="col-md-6 mb-4">
                <CardRecensione recensione={recensione} />
              </div>))
            : ''}
        </div>
      </div>
    </>
  );
}
