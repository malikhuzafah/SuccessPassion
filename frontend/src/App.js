import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MenuBar from "./components/MenuBar/MenuBar";
import Insights from "./pages/Insights/Insights";
import Industries from "./pages/Industries/Industries";
import Services from "./pages/Services/Services";
import Careers from "./pages/Careers/Careers";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import BusinessPerformance from "./pages/Insights/BusinessPerformance";
import BusinessProtection from "./pages/Insights/BusinessProtection";
import DigitalAdoption from "./pages/Insights/DigitalAdoption";
import RegulatoryChanges from "./pages/Insights/RegulatoryChanges";
import FinancialServices from "./pages/Industries/FinancialServices";
import WhoWeAre from "./pages/About/WhoWeAre";
import Retail from "./pages/Industries/Retail";
import Advisory from "./pages/Services/Advisory";
import DigitalLighthouse from "./pages/Services/DigitalLighthouse";
import AuditAndAssurance from "./pages/Services/AuditAndAssurance";
import PrivateEnterprise from "./pages/Services/PrivateEnterprise";
import Offices from "./pages/About/Offices";
import Tax from "./pages/Services/Tax";
import StrategicAlliances from "./pages/About/StrategicAlliances";
import axios from "axios";

function App() {
  const [user, setUser] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleLogin = (email, password) => {
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3001/api/users/login", userData)
      .then((res) => {
        localStorage.setItem("token", res.data);
        setUser(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = (email, name, password) => {
    const userData = {
      email: email,
      name: name,
      password: password,
    };
    axios
      .post("http://localhost:3001/api/users/register", userData)
      .then((res) => {
        localStorage.setItem("token", res.data);
        setUser(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Router>
      <div>
        <MenuBar />
        <div>
          <Routes>
            <Route
              path="/about"
              element={
                <About handleLogin={handleLogin} handleSignup={handleSignup} />
              }
            ></Route>
            <Route
              path="/home/about/strategic-alliances"
              element={<StrategicAlliances />}
            ></Route>
            <Route path="/home/about/offices" element={<Offices />}></Route>
            <Route path="/home/about/who-we-are" element={<WhoWeAre />}></Route>
            <Route
              path="/home/insights/business-performance"
              element={<BusinessPerformance />}
            ></Route>
            <Route
              path="/home/insights/business-protection"
              element={<BusinessProtection />}
            ></Route>
            <Route
              path="/home/insights/digital-adoption"
              element={<DigitalAdoption />}
            ></Route>
            <Route
              path="/home/insights/regulatory-changes"
              element={<RegulatoryChanges />}
            ></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route
              path="/home/services/advisory"
              element={<Advisory />}
            ></Route>
            <Route
              path="/home/services/digital-lighthouse"
              element={<DigitalLighthouse />}
            ></Route>
            <Route
              path="/home/services/audit-and-assurance"
              element={<AuditAndAssurance />}
            ></Route>
            <Route
              path="/home/services/private-enterprise"
              element={<PrivateEnterprise />}
            ></Route>
            <Route path="/home/services/tax" element={<Tax />}></Route>
            <Route path="/industries" element={<Industries />}></Route>
            <Route
              path="/home/industries/financial-services"
              element={<FinancialServices />}
            ></Route>
            <Route path="/home/industries/retail" element={<Retail />}></Route>
            <Route path="/insights" element={<Insights />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
