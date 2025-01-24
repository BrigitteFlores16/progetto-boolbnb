import { useState } from "react";
import { data } from "react-router-dom";

const defaultFormFields = {
  titolo: "",
  num_stanze: "",
  num_letti: "",
  num_bagni: "",
  mq: "",
  tipologia: "",
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

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formFields, id_proprietario: 1 }),
    };

    fetch("http://localhost:3000/api/immobili", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setFormFields(defaultFormFields);
  };

  return (
    <>
      <div className="container">
        <h1 className="h3 mb-5">Inserisci un nuovo immobile da affittare</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-8">
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
                  required
                />
                <div id="titleHelp" className="form-text">
                  Inserisci un titolo riepilogativo che descriva l'immobile
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
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
                  required
                >
                  <option value="">Seleziona una categoria</option>
                  <option value="Appartamento">Appartamento</option>
                  <option value="Villetta">Villetta</option>
                  <option value="Monolocale">Monolocale</option>
                  <option value="Attico">Attico</option>
                  <option value="Loft">Loft</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
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
                  required
                />
              </div>
            </div>
            <div className="col-6 col-md-3">
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
                  required
                />
              </div>
            </div>
            <div className="col-6 col-md-3">
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
                  required
                />
              </div>
            </div>

            <div className="col-6 col-md-3">
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
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6">
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
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
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
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-3">
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
                  required
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

          <button type="submit" className="submitNewImmobileButton btn my-5">
            Pubblica
          </button>
        </form>
      </div>
    </>
  );
}
