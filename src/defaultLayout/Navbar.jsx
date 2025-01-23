import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="src/assets/logos/boolbnb.png"
              alt="Boolbnb logo"
              className="logo"
            />
          </Link>

          <button
            className="nav-toggler d-flex align-items-center justify-content-between d-lg-none"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="menu-icon fa-solid fa-bars me-2"></i>
            <div className="user-icon d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-user"></i>
            </div>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Ricerca 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to="/">
                  Inserisci immobile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
