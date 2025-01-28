import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import ImmobileCard from "../Components/ImmobileCard";

// COMPONENT EXPORT

export default function HomePage() {
  //USE-STATE
  const [fetchDataImmobili, setFetchDataImmobili] = useState();

  // FILTERS
  const [filterCity, setFilterCity] = useState("");

  // INIT USE EFFECT
  useEffect(() => {
    handleFetchImmobili();
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

  // * TOP 5 B&B
  // transform string in number
  const stringInNumber = (string) => {
    return parseFloat(string);
  };

  // top 5 B&B

  const handleFindTopFiveImmobili = (data) => {
    const copyFetchDataImmobili = data;
    const newTopFiveBnB = [];

    for (let i = 0; i < 5; i++) {
      let maxVoto = 0;
      let immobileMaxVoto;

      const immobiliMaxVoto =
        copyFetchDataImmobili?.length &&
        copyFetchDataImmobili.map((el) => {
          const votoNumber = stringInNumber(el.voto);

          if (votoNumber > maxVoto) {
            maxVoto = votoNumber;
            immobileMaxVoto = el;
          }
        });
      newTopFiveBnB.push(immobileMaxVoto);
      const indexImmobileToDelete =
        copyFetchDataImmobili?.length &&
        copyFetchDataImmobili.findIndex((el) => el.id == immobileMaxVoto.id);
      copyFetchDataImmobili?.length &&
        copyFetchDataImmobili.splice(indexImmobileToDelete, 1);
    }
    console.log(newTopFiveBnB);

    return newTopFiveBnB;
  };

  const topFiveBnB = handleFindTopFiveImmobili(fetchDataImmobili);
  // console.log(topFiveBnB);

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

        {/* top 5 b&b */}
        <div className="top-five-bnb-container">
          <div className="top-five-bnb">
            {topFiveBnB?.length &&
              topFiveBnB.map((el, i) => {
                console.log(topFiveBnB);
                return <ImmobileCard key={i} immobile={el} section={"top-5"} />;
              })}
          </div>
          <h3 className="top-5-title">Top 5 B&B</h3>
        </div>

        {/* Card Immobili
        <div className="main-container-card">
          {fetchDataImmobili?.length &&
            fetchDataImmobili.map((el) => (
              <ImmobileCard
                key={el.id}
                immobile={el}
                refreshData={handleFetchImmobili}
              />
            ))}
        </div> */}
      </div>
    </>
  );
}
