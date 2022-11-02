import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Booklist from "./components/Booklist";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import BookDetails from "./components/BookDetails";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" elements={<Booklist />} />
        <Route path="/book/:id" elements={<BookDetails />} />
        <Route path="/book/favorites" elements={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}
