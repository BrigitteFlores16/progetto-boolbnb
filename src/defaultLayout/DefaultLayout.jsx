import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Components/Footer";

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
