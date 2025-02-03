import { createContext, useContext, useState } from "react";
import { users } from "../db";
import { use } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  // * set email & password
  const [email, setEmail] = useState("prova1");
  const [password, setPassword] = useState("prova2");

  // * check if user is loggeds
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  // * hadler login
  const handleLogin = (currentEmail, currentPassword) => {
    const currentUser = users.find((user) => {
      return user.email == currentEmail && user.password == currentPassword;
    });

    if (!currentUser) {
      alert("Email o password errati");
    }

    if (currentUser) {
      setLoggedUser(currentUser);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        isLogged,
        setIsLogged,
        loggedUser,
        setLoggedUser,
        setEmail,
        setPassword,
        handleLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const loginContext = () => {
  return useContext(LoginContext);
};
