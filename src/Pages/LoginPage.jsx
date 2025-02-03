// ! importo il context
import { Link } from "react-router-dom";
import { loginContext } from "../assets/contexts/loginContext";
import { useState, useEffect } from "react";

export default function LoginPage() {
  let { setEmail, setPassword, handleLogin, loggedUser } = loginContext();
  //   const [isDisplayedLogin, setIsDisplayedLogin] = useState("");
  //   const [isDisplayedButtonHome, setIsDisplayedButtonHome] = useState("d-none");

  //   const isDisplayed = () => {
  //     if (loggedUser) {
  //       setIsDisplayedButtonHome("");
  //       setIsDisplayedLogin("d-none");
  //     }
  //   };

  loggedUser &&
    setTimeout(() => {
      // window.open("/", "_self");
      history.back();
    }, 2000);

  // * handle form submit
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmail(email);
    setPassword(password);

    handleLogin(email, password);
  };

  return (
    <div className="container login-flex-container">
      <div className={`login-page-container ${loggedUser ? "d-none" : ""}`}>
        <h1 className="text-center mt-5">Login</h1>

        <div className="form-container mt-5">
          <form action="" onSubmit={handleSubmitForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>

      <div
        className={`back-to-hompage-container-login ${
          loggedUser ? "" : "d-none"
        }`}
      >
        <div className="check-login-container mb-2">
          <i class="fa-solid fa-check"></i>
        </div>
        <h2 className="mb-5">Accesso eseguito con successo</h2>
        {/* <Link to={"/"} className={`back-to-homepage btn btn-primary`}>
          <button className={`back-to-homepage btn btn-primary`}>
            Torna alla Homepage
          </button>
        </Link> */}
      </div>
    </div>
  );
}
