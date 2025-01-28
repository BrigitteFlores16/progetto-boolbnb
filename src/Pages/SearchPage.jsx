import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImmobileCard from "../Components/ImmobileCard";
import Searchbar from "../components/Searchbar";

export default function SearchPage() {
  const location = useLocation();
  const filter = location.state?.filter;
  const [fetchDataImmobili, setFetchDataImmobili] = useState([]);

  useEffect(() => {
    handleFetchImmobili(filter, "", "", "");
  }, []);

  const handleFetchImmobili = (
    filterCity,
    filterRooms,
    filterBeds,
    filterType
  ) => {
    console.log(filterCity, filterRooms, filterBeds, filterType);

    console.log(
      `http://localhost:3000/api/immobili/?city=${filterCity}&rooms=${filterRooms}&beds=${filterBeds}&type=${filterType}`
    );

    fetch(
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
          {fetchDataImmobili?.length &&
            fetchDataImmobili.map((el) => (
              <ImmobileCard
                key={el.id}
                immobile={el}
                refreshData={handleFetchImmobili}
              />
            ))}
        </div>
      </div>
    </>
  );
}
