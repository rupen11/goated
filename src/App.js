import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Prefernces from "./modules/Prefernces";
import Terms from "./modules/Terms";
import Funding from "./modules/Funding/Funding";
import FundingSuccess from "./modules/FundingSuccess";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Terms />} />
        <Route exact path="/prefernces" element={<Prefernces />} />
        <Route exact path="/funding" element={<Funding />} />
        <Route exact path="/fundingsuccess" element={<FundingSuccess />} />
      </Routes>
    </>
  );
}

export default App;
