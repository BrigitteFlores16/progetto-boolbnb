import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaultLayout/DefaultLayout";
import HomePage from "./Pages/HomePage";
import ImmobileShowPage from "./Pages/ImmobileShowPage";
import ImmobileStorePage from "./Pages/ImmobileStorePage";
import SearchPage from "./Pages/SearchPage";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage"; // importo la pagina di login

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/:id" Component={ImmobileShowPage} />
          <Route path="/search" Component={SearchPage} />
          <Route path="/new" Component={ImmobileStorePage} />
          <Route path="/login" Component={LoginPage} />

          <Route path="*" Component={NotFound}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
