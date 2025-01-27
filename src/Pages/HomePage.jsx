
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ImmobileCard from "../Components/ImmobileCard";

// COMPONENT EXPORT

export default function HomePage() {
  //FILTERS
  const [filterCity, setFilterCity]= useState("");
  const [filterRooms, setFilterRooms]= useState("");
  const [filterBeds, setFilterBeds]= useState("");
  const [filterType, setFilterType]= useState("");


  const onChangeCity=(e)=>{
    setFilterCity(e.target.value);
    console.log(filterCity); }


  const onChangeRooms=(e)=>{
    setFilterRooms(e.target.value);
    console.log(filterRooms); }


  const onChangeBeds=(e)=>{
    setFilterBeds(e.target.value);
    console.log(filterBeds); }


  const onChangeType=(e)=>{
    setFilterType(e.target.value);
    console.log(filterType); }
    
  const filterResults=()=>{
    handleFetchImmobili();
  }

  const clearFilters=()=>{
    setFilterCity("");
    setFilterRooms("");
    setFilterBeds("");
    setFilterType("");
  }
  //FETCH
  const [fetchDataImmobili, setFetchDataImmobili] = useState();

  useEffect(() => {
    handleFetchImmobili();
  }, []);

  const handleFetchImmobili = async () => {
    await fetch(`http://localhost:3000/api/immobili/?city=${filterCity}&rooms=${filterRooms}&beds=${filterBeds}&type=${filterType}`)
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
<div className="bg-light">
      <div className="container mt-5">
        <div className="search-bar">
          <div className="form-group">
            <label htmlFor="search" className="form-label text-muted small">Dove</label>
            <input
             type="text" 
             className="form-control" 
             id="search" 
             placeholder="Cerca destinazioni"
             value={filterCity}
        onChange={onChangeCity}
             />
          </div>
          <div className="form-group">
            <label htmlFor="rooms" className="form-label text-muted small">Numero stanze</label>
            <input 
            type="number" 
            className="form-control" 
            id="rooms" 
            placeholder="Numero minimo stanze"
            value={filterRooms}
            onChange={onChangeRooms}
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="beds" className="form-label text-muted small">Numero letti</label>
            <input 
            type="number" 
            className="form-control" 
            id="beds" 
            placeholder="Numero minimo letti"
            value={filterBeds}
            onChange={onChangeBeds}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="form-label text-muted small">Tipologia</label>
            <select 
            className="form-select" 
            id="type"
            value={filterType}
        onChange={onChangeType}
            >
              <option value="appartamento">Appartamento</option>
              <option value="villa">Villa</option>
              <option value="casa indipendente">Casa indipendente</option>
              <option value="villetta a schiera">Villetta a schiera</option>
              <option value="chalet">Chalet</option>
              <option value="baita">Baita</option>
              <option value="stanza">Stanza</option>
            </select>
          </div>
          <button className='btn btn-danger' onClick={filterResults}>
            cerca
          </button>
          <button   className="btn btn-danger"onClick={clearFilters}>azzera filtri</button>
        </div>
      </div>
    </div> 
       
       
       
       
       
       
       
       
       
       
       
       
{/*        
       
        
        
       
        <button onClick={filterResults}
        > 
         cerca
        </button>
        <button onClick={clearFilters}>
          azzera filtri
        </button>
        </div> */}




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
