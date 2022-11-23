import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import FourOhFour from "./components/FourOhFour";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}

export default App;
