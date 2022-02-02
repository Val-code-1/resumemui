import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Box } from "@mui/material";
import Home from "./screens/Home/Home";
import "./App.css";
import PersistentDrawerLeft from "./screens/MUI/PersistentLeftDrawer";

function App() {
  const pageContent = (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
  return (
    <Router>
      <PersistentDrawerLeft pageContent={pageContent} />
    </Router>
  );
}

export default App;
