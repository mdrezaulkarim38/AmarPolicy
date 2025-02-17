import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function Blog() {
  return (
    <><div className="main-wrapper">
          <Header />
          <Breadcrumb pageName="Blog" />
          <div className="container mt-4">
              <h2 className="mb-4">Latest Blog Posts</h2>
              <div className="row">
                  <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100">
                          <img
                              src="https://bimafy.com/images/blogs/blog1.jpg"
                              className="card-img-top"
                              alt="Travel Insurance" />
                          <div className="card-body">
                              <h5 className="card-title">
                                  A Comprehensive Guide to Travel Insurance in Bangladesh
                              </h5>
                              <p className="text-muted small">January 29, 2024 | Bimafy</p>
                              <p className="card-text">
                                  Travel insurance in Bangladesh is an important financial safety
                                  net...
                              </p>
                              <a
                                  href="https://bimafy.com/blog/a-comprehensive-guide-to-travel-insurance-in-bangladesh"
                                  className="btn btn-primary"
                              >
                                  Read More
                              </a>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100">
                          <img
                              src="https://bimafy.com/images/blogs/blog2.jpg"
                              className="card-img-top"
                              alt="Health Insurance" />
                          <div className="card-body">
                              <h5 className="card-title">
                                  Best Health Insurance Policy in Bangladesh
                              </h5>
                              <p className="text-muted small">January 16, 2024 | Bimafy</p>
                              <p className="card-text">
                                  Health insurance provides coverage for medical expenses...
                              </p>
                              <a
                                  href="https://bimafy.com/blog/best-health-insurance-policy-in-bangladesh"
                                  className="btn btn-primary"
                              >
                                  Read More
                              </a>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100">
                          <img
                              src="https://bimafy.com/images/blogs/blog3.jpg"
                              className="card-img-top"
                              alt="Car Insurance" />
                          <div className="card-body">
                              <h5 className="card-title">Best Car Insurance in Bangladesh</h5>
                              <p className="text-muted small">January 10, 2024 | Bimafy</p>
                              <p className="card-text">
                                  Car insurance is essential for financial protection against
                                  vehicle damages...
                              </p>
                              <a
                                  href="https://bimafy.com/blog/best-car-insurance-in-bangladesh"
                                  className="btn btn-primary"
                              >
                                  Read More
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div><Footer /></>
  );
}

export default Blog;
