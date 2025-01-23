import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

import ImmobileCard from "../Components/ImmobileCard";

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

        {/* Card Immpbili */}
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
