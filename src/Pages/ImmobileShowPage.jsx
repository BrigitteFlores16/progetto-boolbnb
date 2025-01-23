// COMPONENTS IMPORT
import CardProprietario from "../Components/CardProprietario";
import ComfortsImmobile from "../Components/ComfortsImmobile";
import CardRecensione, { getAverageRating } from "../Components/CardRecensione";
import recensioniArray from "../array_recensioni";

// COMPONENT EXPORT
export default function ImmobileShowPage() {
  const averageRating = getAverageRating(recensioniArray);

  let title;
  if (averageRating > 4) {
    title = "Amato dagli ospiti";
  } else if (averageRating >= 2) {
    title = "Apprezzato dagli ospiti";
  } else {
    title = "Da migliorare";
  }

  return (
    <>
      <div className="container">
        <h1 className="h3 mb-3">Titolo Immobile</h1>
        <div className="image-container d-lg-flex align-items-center gap-1 rounded-1">
          <div className="bigger-image-container">
            <img
              className="image-fluid rounded-1"
              src="https://placehold.co/600x400"
              alt=""
            />
          </div>
          <div className="stacked-image-container d-none d-lg-flex flex-column gap-1 rounded-1">
            <img
              className="image-fluid rounded-1"
              src="https://placehold.co/300x200"
              alt=""
            />
            <img
              className="image-fluid rounded-1"
              src="https://placehold.co/300x200"
              alt=""
            />
          </div>
          <div className="stacked-image-container d-none d-lg-flex flex-column gap-1 rounded-1">
            <img
              className="image-fluid rounded-1"
              src="https://placehold.co/300x200"
              alt=""
            />
            <img
              className="image-fluid rounded-1"
              src="https://placehold.co/300x200"
              alt=""
            />
          </div>
        </div>
        <h2 className="h4 mt-3">Città, Indirizzo</h2>
        <div className="row">
          <div className="col-12 col-md-8">
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
          <div className="col-12 col-md-4">
            <CardProprietario
              id="1"
              email="esempio@esempio.it"
              telefono="1234567890"
              nome="Camillo"
              cognome="Rosanio"
            />
          </div>
        </div>
        <ComfortsImmobile
          id="1"
          tipologia="Villetta"
          num_stanze="5"
          num_letti="5"
          num_bagni="3"
          mq="120"
        />
        <div className="my-4"></div>
        <div className="text-center">
          <h2 className="display-1 fw-bold">{averageRating.toFixed(1)}</h2>
          <p className="mb-4">{title}</p>
          <hr />
        </div>
        <div className="row">
          {recensioniArray.map((recensione, index) => (
            <div key={index} className="col-md-6 mb-4">
              <CardRecensione recensione={recensione} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
