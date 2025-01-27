
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import ImmobileCard from "../Components/ImmobileCard";

// COMPONENT EXPORT

export default function HomePage() {

  //USE-STATE
  const [fetchDataImmobili, setFetchDataImmobili] = useState();

  // FILTERS
  // const [tipologieImmobile, setTipologieImmobile] = useState([]);
  const [filterCity, setFilterCity] = useState("");
  // const [filterRooms, setFilterRooms] = useState("");
  // const [filterBeds, setFilterBeds] = useState("");
  // const [filterType, setFilterType] = useState("");

  // const onChangeCity = (e) => {
  //   setFilterCity(e.target.value);
  //   console.log(filterCity);
  // }


  // const onChangeRooms = (e) => {
  //   setFilterRooms(e.target.value);
  //   console.log(filterRooms);
  // }


  // const onChangeBeds = (e) => {
  //   setFilterBeds(e.target.value);
  //   console.log(filterBeds);
  // }


  // const onChangeType = (e) => {
  //   setFilterType(e.target.value);
  // }

  // const filterResults = () => {
  //   handleFetchImmobili();
  // }

  // const clearFilters = () => {
  //   setFilterCity("");
  //   setFilterRooms("");
  //   setFilterBeds("");
  //   setFilterType("");
  // }

  // INIT USE EFFECT
  useEffect(() => {
    handleFetchImmobili();
    // handleFetchTipologieImmobile();
  }, []);

  //FETCH IMMOBILI
  const handleFetchImmobili = async () => {
    await fetch(`http://localhost:3000/api/immobili/?city=${filterCity}`)
      // FILTERS
      // ?city=${filterCity}&rooms=${filterRooms}&beds=${filterBeds}&type=${filterType}
      .then((res) => res.json())
      .then((data) => {
        setFetchDataImmobili(data.immobili);
      });
  };

  // //FETCH TIPOLOGIE IMMOBILE
  // const handleFetchTipologieImmobile = async () => {
  //   await fetch(`http://localhost:3000/api/tipologie-immobile/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTipologieImmobile(data.tipologieImmobile);
  //     });
  // };

  return (
    <>
      <div className="container">

        {/* SEARCHBAR */}
        <Searchbar
          isHidden={true}
          fetchImmobili={handleFetchImmobili}
          filterCity={filterCity}
          setFilterCity={setFilterCity}
        />


        {/* Card Immobili */}
        <div className="main-container-card">
          {fetchDataImmobili?.length &&
            fetchDataImmobili.map((el) =>
              <ImmobileCard
                key={el.id}
                immobile={el}
                refreshData={handleFetchImmobili}
              />
            )}
        </div>
      </div>
    </>
  );
}
