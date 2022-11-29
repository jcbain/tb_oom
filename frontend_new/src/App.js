import { Routes, Route } from "react-router-dom";

import FourOhFour from "./components/FourOhFour";

function App() {
  return (
    <Routes>
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}

export default App;
