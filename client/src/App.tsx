import { Route, Routes } from "react-router-dom";
import "./assets/users/assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/users/Home";
import HealthInsurance from "./pages/users/HealthInsurance";
import TravelInsurance from "./pages/users/TravelInsurance";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import FireInsurance from "./pages/users/FireInsurance";
import MarineInsurance from "./pages/users/MarineInsurance";
import GroupInsurance from "./pages/users/GroupInsurance";
import LifeInsurance from "./pages/users/LifeInsurance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/health-insurance" element={<HealthInsurance />} />
      <Route path="/travel-insurance" element={<TravelInsurance />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/fire-insurance" element={<FireInsurance />} />
      <Route path="/marine-insurance" element={<MarineInsurance />} />
      <Route path="/group-insurance" element={<GroupInsurance />} />
      <Route path="/life-insurance" element={<LifeInsurance />} />
    </Routes>
  );
}

export default App;
