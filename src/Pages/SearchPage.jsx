import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const parametro = location.state?.parametro;
  return (
    <>
      <div className="container">
        <h1>{"Pagina di ricerca"}</h1>
        <h2>{parametro || ""}</h2>
      </div>
    </>
  );
}
