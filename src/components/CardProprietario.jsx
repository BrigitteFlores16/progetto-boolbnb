// COMPONENT EXPORT

export default function CardProprietario({
  id,
  email,
  telefono,
  nome,
  cognome,
}) {
  return (
    <>
      <div key={id} className="cardProprietario scheda">
        {/* NOME PROFILO */}
        <div className="cardProprietario profilo">
          {/* ICONA LETTERA */}
          <div className="cardProprietario profiloIcona">
            <span className="cardProprietario circle">
              {nome.charAt(0).toUpperCase()}
            </span>
          </div>
          {/* NOME */}
          <h3 className="cardProprietario profiloNome">
            {nome} {cognome}
          </h3>
        </div>

        {/* CONTATTI */}
        <div className="cardProprietario recapiti">
          <div className="cardProprietario recapitiDettagli">
            <p className="cardProprietario contatti">
              <i class="fa-solid fa-phone cardProprietario contattiInfo"></i>{" "}
              Chiama
            </p>
            <p className="cardProprietario contatti">
              <i class="fa-solid fa-envelope cardProprietario contattiInfo"></i>{" "}
              Scrivi
            </p>
          </div>

          <div className="cardProprietario recapitiDettagli">
            <a
              className="cardProprietario contattiInfo"
              href={`tel:${telefono}`}
            >
              {telefono}
            </a>
            <a
              className="cardProprietario contattiInfo"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
