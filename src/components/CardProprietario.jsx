// COMPONENT EXPORT

export default function CardProprietario({ id, email, telefono, nome, cognome }) {
    return <>
        <div key={id} className='p-4 d-flex flex-column bg-light rounded-25 gap-3'>

            {/* NOME PROFILO */}
            <div className='d-flex align-items-center gap-3'>
                {/* ICONA LETTERA */}
                <div className='d-flex justify-content-center align-items-center bg-primary p-2 rounded-circle text-white font-weight-bold'>
                    {nome.charAt(0).toUpperCase()}
                </div>
                {/* NOME */}
                <h3>{nome} {cognome}</h3>
            </div>

            {/* CONTATTI */}
            <p>Telefono: <span className="text-primary">{telefono}</span></p>
            <p>Email: <span className="text-primary">{email}</span></p>

        </div>
    </>
}