import SearchBar from "../components/SearchBar";

import ImmobileCard from "../Components/ImmobileCard";

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
      <div className="container">
        <h1>Home Page</h1>

        <SearchBar />

        <div className="container-card-prova">
          <ImmobileCard immobile={immobili} />
          <ImmobileCard immobile={immobili} />
          <ImmobileCard immobile={immobili} />
          <ImmobileCard immobile={immobili} />
          <ImmobileCard immobile={immobili} />
          <ImmobileCard immobile={immobili} />
        </div>
      </div>
    </>
  );
}
