// UTILITY
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// EXPORT COMPONENT

export default function Searchbar({
  isHidden,
  fetchImmobili,
  initialFilter,
  // setFilterCity,
}) {
  const navigate = useNavigate();

  // INIT USE EFFECT
  useEffect(() => {
    handleFetchTipologieImmobile();
  }, []);

  const [tipologieImmobile, setTipologieImmobile] = useState([]);
  const [filterCity, setFilterCity] = useState(initialFilter || "");
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
  };

  const filterResults = () => {
    isHidden
      ? navigate("/search", {
          state: {
            filter: filterCity,
          },
        })
      : fetchImmobili(filterCity, filterRooms, filterBeds, filterType);
  };
  const clearFilters = () => {
    setFilterCity("");
    setFilterRooms("");
    setFilterBeds("");
    setFilterType("");
    console.log(filterCity, filterRooms, filterBeds, filterType);
    fetchImmobili("", "", "", "");
  };

  //FETCH TIPOLOGIE IMMOBILE
  const handleFetchTipologieImmobile = async () => {
    await fetch(`http://localhost:3000/api/tipologie-immobile/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTipologieImmobile(data.tipologieImmobile);
      });
  };

  // RETURN COMPONENT
  return (
    <>
      <div className="container mt-5">
        <div className="search-bar align-items-center justify-content-between">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Destinazione"
              value={filterCity}
              onChange={onChangeCity}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="rooms"
              placeholder="Numero minimo stanze"
              value={filterRooms}
              onChange={onChangeRooms}
              className={isHidden ? "d-none" : "form-control"}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="beds"
              placeholder="Numero minimo letti"
              value={filterBeds}
              onChange={onChangeBeds}
              className={isHidden ? "d-none" : "form-control"}
            />
          </div>
          <div className="form-group">
            <select
              className={isHidden ? "d-none" : "form-select"}
              id="type"
              value={filterType}
              onChange={onChangeType}
            >
              <option value="">Tipologia</option>
              {tipologieImmobile.lenght == 0
                ? ""
                : tipologieImmobile.map((tipologia) => (
                    <option key={tipologia.nome} value={tipologia.nome}>
                      {tipologia.nome}
                    </option>
                  ))}
            </select>
          </div>
          <div className="searchbar-buttons d-flex">
            <button className="btn pe-0" onClick={filterResults}>
              <div className="search-icon d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </button>
            <button
              className="btn ms-3 clear-filters-button d-none d-lg-inline-block"
              onClick={clearFilters}
            >
              cancella filtri
            </button>
            <button
              className="btn ps-1 d-flex d-lg-none justify-content-center align-items-center "
              onClick={clearFilters}
            >
              <div className=" clear-filters-button-small search-icon d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-trash-can"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
