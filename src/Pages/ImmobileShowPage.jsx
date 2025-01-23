// COMPONENTS IMPORT
import CardProprietario from "../components/CardProprietario";


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
      </div>
    </>
  );
}
