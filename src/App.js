import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Prefernces from "./modules/Prefernces";
import Terms from "./modules/Terms";
import Funding from "./modules/Funding/Funding";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Terms />} />
        <Route exact path="/prefernces" element={<Prefernces />} />
        <Route exact path="/funding" element={<Funding />} />
      </Routes>
    </>
  );
}

export default App;
