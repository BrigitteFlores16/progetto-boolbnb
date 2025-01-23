// COMPONENTS IMPORT
import CardProprietario from "../components/CardProprietario";
import ComfortsImmobile from "../components/ComfortsImmobile";

// COMPONENT EXPORT
export default function ImmobileShowPage() {
  return (
    <>
      <div className="container">
        <h1 className="h3 mb-3">Titolo Immobile</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="image-container d-flex justify-content-center">
              <img
                className="image-fluid h-100 w-100 rounded-1"
                src="https://placehold.co/600x400"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ComfortsImmobile
              id="1"
              tipologia="Villetta"
              num_stanze="5"
              num_letti="5"
              num_bagni="3"
              mq="120"
            />
          </div>
        </div>

        <h2 className="h5 mt-5">Città, Indirizzo</h2>
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
      </div>
    </>
  );
}
