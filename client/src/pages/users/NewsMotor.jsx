import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function NewsMotor() {
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="News Page Details"></Breadcrumb>
      <div className="container">
        <div className="news-container">
          <h1 className="news-title">Motorcycle Insurance</h1>
          <h2 className="news-subtitle">
            Accident Insurance for Motorcycle Users
          </h2>
          <p className="news-content">
            Motorcycle insurance is crucial for protecting riders against the
            financial implications of accidents. This insurance provides
            coverage for various incidents, including collisions, theft, and
            property damage. Riders should consider the different types of
            coverage available to ensure they are adequately protected on the
            road.
          </p>

          <h3 className="section-title">Types of Coverage</h3>
          <ul className="coverage-list">
            <li>
              <strong>Liability Coverage:</strong> Covers injuries and damages
              you cause to others in an accident.
            </li>
            <li>
              <strong>Collision Coverage:</strong> Pays for damage to your
              motorcycle resulting from a collision, regardless of who is at
              fault.
            </li>
            <li>
              <strong>Comprehensive Coverage:</strong> Protects against
              non-collision incidents, such as theft, vandalism, or natural
              disasters.
            </li>
            <li>
              <strong>Uninsured/Underinsured Motorist Coverage:</strong> Offers
              protection if you&apos;re involved in an accident with a driver
              who lacks adequate insurance.
            </li>
          </ul>

          <h3 className="section-title">Benefits of Motorcycle Insurance</h3>
          <p className="news-content">
            Having the right motorcycle insurance can provide numerous benefits,
            including:
          </p>
          <ul className="benefits-list">
            <li>Financial protection from costly repairs and medical bills.</li>
            <li>
              Peace of mind knowing you&apos;re covered in case of accidents.
            </li>
            <li>
              Potential discounts for safe driving or taking safety courses.
            </li>
            <li>Legal protection against liability claims.</li>
          </ul>

          <h3 className="section-title">Tips for Choosing Insurance</h3>
          <p className="news-content">
            When selecting a motorcycle insurance policy, consider the following
            tips:
          </p>
          <ul className="tips-list">
            <li>
              Assess your riding habits and choose coverage that fits your
              needs.
            </li>
            <li>
              Compare quotes from multiple insurers to find the best rate.
            </li>
            <li>
              Review policy terms carefully to understand exclusions and limits.
            </li>
            <li>Consult with an insurance agent for personalized advice.</li>
          </ul>

          <h3 className="call-to-action">Get Insured Today!</h3>
          <p className="news-content">
            Don’t wait until it’s too late. Ensure you have the right coverage
            to protect yourself and your motorcycle. Contact an insurance
            provider today to learn more about your options and get a quote.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NewsMotor;
