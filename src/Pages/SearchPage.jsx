import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImmobileCard from "../Components/ImmobileCard";
import Searchbar from "../components/Searchbar";

export default function SearchPage() {
  const location = useLocation();
  const filter = location.state?.filter;
  const [fetchDataImmobili, setFetchDataImmobili] = useState([]);
  const [filterCity, setFilterCity] = useState(filter || "");
  const [filterRooms, setFilterRooms] = useState("");
  const [filterBeds, setFilterBeds] = useState("");
  const [filterType, setFilterType] = useState("");
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
      `http://localhost:3000/api/immobili/?city=${
        filterCity ? filterCity : ""
      }&rooms=${filterRooms ? filterRooms : ""}&beds=${
        filterBeds ? filterBeds : ""
      }&type=${filterType ? filterType : ""}`
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
          filterCity={filterCity}
          filterRooms={filterRooms}
          filterBeds={filterBeds}
          filterType={filterType}
          setFilterCity={setFilterCity}
          setFilterRooms={setFilterRooms}
          setFilterBeds={setFilterBeds}
          setFilterType={setFilterType}
          isHidden={false}
          fetchImmobili={handleFetchImmobili}
          initialFilter={filter}
          //   setFilterCity={setFilterCity}
        />

        <h2 className="h6 fw-lighter mt-4 ms-5">
          {fetchDataImmobili?.length} alloggi trovati
        </h2>

        {/* Card Immobili */}
        <div className="main-container-card">
          {fetchDataImmobili?.length > 0 ? (
            fetchDataImmobili.map((el) => (
              <ImmobileCard
                key={el.id}
                immobile={el}
                refreshData={() =>
                  handleFetchImmobili(
                    filterCity,
                    filterRooms,
                    filterBeds,
                    filterType
                  )
                }
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
