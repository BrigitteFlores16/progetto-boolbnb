export default function SearchBar() {
  return (
    <div className="bg-light">
      <div className="container mt-5">
        <div className="search-bar">
          <div className="form-group">
            <strong><label htmlFor="search" className="form-label  ">Dove</label></strong>
            <input type="text" className="form-control" id="search" placeholder="Cerca destinazioni" />
          </div>
          <div className="form-group">
            <strong><label htmlFor="rooms" className="form-label  ">Numero stanze</label></strong>
            <input type="number" className="form-control" id="rooms" placeholder="Numero minimo stanze" />
          </div>
          <div className="form-group">
            <strong className=""><label htmlFor="beds" className="form-label  ">Numero letti</label></strong>
            <input type="number" className="form-control" id="beds" placeholder="Numero minimo letti" />
          </div>
          <div className="form-group">
            <strong><label htmlFor="type" className="form-label   text-dark">Tipologia</label></strong>
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
            <i class="fa-regular fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  )
}