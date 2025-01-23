import ImmobileCard from "../Components/ImmobileCard";

// COMPONENTS IMPORT
import CardProprietario from "../components/CardProprietario";

// COMPONENT EXPORT

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>

      <CardProprietario
        id="1"
        email="esempio@esempio.it"
        telefono="1234567890"
        nome="Camillo"
        cognome="Rosanio"
      />
    </>
  );
}
