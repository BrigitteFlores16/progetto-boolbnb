import { useEffect, useState } from "react";

const defaultFormFields = {
  titolo: "",
  num_stanze: "",
  num_letti: "",
  num_bagni: "",
  mq: "",
  id_tipologia_immobile: "",
  indirizzo: "",
  città: "",
  email: "",
  immagine: "",
};

export default function ImmobileStorePage() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [tipologieImmobile, setTipologieImmobile] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //FETCH TIPOLOGIE IMMOBILE
  const handleFetchTipologieImmobile = async () => {
    await fetch(`http://localhost:3000/api/tipologie-immobile/`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTipologieImmobile(data.tipologieImmobile);
      });
  };

  useEffect(() => {
    handleFetchTipologieImmobile();
  }, []);

  const handleFormChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleShowConfirmModal();
  };

  const confirmFormSubmit = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formFields, id_proprietario: 1 }),
    };

    fetch("http://localhost:3000/api/immobili", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleCloseConfirmModal();
        handleShowModal();
      });

    setFormFields(defaultFormFields);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload();
  };
  const handleShowModal = () => setShowModal(true);

  const handleCloseConfirmModal = () => setShowConfirmModal(false);
  const handleShowConfirmModal = () => setShowConfirmModal(true);

  return (
    <>
      <div className="container">
        <div className="formStore">
          <h1 className="h3 mb-5">Inserisci un nuovo alloggio da affittare</h1>

          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-8">
                <div className="mb-3">
                  <label htmlFor="titoloInput" className="form-label">
                    Nome alloggio
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
                    Inserisci un titolo riepilogativo che descriva l'alloggio
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="mb-3">
                  <label htmlFor="tipologiaSelect" className="form-label">
                    Tipologia
                  </label>
                  <select
                    value={formFields.id_tipologia_immobile}
                    onChange={handleFormChange}
                    id="tipologiaSelect"
                    className="form-control"
                    aria-label="Default select example"
                    name="id_tipologia_immobile"
                    required
                  >
                    <option value="">Tipologia</option>
                    {tipologieImmobile.lenght == 0
                      ? ""
                      : tipologieImmobile.map((tipologia) => (
                          <option key={tipologia.nome} value={tipologia.id}>
                            {tipologia.nome}
                          </option>
                        ))}
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

            <button type="submit" className="submitNewImmobileButton btn my-3">
              Pubblica
            </button>
          </form>
        </div>
      </div>

      {showConfirmModal && (
        <div
          className="modal fade show d-flex align-items-center justify-content-center"
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-light card-messaggio-border">
              <div className="modal-header">
                <h5 className="modal-title">Conferma invio alloggio</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseConfirmModal}
                ></button>
              </div>
              <div className="modal-body text-dark">
                <p>Sei sicuro di voler pubblicare questo alloggio?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseConfirmModal}
                >
                  Annulla
                </button>
                <button
                  type="button"
                  className="btn card-messaggio-formrecensioni text-white"
                  onClick={confirmFormSubmit}
                >
                  Conferma
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="modal fade show d-flex align-items-center justify-content-center"
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-light card-messaggio-border">
              <div className="modal-header">
                <h5 className="modal-title">Alloggio inviato</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body text-dark">
                <p>Il tuo alloggio è stato pubblicato con successo!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn card-messaggio-formrecensioni text-white"
                  onClick={handleCloseModal}
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
