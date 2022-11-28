import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import FourOhFour from "./components/FourOhFour";
import KillerWhales from "./components/KillerWhales";
import Info from "./components/Info";
import LolWut from "./components/LolWut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/killerwhales" element={<KillerWhales />} />
      <Route path="/info" element={<Info />} />
      <Route path="/lolwut" element={<LolWut />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}

export default App;
