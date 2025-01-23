import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaultLayout/DefaultLayout";
import HomePage from "./Pages/HomePage";
<<<<<<< HEAD
import CardRecensioni from "./card_recensioni";
=======
import ImmobileShowPage from "./Pages/ImmobileShowPage";
import ImmobileStorePage from "./Pages/ImmobileStorePage";
import NotFound from "./Pages/NotFound";
>>>>>>> 8d448bf24fd2b3f7a5d31d49c3a53352bb56b2e4

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
<<<<<<< HEAD
          <Route path="recensioni" element={<CardRecensioni />} />{" "}
=======
          <Route path="/:id" Component={ImmobileShowPage} />
          <Route path="/new" Component={ImmobileStorePage} />

          <Route path="*" Component={NotFound}></Route>
>>>>>>> 8d448bf24fd2b3f7a5d31d49c3a53352bb56b2e4
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
