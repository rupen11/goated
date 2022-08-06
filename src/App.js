// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Prefernces from "./modules/Prefernces";
import Terms from "./modules/Terms";
import Funding from "./modules/Funding";
import FundingSuccess from "./modules/FundingSuccess";
import NavbarMain from "./components/NavbarMain";
import Home from "./modules/Home/Home";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarMain />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/prefernces" element={<Prefernces />} />
        <Route exact path="/funding" element={<Funding />} />
        <Route exact path="/fundingsuccess" element={<FundingSuccess />} />
      </Routes>
    </>
  );
}

export default App;
