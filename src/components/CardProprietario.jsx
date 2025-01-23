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
            <p className="cardProprietario contatti">Telefono: <a className="cardProprietario contattiInfo" href={`tel:${telefono}`}>{telefono}</a></p>
            <p className="cardProprietario contatti">Email: <a className="cardProprietario contattiInfo" href={`mailto:${email}`}>{email}</a></p>

        </div>
    </>
}