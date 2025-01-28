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
      <img src="/immobili-default.jpg" alt="" className="img-backgrounfd" />

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

        {/* ! PRESENTATION */}
        <div className="background-container">
          <div className="container">
            <div className="presentation-container">
              <h1 className="text-center mb-5">Chi siamo</h1>

              <hr />

              <div className="row-one">
                <img
                  className="img-presentazione"
                  src="img/nature.jpeg"
                  alt=""
                />

                <div className="row-description">
                  <h2>La nostra compagnia</h2>
                  <span>
                    Siamo i numeri uno nel settore, affidati alle nostre
                    strutture e vivi esperienze da SOGNO!
                  </span>
                </div>
              </div>

              <div className="row-two">
                <div className="row-description row-descriprion-right">
                  <h2>I nostri affittuari</h2>
                  <span className="text-end">
                    Viaggia senza preoccupazioni grazie alle abitazioni ed ai
                    loro affittuari verificati, in modo da avere sempre il
                    miglio servizio garantito.
                  </span>
                </div>

                <img
                  className="img-presentazione"
                  src="img/image-presentazione.jpg"
                />
              </div>

              <div className="row-tre">
                <img className="img-presentazione" src="img/payment.jpg" />

                <div className="row-description">
                  <h2>Pagamenti sicuri</h2>
                  <span>
                    Paga senza pensieri grazie al circuito MasterCard e alla
                    possibilita di pagare con PayPall, e da ora anche con la
                    possibilità di pagare a rate.
                  </span>
                </div>
              </div>

              <div className="end-description-container">
                <h2>Cosa aspetti, prenota subito!</h2>
                <button className="btn mt-5 mb-5 btn-end-page">
                  Ricerca un alloggio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
