import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaultLayout/DefaultLayout";
import HomePage from "./Pages/HomePage";
import ImmobileShowPage from "./Pages/ImmobileShowPage";
import ImmobileStorePage from "./Pages/ImmobileStorePage";
import NotFound from "./Pages/NotFound";
import CardRecensione from "./Components/CardRecensione";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/:id" Component={ImmobileShowPage} />
          <Route path="/new" Component={ImmobileStorePage} />

          <Route path="*" Component={NotFound}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
