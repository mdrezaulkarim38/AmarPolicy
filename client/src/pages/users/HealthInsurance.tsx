import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function HealthInsurance(){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Health Insurance" />
            <h2>This is Health Insurance Page</h2>
            <Footer />
        </div>
    );
}

export default HealthInsurance;