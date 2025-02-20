import { useNavigate } from "react-router-dom"; // If using React Router

function Plan() {
  const navigate = useNavigate(); // React Router for navigation

  return (
    <div className="content d-flex justify-content-center align-items-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          {/* Back Button */}
          <div className="col-12">
            <a href="#" onClick={() => navigate(-1)} className="text-primary font-weight-bold">
              ← Go Back
            </a>
          </div>

          {/* Main Quote Card */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="row text-center">
                  {[
                    { title: "Purpose", details: "Purpose details" },
                    { title: "Country", details: "Country Details" },
                    { title: "Date", details: "Date details" },
                    { title: "Policy Duration", details: "Duration details" },
                    { title: "Age", details: "Age details" },
                  ].map((item, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-2 mb-3">
                      <h6 className="font-weight-bold text-success">{item.title}</h6>
                      <p className="text-muted small mb-0">{item.details}</p>
                    </div>
                  ))}
                  <div className="col-6 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary btn-sm">Update Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Quote + Insurance Guide Side by Side */}
          <div className="col-12 mt-4">
            <div className="row">
              {/* Secondary Quote Section */}
              <div className="col-md-8">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="row text-center align-items-center">
                      <div className="col-6 col-md-3 mb-3">
                        <h6 className="font-weight-bold text-success">Logo</h6>
                        <p className="text-muted small mb-0">Company Logo</p>
                      </div>
                      <div className="col-6 col-md-3 mb-3">
                        <h6 className="font-weight-bold text-success">Coverage</h6>
                        <p className="text-muted small mb-0">$75,000</p>
                        <span className="small">(Per Traveler)</span>
                      </div>
                      <div className="col-6 col-md-3 mb-3">
                        <h6 className="font-weight-bold text-success">Premium</h6>
                        <p className="text-muted small mb-0">৳48,107</p>
                        <span className="small">For 1 Traveler</span>
                        <br />
                        <span className="small">Policy Duration: 180 Days</span>
                      </div>
                      <div className="col-6 col-md-3 mb-3 d-flex flex-column align-items-center">
                        <button className="btn btn-primary btn-sm mb-2">Buy Now</button>
                        <a href="#" className="small text-primary">More details →</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance Guide Card (Beside the Secondary Quote) */}
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-header font-weight-bold text-center">
                    Insurance Buying Guide
                  </div>
                  <div className="card-body">
                    <ul className="text-muted small mb-0">
                      <li>Travel insurance protects you financially from unexpected incidents abroad.</li>
                      <li>All policies at Bimafy comply with Schengen visa requirements.</li>
                      <li>Choose your policy based on travel purpose: holiday, business, study, or work.</li>
                      <li>Need to change your itinerary? Contact us immediately.</li>
                      <li>Still unsure? Give us a call for assistance.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Plan;
