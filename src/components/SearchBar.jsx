export default function SearchBar(){
    return(
        <>
         <div className="bg-light">
      <div className="container mt-5">
        <div className="search-bar">
          <div className="form-group">
            <label htmlFor="search" className="form-label text-muted small">Dove</label>
            <input type="text" className="form-control" id="search" placeholder="Cerca destinazioni"/>
          </div>
          <div className="form-group">
            <label htmlFor="rooms" className="form-label text-muted small">Numero stanze</label>
            <input type="number" className="form-control" id="rooms" placeholder="Numero minimo stanze"/>
          </div>
          <div className="form-group">
            <label htmlFor="beds" className="form-label text-muted small">Numero letti</label>
            <input type="number" className="form-control" id="beds" placeholder="Numero minimo letti"/>
          </div>
          <div className="form-group">
            <label htmlFor="type" className="form-label text-muted small">Tipologia</label>
            <select className="form-select" id="type">
              <option value="appartamento">Appartamento</option>
              <option value="villa">Villa</option>
              <option value="casa indipendente">casa indipendente</option>
              <option value=" Villetta a schiera"> Villetta a schiera</option>
              <option value="chalet">chalet</option>
              <option value="baita">baita</option>
              <option value="stanza">Stanza</option>
            </select>
          </div>
          <button className='btn btn-search'>
          </button>
        </div>
      </div>
    </div>
        </>
    )
}