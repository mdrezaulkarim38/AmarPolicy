import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function AboutUs(){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="About Us" />
            
            <Footer />
        </div>
    );
}

export default AboutUs;