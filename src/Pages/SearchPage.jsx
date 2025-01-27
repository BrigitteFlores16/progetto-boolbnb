import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const filter = location.state?.filter;
  return (
    <>
      <div className="container">
        <h1>{"Pagina di ricerca"}</h1>
        <h2>
          {filter || "se scrivi qualcosa nella barra di ricerca, appare qui"}
        </h2>
      </div>
    </>
  );
}
