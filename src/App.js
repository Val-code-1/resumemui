import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Portfolio from "./screens/Portfolio/Portfolio";
import "./App.css";
import PersistentDrawerLeft from "./screens/MUI/PersistentLeftDrawer";

function App() {
  const pageContent = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
  );
  return (
    <Router>
      <PersistentDrawerLeft pageContent={pageContent} />
    </Router>
  );
}

export default App;
