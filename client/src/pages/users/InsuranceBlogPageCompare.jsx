import { Link } from "react-router-dom";
import Header from "../../components/users/Header";
import Footer from "../../components/users/Footer";
import Breadcrumb from "../../components/users/Breadcrumb";

const InsuranceBlogPageCompare = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Compare Top Insurance Companies" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <header className="text-center mb-4">
              <h1 className="h3 font-weight-bold">
                Compare Top Insurance Companies
              </h1>
              <p className="text-muted">
                Easily compare the best insurance providers and choose the right one for you.
              </p>
            </header>
            <div className="card shadow-lg rounded">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Find the Best Insurance for Your Needs</h2>
              </div>
              <div className="card-body">
                <p className="text-muted">
                  We provide a detailed comparison of the top insurance companies, helping you choose the best policy for your needs. Compare coverage, benefits, pricing, and customer reviews all in one place.
                </p>
                <h3 className="h6 font-weight-bold mt-4">
                  Why Compare Insurance Companies?
                </h3>
                <ul className="list-unstyled text-muted">
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Get the best value for your money
                  </li>
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Find policies that suit your unique needs
                  </li>
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Save time by accessing all details in one place
                  </li>
                  <li>
                    <i className="text-success fas fa-check-circle mr-2"></i>{" "}
                    Make an informed decision with expert insights
                  </li>
                </ul>
                <h3 className="h6 font-weight-bold mt-4">
                  Choose Wisely, Stay Protected
                </h3>
                <p className="text-muted">
                  Selecting the right insurance company is crucial for your financial security. Our comparison tool helps you analyze top-rated providers, ensuring you make the best choice for your future.
                </p>
                <Link to="/" className="btn btn-primary btn-block mt-4">
                  Compare Now
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

export default InsuranceBlogPageCompare;
