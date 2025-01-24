import { useState } from "react";

const defaultFormFields = {
  titolo: "",
  num_stanze: "",
  num_letti: "",
  num_bagni: "",
  mq: "",
  indirizzo: "",
  città: "",
  email: "",
  immagine: "",
};

export default function ImmobileStorePage() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleFormChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch();

    setFormFields(defaultFormFields);
  };

  return (
    <>
      <div className="container">
        <h1 className="h3 mb-5">Inserisci un nuovo immobile da affittare</h1>

        <form>
          <div className="row">
            <div className="col-8">
              <div className="mb-3">
                <label htmlFor="titoloInput" className="form-label">
                  Nome immobile
                </label>
                <input
                  value={formFields.titolo}
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="titoloInput"
                  name="titolo"
                />
                <div id="titleHelp" className="form-text">
                  Inserisci un titolo riepilogativo che descriva l'immobile
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="tipologiaSelect" className="form-label">
                  Tipologia
                </label>
                <select
                  value={formFields.tipologia}
                  onChange={handleFormChange}
                  id="tipologiaSelect"
                  className="form-select"
                  aria-label="Default select example"
                  name="tipologia"
                >
                  <option value="">Seleziona una categoria</option>
                  {/* TODO SISTEMA TIPOLOGIE DISPONIBILI */}
                  <option value="Villetta">Villetta</option>
                  <option value="Appartamento">Appartamento</option>
                  <option value="Loft">Loft</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="stanzeInput" className="form-label">
                  Stanze
                </label>
                <input
                  value={formFields.num_stanze}
                  onChange={handleFormChange}
                  type="number"
                  className="form-control"
                  id="stanzeInput"
                  name="num_stanze"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="lettiInput" className="form-label">
                  Posti letto
                </label>
                <input
                  value={formFields.num_letti}
                  onChange={handleFormChange}
                  type="number"
                  className="form-control"
                  id="lettiInput"
                  name="num_letti"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="bagniInput" className="form-label">
                  Bagni
                </label>
                <input
                  value={formFields.num_bagni}
                  onChange={handleFormChange}
                  type="number"
                  className="form-control"
                  id="bagniInput"
                  name="num_bagni"
                />
              </div>
            </div>

            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="mqInput" className="form-label">
                  Superficie (mq)
                </label>
                <input
                  value={formFields.mq}
                  onChange={handleFormChange}
                  type="number"
                  className="form-control"
                  id="mqInput"
                  name="mq"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="indirizzoInput" className="form-label">
                  Indirizzo
                </label>
                <input
                  value={formFields.indirizzo}
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="indirizzoInput"
                  name="indirizzo"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="cittaInput" className="form-label">
                  Città
                </label>
                <input
                  value={formFields.città}
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="cittaInput"
                  name="città"
                />
              </div>
            </div>

            <div className="col-3">
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email di contatto
                </label>
                <input
                  value={formFields.email}
                  onChange={handleFormChange}
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="email"
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="imageInput" className="form-label">
                Immagine
              </label>
              <input
                value={formFields.immagine}
                onChange={handleFormChange}
                type="text"
                className="form-control"
                id="imageInput"
                name="immagine"
              />
            </div>
          </div>

          <button
            onSubmit={handleFormSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Pubblica
          </button>
        </form>
      </div>
    </>
  );
}
