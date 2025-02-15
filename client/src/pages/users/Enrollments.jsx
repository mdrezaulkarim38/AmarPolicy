import Breadcrumb from "../../components/users/Breadcrumb";
import Contact from "../../components/users/Contact";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import OurClient from "../../components/users/OurClient";

function Enrollments () {
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Insurance Coverage Activation" />
            <div className="section">

            </div>
            <Contact contactTile="Get In Touch" />
            <OurClient />
            <Footer />
        </div>
    );
}

export default Enrollments;