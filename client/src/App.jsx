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
// import PrivateRoute from "./routes/PrivateRoute.jsx";
import MTSpeedoz from "./pages/users/MTSpeedoz.jsx";
import Gearx from "./pages/users/Gearx.jsx";
import ARHelmets from "./pages/users/ARHelmets.jsx";
import FreedConn from "./pages/users/FreedConn.jsx";
import Blog from "./pages/users/Blog.jsx";
import AboutUs from "./pages/users/AboutUs.jsx";
import FAQ from "./pages/users/FAQ.jsx";
import TermsAndService from "./pages/users/TermsAndService.jsx";
import InsuranceBlogPage from "./pages/users/InsuranceBlogPage.jsx";
import InsuranceBlogPageCompare from "./pages/users/InsuranceBlogPageCompare.jsx";
import InsuranceBlogPageAI from "./pages/users/InsuranceBlogPageAI.jsx";
import NewsMotor from "./pages/users/NewsMotor.jsx";
import NewsCar from "./pages/users/NewsCar.jsx";
import NewsAccident from "./pages/users/NewsAccident.jsx";

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
                <Route path="/mt-speedoz" element={<MTSpeedoz />} />
                <Route path="/gearx" element={<Gearx />} />
                <Route path="/ar-helmets" element={<ARHelmets />} />
                <Route path="/freedconn" element={<FreedConn />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms-and-service" element={<TermsAndService />} />
                <Route path="/InsuranceBlogPage" element={<InsuranceBlogPage />} />
                <Route path="/InsuranceBlogPageAI" element={<InsuranceBlogPageAI />} />
                <Route path="/InsuranceBlogPageCompare" element={<InsuranceBlogPageCompare />} />
                <Route path="/news1" element={<NewsMotor />} />
                <Route path="/news2" element={<NewsCar />} />
                <Route path="/news3" element={<NewsAccident />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;