import Breadcrumb from "../../components/users/Breadcrumb";
import FaqButton from "../../components/users/FaqButton";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function HealthInsurance(){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Health Insurance" />
            <div className="container">
                <div className="row">
                    <FaqButton />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HealthInsurance;