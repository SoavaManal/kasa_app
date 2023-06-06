import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Lodgings from "./Pages/Lodgings";

function App() {
  <>
    <Routes>
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodgings/:id" element={<Lodgings />} />
    </Routes>
  </>;
}

export default App();
