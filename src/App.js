import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import History from "./screens/History/History";
import Portfolio from "./screens/Portfolio/Portfolio";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import "./App.css";
import PersistentDrawerLeft from "./screens/MUI/PersistentLeftDrawer";

function App() {
  const pageContent = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="history" element={<History />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
  return (
    <Router>
      <PersistentDrawerLeft pageContent={pageContent} />
    </Router>
  );
}

export default App;
