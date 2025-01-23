// COMPONENT EXPORT

export default function CardProprietario({ id, email, telefono, nome, cognome }) {
    return <>
        <div key={id} className='p-2 d-flex flex-column'>

            {/* NOME PROFILO */}
            <div className='d-flex justify-content-center align-items-center'>
                {/* ICONA LETTERA */}
                <div className='d-flex justify-content-center align-items-center'>
                    {nome.charAt(0).toUpperCase()}
                </div>
                {/* NOME */}
                <h3>{nome} {cognome}</h3>
            </div>

            {/* CONTATTI */}
            <p>Telefono: {telefono}</p>
            <p>Email: {email}</p>

        </div>
    </>
}