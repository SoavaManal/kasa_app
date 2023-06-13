import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Lodgings from "./Pages/Lodgings/Lodgings";

export default function App() {
  <>
    <Routes>
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodgings/:id" element={<Lodgings />} />
    </Routes>
  </>;
}
