import BlogListComponent from "../../components/users/BloglistComponent";
import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function Blog() {
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Blog" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <BlogListComponent />

            <div className="blog-list mb-4">
              <div className="blog-thumb">
                <a href="https://bimafy.com/blog/top-destinations-for-bangladeshi-travelers-and-how-to-ensure-your-trip-is-covered-">
                  <img
                    src="https://bimafy.com/images/frontend/blog-default-image.jpg"
                    className="img-fluid custom-img-size"
                    alt="Top Destinations for Bangladeshi Travelers and How to Ensure Your Trip is Covered"
                    title="Top Destinations for Bangladeshi Travelers and How to Ensure Your Trip is Covered"
                  />
                </a>
              </div>
              <div className="blog-content mt-3">
                <ul className="blog-meta list-inline">
                  <li className="meta-date list-inline-item">2024-09-19 15:30:00</li>
                </ul>
                <h3 className="title">
                  <a href="https://bimafy.com/blog/top-destinations-for-bangladeshi-travelers-and-how-to-ensure-your-trip-is-covered-">
                    Top Destinations for Bangladeshi Travelers and How to Ensure Your Trip is Covered
                  </a>
                </h3>
                <div className="reading-time">
                  <span>Reading Time: </span><span>3 minutes</span>
                </div>
                <p>
                  As global travel becomes more accessible, many Bangladeshi travelers are exploring destinations both near and far. Whether it’s a pilgrimage, a leisure trip, or an adventure, it’s important to ensure that your trip is protected by comprehensive t...
                </p>
              </div>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center">
              <nav>
                <ul className="pagination">
                  <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                    <span className="page-link" aria-hidden="true">‹</span>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="https://bimafy.com/blog?page=2">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="https://bimafy.com/blog?page=3">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="https://bimafy.com/blog?page=2" rel="next" aria-label="Next »">›</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-md-12">
            <div className="blog-sidebar">
              <h5 className="widget-title">Tags</h5>
              <ul className="list-unstyled">
                <li><a href="https://bimafy.com/blog-tag/travel-insurance" className="badge badge-primary">Travel Insurance</a></li>
                <li><a href="https://bimafy.com/blog-tag/certified-helmet" className="badge badge-primary">Certified Helmet</a></li>
                <li><a href="https://bimafy.com/blog-tag/travel-policy" className="badge badge-primary">Travel Policy</a></li>
                <li><a href="https://bimafy.com/blog-tag/health-coverage" className="badge badge-primary">Health Coverage</a></li>
                <li><a href="https://bimafy.com/blog-tag/origine-helmets" className="badge badge-primary">Origine Helmets</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
