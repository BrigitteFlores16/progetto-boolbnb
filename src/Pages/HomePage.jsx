import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import ImmobileCard from "../Components/ImmobileCard";

// COMPONENT EXPORT

export default function HomePage() {
  let navigate = useNavigate();
  //FILTERS
  const [filterCity, setFilterCity] = useState("");
  const [filterRooms, setFilterRooms] = useState("");
  const [filterBeds, setFilterBeds] = useState("");
  const [filterType, setFilterType] = useState("");

  const onChangeCity = (e) => {
    setFilterCity(e.target.value);
    console.log(filterCity);
  };

  const onChangeRooms = (e) => {
    setFilterRooms(e.target.value);
    console.log(filterRooms);
  };

  const onChangeBeds = (e) => {
    setFilterBeds(e.target.value);
    console.log(filterBeds);
  };

  const onChangeType = (e) => {
    setFilterType(e.target.value);
    console.log(filterType);
  };

  const filterResults = () => {
    handleFetchImmobili();
    navigate("/search", {
      state: {
        filter: filterCity,
      },
    });
  };

  const clearFilters = () => {
    setFilterCity("");
    setFilterRooms("");
    setFilterBeds("");
    setFilterType("");
  };
  //FETCH
  const [fetchDataImmobili, setFetchDataImmobili] = useState();

  useEffect(() => {
    handleFetchImmobili();
  }, []);

  const handleFetchImmobili = async () => {
    await fetch(
      `http://localhost:3000/api/immobili/?city=${filterCity}&rooms=${filterRooms}&beds=${filterBeds}&type=${filterType}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchDataImmobili(data.immobili);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Home Page</h1>

        {/* SEARCHBAR */}
        <div>
          <input
            type="text"
            placeholder="città"
            value={filterCity}
            onChange={onChangeCity}
          />
          <input
            type="text"
            placeholder="stanze"
            value={filterRooms}
            onChange={onChangeRooms}
          />
          <input
            type="text"
            placeholder="letti"
            value={filterBeds}
            onChange={onChangeBeds}
          />
          <input
            type="text"
            placeholder="tipologia"
            value={filterType}
            onChange={onChangeType}
          />
          <button onClick={filterResults}>cerca</button>
          <button onClick={clearFilters}>azzera filtri</button>
        </div>

        {/* Card Immpbili */}
        <div className="main-container-card">
          {fetchDataImmobili?.length &&
            fetchDataImmobili.map((el) => {
              return (
                <>
                  <ImmobileCard
                    key={el.id}
                    immobile={el}
                    refreshData={handleFetchImmobili}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
