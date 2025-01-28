// COMPONENT EXPORT

export default function ComfortsImmobile({ id, tipologia, num_stanze, num_letti, num_bagni, mq }) {

    let givenProps = true;

    if (!id && !tipologia && !num_stanze && !num_letti && !num_bagni && !mq) {
        givenProps = false;
    }

    return <>
        {givenProps &&
            <div key={id} className='cardComforts scheda'>
                <h3 className="cardComforts titoloLista">Comforts</h3>
                <div className="cardComforts listaComforts">
                    {/* TIPOLOGIA */}
                    {tipologia ? <p className="cardComforts comfort"><i className="fa-solid fa-house cardComforts icona"></i> {tipologia}</p> : ''}
                    {/* STANZE */}
                    {num_stanze ? <p className="cardComforts comfort"><i className="fa-solid fa-door-open cardComforts icona"></i> Stanze: {num_stanze}</p> : ''}
                    {/* LETTI */}
                    {num_letti ? <p className="cardComforts comfort"><i className="fa-solid fa-user cardComforts icona"></i> Posti letto: {num_letti}</p> : ''}
                    {/* BAGNI */}
                    {num_bagni ? <p className="cardComforts comfort"><i className="fa-solid fa-shower cardComforts icona"></i> Bagni: {num_bagni}</p> : ''}
                    {/* MQ */}
                    {mq ? <p className="cardComforts comfort"><i className="fa-solid fa-ruler cardComforts icona"></i> Metri quadri: {mq}</p> : ''}
                </div>
            </div>
        }
    </>
}