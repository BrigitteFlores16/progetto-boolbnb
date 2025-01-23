import SearchBar from "../components/SearchBar";

import ImmobileCard from "../Components/ImmobileCard";

// COMPONENTS IMPORT
import CardProprietario from "../components/CardProprietario";
import { useEffect, useState } from "react";

// COMPONENT EXPORT

export default function HomePage() {
  const [fetchDataImmobili, setFetchDataImmobili] = useState();

  useEffect(() => {
    handleFetchImmobili();
  }, []);

  const handleFetchImmobili = async () => {
    await fetch("http://localhost:3000/api/immobili")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFetchDataImmobili(data.immobili);
        console.log(fetchDataImmobili);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Home Page</h1>

        <SearchBar />

        <CardProprietario
          id="1"
          email="esempio@esempio.it"
          telefono="1234567890"
          nome="Camillo"
          cognome="Rosanio"
        />
        <div className="main-container-card">
          {fetchDataImmobili?.length &&
            fetchDataImmobili.map((el) => {
              return <ImmobileCard key={el.id} immobile={el} />;
            })}
        </div>
      </div>
    </>
  );
}
