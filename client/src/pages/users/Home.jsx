import FeaturedPolicy from "../../components/users/FeaturedPolicy";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import HomeBanner from "../../components/users/HomeBanner";
import HowWorks from "../../components/users/HowWorks";
import InsuranceList from "../../components/users/InsuranceList";
import MobileApp from "../../components/users/MobileApp";
// import OurClient from "../../components/users/OurClient";
import RequestCallForm from "../../components/users/RequestCallForm";
import SmeCorporate from "../../components/users/SmeCorporate";
import UpdateNews from "../../components/users/UpdateNews";
import WhyChoose from "../../components/users/WhyChoose";

function Home() {
    return (
        <div className="main-wrapper">
            <Header />
            <HomeBanner />
            <InsuranceList />
            <RequestCallForm />
            <SmeCorporate />
            <HowWorks />
            <MobileApp />
            <FeaturedPolicy />
            <WhyChoose />
            {/* <OurClient /> */}
            <UpdateNews />
            <Footer />
        </div>
    );
}

export default Home;