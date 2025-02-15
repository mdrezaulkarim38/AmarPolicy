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
import MotorcycleInsurance from "./pages/users/MotorcycleInsurance";
import AccidentInsurance from "./pages/users/AccidentInsurance";
import CarInsurance from "./pages/users/CarInsurance";
import { AuthProvider } from "./context/AuthContext";
import Product from "./pages/users/Product";
import Enrollments from "./pages/users/Enrollments";
import Speedoz from "./pages/users/speedoz";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/health-insurance" element={<HealthInsurance />} />
                <Route path="/travel-insurance" element={<TravelInsurance />} />
                <Route path="/fire-insurance" element={<FireInsurance />} />
                <Route path="/marine-insurance" element={<MarineInsurance />} />
                <Route path="/group-insurance" element={<GroupInsurance />} />
                <Route path="/life-insurance" element={<LifeInsurance />} />
                <Route path="/motorcycle-insurance" element={<MotorcycleInsurance />} />
                <Route path="/accident-insurance" element={<AccidentInsurance />} />
                <Route path="/car-insurance" element={<CarInsurance />} />
                <Route path="/product" element={<Product />} />
                <Route path="/enrollments" element={<Enrollments />} />
                <Route path="/speedoz" element={<Speedoz />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;