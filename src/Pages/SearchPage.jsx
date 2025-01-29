import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImmobileCard from "../Components/ImmobileCard";
import Searchbar from "../components/Searchbar";

export default function SearchPage() {
  const location = useLocation();
  const filter = location.state?.filter;
  const [fetchDataImmobili, setFetchDataImmobili] = useState([]);
  //   const [filterCity, setFilterCity] = useState(filter);

  useEffect(() => {
    handleFetchImmobili(filter || "", "", "", "");
  }, []);

  const handleFetchImmobili = async (
    filterCity,
    filterRooms,
    filterBeds,
    filterType
  ) => {
    console.log(
      `http://localhost:3000/api/immobili/?city=${filterCity}&rooms=${filterRooms}&beds=${filterBeds}&type=${filterType}`
    );

    await fetch(
      `http://localhost:3000/api/immobili/?city=${filterCity}&rooms=${filterRooms}&beds=${filterBeds}&type=${filterType}`
    )
      // FILTERS
      //   ?city=${filterCity}&rooms=${filterRooms}&beds=${filterBeds}&type=${filterType}
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setFetchDataImmobili(data.immobili);
      });
  };
  return (
    <>
      <div className="container">
        <Searchbar
          isHidden={false}
          fetchImmobili={handleFetchImmobili}
          initialFilter={filter}
          //   setFilterCity={setFilterCity}
        />

        {/* Card Immobili */}
        <div className="main-container-card">
          {fetchDataImmobili?.length > 0 ? (
            fetchDataImmobili.map((el) => (
              <ImmobileCard
                key={el.id}
                immobile={el}
                refreshData={handleFetchImmobili}
              />
            ))
          ) : (
            <p className="mt-5">
              Nessun risultato trovato. Prova a modificare i filtri di ricerca!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
