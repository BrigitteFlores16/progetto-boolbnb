import ImmobileCard from "../Components/ImmobileCard";

// COMPONENTS IMPORT
import CardProprietario from "../components/CardProprietario";

// COMPONENT EXPORT

export default function HomePage() {
  const immobili = {
    titolo: "Titolo",
    num_likes: "Numero like",
    indirizzo: "Indirizzo",
    num_letti: "Numero letti",
    num_bagni: "Numero bagnmi",
    mq: "Metri quadrati",
    voto: "voto",
  };

  return (
    <>
      <h1>Home Page</h1>

      <CardProprietario
        id="1"
        email="esempio@esempio.it"
        telefono="1234567890"
        nome="Camillo"
        cognome="Rosanio"
      />

      <div className="container-card-prova">
        <ImmobileCard immobile={immobili} />
        <ImmobileCard immobile={immobili} />
        <ImmobileCard immobile={immobili} />
        <ImmobileCard immobile={immobili} />
        <ImmobileCard immobile={immobili} />
        <ImmobileCard immobile={immobili} />
      </div>
    </>
  );
}
