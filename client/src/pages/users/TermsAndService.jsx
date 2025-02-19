import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function TermsAndService(){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Terms And Services" />
            <Footer />
        </div>
    );
}

export default TermsAndService;