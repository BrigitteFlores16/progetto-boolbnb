import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaultLayout/DefaultLayout";
import HomePage from "./Pages/HomePage";
import CardRecensioni from "./card_recensioni";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="recensioni" element={<CardRecensioni />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
