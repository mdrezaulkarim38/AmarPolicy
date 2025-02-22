import { Link } from "react-router-dom";
import Header from "../../components/users/Header";
import Footer from "../../components/users/Footer";
import Breadcrumb from "../../components/users/Breadcrumb";

const InsuranceBlogPage = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Top Rated Insurance Companies" />
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <header className="text-center mb-4">
              <h1 className="h3 font-weight-bold">
                Top Rated Insurance Companies
              </h1>
              <p className="text-muted">
                Ensuring security and reliability with the best insurance
                providers.
              </p>
            </header>
            <div className="card shadow-lg rounded">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Our Commitment to Excellence</h2>
              </div>
              <div className="card-body">
                <p className="text-muted">
                  We are aligned with top-rated insurance companies that have a
                  proven track record of providing security and trust. Our
                  partnerships ensure that you receive the best coverage
                  tailored to your needs, backed by companies known for their
                  financial stability and customer-centric approach.
                </p>
                <h3 className="h6 font-weight-bold mt-4">
                  Why Choose These Companies?
                </h3>
                <ul className="list-unstyled text-muted">
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Proven history of customer satisfaction
                  </li>
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Comprehensive and customizable policies
                  </li>
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Quick and transparent claims processing
                  </li>
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Strong financial backing for long-term security
                  </li>
                </ul>
                <h3 className="h6 font-weight-bold mt-4">
                  Ensuring Your Peace of Mind
                </h3>
                <p className="text-muted">
                  Choosing a top-rated insurance company means safeguarding your
                  future with reliable and efficient services. Whether it’s for
                  health, home, or business, our trusted partners provide
                  policies that cater to all your requirements. Our
                  collaboration ensures that you get the best value, unmatched
                  support, and a hassle-free experience.
                </p>
                <Link to="/" className="btn btn-primary btn-block mt-4">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InsuranceBlogPage;
