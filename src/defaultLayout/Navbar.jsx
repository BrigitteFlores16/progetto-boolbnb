import { Link, NavLink } from "react-router-dom";
// * importo il context e il bd utenti
import { loginContext } from "../assets/contexts/loginContext";
import { useState, useEffect } from "react";
import { users } from "../assets/db";

export default function Navbar() {
  // * handleClickUserMenu
  const [isActive, setIsActive] = useState(false);
  const handleClickUserMenu = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  // * handleLogout
  const handleLogout = () => {
    setIsLogged(false);
    setLoggedUser();
    setIsActive(false);
  };

  // * destrutturo email e password dal context
  let { email, password, isLogged, setIsLogged, loggedUser, setLoggedUser } =
    loginContext();

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-white border-bottom border-dark-subtle py-4 ">
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
            <i className="menu-icon fa-solid fa-bars"></i>
            {/* <div className="user-icon d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-user"></i>
            </div> */}
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/search">
                  Ricerca
                </NavLink>
              </li>
              {/* __________cambiato classe elemento____________ */}
              <li className={`nav-item ${isLogged ? "" : "d-none"}`}>
                <NavLink className="nav-link" to="/new">
                  Inserisci immobile
                </NavLink>
              </li>

              {/* ! Login // aggiungo il link alla pagina di login */}
              {isLogged == true && (
                <li className="nav-item" onClick={handleClickUserMenu}>
                  <NavLink className={`nav-link`} to="#" aria-disabled="true">
                    {loggedUser.name}
                  </NavLink>
                </li>
              )}
              {isLogged == false && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                    aria-disabled="true"
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>

            <div
              className={`user-menu-container ${isActive ? "" : "d-none"} ${
                isLogged ? "" : "d-none"
              }`}
            >
              <div className="user-icon d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="user-menu">
                <ul>
                  <li>
                    <div>
                      <span>{loggedUser && loggedUser.name}</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>{loggedUser && loggedUser.email}</span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="logout mt-3 text-center"
                      onClick={handleLogout}
                    >
                      <span>Logout</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-space"></div>
    </>
  );
}
