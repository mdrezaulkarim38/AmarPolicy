import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import GetPersonalInsuranceForm from "../../components/users/GetPersonalInsuraceForm";
import Header from "../../components/users/Header";

function FireInsurance() {
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Fire Insurance" />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center p-5">
            <h3
              className="title"
              style={{ color: "#082854", fontSize: "32px" }}
            >
              Fire Insurance for your office, warehouse, and factories
            </h3>
            <p className="subtitle" style={{ fontSize: "18px" }}>
              Secure your business from fire, burglary, and natural disaster by
              getting a Fire and allied perils insurance policy.
            </p>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-md-6">
            <img
              src="https://cdn.create.vista.com/api/media/small/637766904/stock-photo-hand-arranging-wood-block-stacking-insurance-icons-healthcare-car-travel"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <GetPersonalInsuranceForm titleName="Fire" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FireInsurance;
