import BookDoctor from "../../components/users/BookDoctor";
import Features from "../../components/users/Features";
import FeaturedPolicy from "../../components/users/FeaturesPolicy";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import HomeBanner from "../../components/users/HomeBanner";
import HowWorks from "../../components/users/HowWorks";
import Specialties from "../../components/users/Specialties";

function Home() {
  return (
    <div className="main-wrapper">
      <Header />
      <FeaturedPolicy />
      <HomeBanner />
      <HowWorks />
      <Specialties />
      <BookDoctor />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
