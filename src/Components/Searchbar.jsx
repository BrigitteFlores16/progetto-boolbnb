
// UTILITY
import { useState, useEffect } from "react";


// EXPORT COMPONENT

export default function Searchbar({ isHidden, fetchImmobili, filterCity, setFilterCity }) {

  // INIT USE EFFECT
  useEffect(() => {
    handleFetchTipologieImmobile();
  }, []);

  // FILTERS
  const [searchFilters, setSearchFilter] = useState({
    city: '',
    rooms: '',
    beds: '',
    type: ''
  });

  const onChangeSearchFilters = (e) => {
    console.log({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  const clearSearchFilters = () => {
    setFilterCity({
      city: '',
      rooms: '',
      beds: '',
      type: ''
    });
  };


  const [tipologieImmobile, setTipologieImmobile] = useState([]);
  // const [filterCity, setFilterCity] = useState("");
  const [filterRooms, setFilterRooms] = useState("");
  const [filterBeds, setFilterBeds] = useState("");
  const [filterType, setFilterType] = useState("");

  const onChangeCity = (e) => {
    setFilterCity(e.target.value);
    console.log(filterCity);
  }

  const onChangeRooms = (e) => {
    setFilterRooms(e.target.value);
    console.log(filterRooms);
  }

  const onChangeBeds = (e) => {
    setFilterBeds(e.target.value);
    console.log(filterBeds);
  }

  const onChangeType = (e) => {
    setFilterType(e.target.value);
  }

  const filterResults = () => {
    fetchImmobili();
  }

  const clearFilters = () => {
    setFilterCity("");
    setFilterRooms("");
    setFilterBeds("");
    setFilterType("");
  }


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
  return (<>
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
        className={isHidden ? 'd-none' : ''}
      />
      <input
        type="text"
        placeholder="letti"
        value={filterBeds}
        onChange={onChangeBeds}
        className={isHidden ? 'd-none' : ''}
      />

      {/* SELECT TIPOLOGIA */}
      <select placeholder="tipologia"
        value={filterType}
        onChange={onChangeType}
        className={isHidden ? 'd-none' : ''}
      >
        <option value=''>Tipologia</option>
        {tipologieImmobile.lenght == 0 ? '' :
          tipologieImmobile.map(tipologia => <option key={tipologia.nome} value={tipologia.nome}>{tipologia.nome}</option>)}
      </select>

      <button onClick={filterResults}
      >
        cerca
      </button>
      <button onClick={clearFilters}>
        azzera filtri
      </button>
    </div>
  </>
  )
};
