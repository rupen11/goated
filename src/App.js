// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Prefernces from "./modules/Prefernces";
import Terms from "./modules/Terms";
import Funding from "./modules/Funding";
import FundingSuccess from "./modules/FundingSuccess";
import NavbarMain from "./components/NavbarMain";
import Home from "./modules/Home/Home";
import MarketDetail from "./modules/MarketDetail";
import Sidebar from "./components/Sidebar";
import './App.css'
import Account from "./modules/Account";

function App() {
  return (
    <div className="main">
      {/* <Navbar /> */}
      <NavbarMain />
      <div className="main_left">
        <Sidebar />
      </div>
      <div className="main_right">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/prefernces" element={<Prefernces />} />
          <Route exact path="/funding" element={<Funding />} />
          <Route exact path="/fundingsuccess" element={<FundingSuccess />} />
          <Route exact path="/marketdetail" element={<MarketDetail />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
