import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import LearnAboutAmarPolicy from "../../components/users/LearnAboutAmarPolicy";
import OurClient from "../../components/users/OurClient";
import WhyChoose from "../../components/users/WhyChoose";

function AboutUs(){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="About Us" />
            <LearnAboutAmarPolicy />
            <WhyChoose />
            <OurClient />
            <Footer />
        </div>
    );
}

export default AboutUs;