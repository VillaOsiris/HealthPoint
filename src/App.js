import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/navbar";
import Footer from "./Components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Events from "./pages/events";
import Contact from "./pages/contact";
import Error from "./pages/error";
import "./Styles/main.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
