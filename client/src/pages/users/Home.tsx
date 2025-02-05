import FeaturedPolicy from "../../components/users/FeaturesPolicy";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import HomeBanner from "../../components/users/HomeBanner";
import HowWorks from "../../components/users/HowWorks";
import InsuranceList from "../../components/users/InsuranceList";

function Home() {
  return (
    <div className="main-wrapper">
      <Header />
      <FeaturedPolicy />
      <HomeBanner />
      <HowWorks />
      <InsuranceList />
      <Footer />
    </div>
  );
}

export default Home;
