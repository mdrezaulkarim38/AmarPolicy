import FeaturedPolicy from "../../components/users/FeaturesPolicy";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import HomeBanner from "../../components/users/HomeBanner";
import HowWorks from "../../components/users/HowWorks";
import InsuranceList from "../../components/users/InsuranceList";
import MobileApp from "../../components/users/MobileApp";
import OurClient from "../../components/users/OurClient";
import RequestCallForm from "../../components/users/RequestCallForm";
import SmeCorporate from "../../components/users/SmeCorporate";

function Home() {
  return (
    <div className="main-wrapper">
      <Header />
      <FeaturedPolicy />
      <HomeBanner />
      <HowWorks />
      <InsuranceList />
      <MobileApp />
      <OurClient />
      <RequestCallForm />
      <SmeCorporate />
      <Footer />
    </div>
  );
}

export default Home;
