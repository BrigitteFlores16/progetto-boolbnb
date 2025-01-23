// COMPONENT EXPORT

export default function CardProprietario({ id, email, telefono, nome, cognome }) {
    return <>
        <div key={id} className='debug'>

            {/* NOME PROFILO */}
            <div className='debug'>
                {/* ICONA LETTERA */}
                <div className='debug'>
                    icona lettera {nome.charAt(0).toUpperCase()}
                </div>
                {/* NOME */}
                <h3 className="debug">{nome} {cognome}</h3>
            </div>

            {/* CONTATTI */}
            <p className="debug">Telefono: <span className="debug">{telefono}</span></p>
            <p className="debug">Email: <span className="debug">{email}</span></p>

        </div>
    </>
}