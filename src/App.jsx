import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaultLayout/DefaultLayout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
