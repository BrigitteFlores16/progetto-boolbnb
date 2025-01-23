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

        <ComfortsImmobile />
      </div>
    </>
  );
}
