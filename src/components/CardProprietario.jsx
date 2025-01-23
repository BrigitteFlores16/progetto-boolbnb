// COMPONENT EXPORT

export default function CardProprietario({ id, email, telefono, nome, cognome }) {
    return <>
        <div key={id} className='cardProprietario scheda'>

            {/* NOME PROFILO */}
            <div className='cardProprietario profilo'>
                {/* ICONA LETTERA */}
                <div className='cardProprietario profiloIcona'>
                    <span className="cardProprietario circle">{nome.charAt(0).toUpperCase()}</span>
                </div>
                {/* NOME */}
                <h3 className="cardProprietario profiloNome">{nome} {cognome}</h3>
            </div>

            {/* CONTATTI */}
            <p className="cardProprietario contatti">Telefono: <span className="cardProprietario contattiInfo">{telefono}</span></p>
            <p className="cardProprietario contatti">Email: <span className="cardProprietario contattiInfo">{email}</span></p>

        </div>
    </>
}