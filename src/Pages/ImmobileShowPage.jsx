// COMPONENTS IMPORT
import CardProprietario from "../components/CardProprietario";
import ComfortsImmobile from "../components/ComfortsImmobile";


// COMPONENT EXPORT
export default function ImmobileShowPage() {
  return (
    <>
      <div className="container">
        <h1>PAGINA DETTAGLIO IMMOBILE</h1>

        <CardProprietario
          id="1"
          email="esempio@esempio.it"
          telefono="1234567890"
          nome="Camillo"
          cognome="Rosanio"
        />

        <ComfortsImmobile
          id='1'
          tipologia='Villetta'
          num_stanze='5'
          num_letti='5'
          num_bagni='3'
          mq='120'
        />
      </div>
    </>
  );
}
