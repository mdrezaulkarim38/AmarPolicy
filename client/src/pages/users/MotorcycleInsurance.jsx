import { useState } from "react";
import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function MotorcycleInsurance() {
  const [step, setStep] = useState(1);
  const [hasInsurance, setHasInsurance] = useState(null);
  const handleInsuranceChange = (event) => {
    setHasInsurance(event.target.value === "1"); // Check if "Yes" is selected
  };
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Motorcycle Insurance" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="h2 my-4">Motorcycle Insurance in Bangladesh</h1>
            <p className="text-center">
              <img
                className="img-fluid"
                src="https://bimafy.com/images/frontend/products/comprehensive_motor_feature.jpg"
                alt="Motorcycle Insurance"
              />
            </p>
          </div>
          <div className="col-12 my-4">
            <div className="travel-search-box bg-white p-4 shadow-sm rounded">
              <ul className="nav nav-tabs stepper-nav">
                {["1", "2", "3", "4", "5"].map((num, index) => (
                  <li key={index} className="step-wrapper">
                    <div
                      className={`step-item ${
                        step >= index + 1 ? "active" : ""
                      }`}
                    >
                      <div className="step-circle">{num}</div>
                    </div>
                    {index < 4 && (
                      <div
                        className={`step-line ${
                          step > index + 1 ? "active-line" : ""
                        }`}
                      ></div>
                    )}
                  </li>
                ))}
              </ul>
              <form className="travel-search-form">
                {step === 1 && (
                  <fieldset>
                    <h3 className="mb-3 mt-3 text-success">
                      What is the CC limit of your Motorcycle?
                    </h3>
                    <div className="control">
                      {[
                        {
                          name: "50 cc - 150 cc",
                          value: "50cc-150cc",
                        },
                        {
                          name: "151 cc - 250 cc",
                          value: "151cc-250cc",
                        },
                        {
                          name: "251 cc - 350 cc",
                          value: "251cc-350cc",
                        },
                      ].map((item) => (
                        <label className="radio d-block mb-3" key={item.value}>
                          <input
                            type="radio"
                            name="travel_purpose"
                            value={item.value}
                            className="mr-2"
                          />
                          {item.name}
                        </label>
                      ))}
                      <button
                        type="button"
                        className="btn btn-primary float-left"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </fieldset>
                )}
                {step === 2 && (
                  <fieldset>
                    <h3 className="text-success mb-3 mt-3">
                      What is the price of this vehicle? (as per purchase
                      invoice)
                    </h3>
                    <div className="col-2">
                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="9"
                        placeholder="price"
                      />
                    </div>
                    <div className="buttons mt-4">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </fieldset>
                )}
                {step === 3 && (
                  <fieldset>
                    <h4 className="text-success mb-3 mt-3">
                      Have you ever purchased any comprehensive (first-party)
                      insurance for this vehicle?
                    </h4>
                    <label className="radio d-block mb-3">
                      <input
                        type="radio"
                        name="insurance"
                        className="mr-2"
                        value={1}
                        onChange={handleInsuranceChange}
                      />
                      Yes
                    </label>
                    <label className="radio d-block mb-3">
                      <input
                        type="radio"
                        name="insurance"
                        className="mr-2"
                        value={0}
                        onChange={handleInsuranceChange}
                      />
                      No
                    </label>

                    {hasInsurance !== null &&
                      hasInsurance && (
                        <>
                          <h4 className="text-success mb-3 mt-3">
                            For how many years have you purchased comprehensive
                            insurance for this vehicle?
                          </h4>
                          <select className="form-control mb-4">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </>
                      )}

                    <div className="buttons mt-4">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </fieldset>
                )}
                {step === 4 && (
                  <fieldset>
                    <h4 className="text-success mb-3 mt-3">What coverages do you want for your vehicle?</h4>
                    <label className="radio d-block mb-3">
                      <input
                        type="checkbox"
                        name="insurance"
                        className="mr-2"
                        value={1}
                        checked
                      />
                      Accidental Damages Coverage
                    </label>
                    <hr />
                    <h4 className="text-success mb-3 mt-3">Additional coverages</h4>
                    <label className="radio d-block mb-3">
                      <input
                        type="checkbox"
                        name="insurance"
                        className="mr-2"
                        value={1}
                      />
                       Flood Cyclone Coverage
                    </label>
                    <label className="radio d-block mb-3">
                      <input
                        type="checkbox"
                        name="insurance"
                        className="mr-2"
                        value={1}
                      />
                       Earthquake Coverage
                    </label>
                    <label className="radio d-block mb-3">
                      <input
                        type="checkbox"
                        name="insurance"
                        className="mr-2"
                        value={1}
                      />
                       Riot and Strike Damage Coverage
                    </label>
                    <div className="buttons mt-4">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </fieldset>
                )}
                {step === 5 && (
                  <fieldset>
                    <h4 className="text-success mb-3 mt-3">
                      Have you ever purchased any comprehensive (first-party)
                      insurance for this vehicle?
                    </h4>
                    <label className="radio d-block mb-3">
                      <input
                        type="radio"
                        name="insurance"
                        className="mr-2"
                        value={1}
                      />
                      Yes
                    </label>
                    <label className="radio d-block mb-3">
                      <input
                        type="radio"
                        name="insurance"
                        className="mr-2"
                        value={0}
                      />
                      No
                    </label>
                    <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="agree_to_tns"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="agree_to_tns"
                      >
                        I agree with the{" "}
                        <a href="" target="_blank">
                          Terms of Service
                        </a>
                      </label>
                    </div>
                    <div className="buttons mt-4">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary float-right"
                      >
                        See Plans <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </fieldset>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <blockquote className="blockquote text-primary mt-4">
          <h4>
            Compare And Find The Best Deals Of Motor Bike Insurance Policies
            From Amar Policy
          </h4>
        </blockquote>

        <h4 className="text-success">
          Motorcycle Insurance: Order Online And Get Free Home Delivery
        </h4>
        <ul className="list-group mb-4">
          <li className="list-group-item">
            Get 0% interest EMI with eligible credit cards for up to 12 months
            for orders more than Tk. 5,000
          </li>
          <li className="list-group-item">
            Select your preferred insurance policy from different top-rated
            insurance companies
          </li>
          <li className="list-group-item">
            Get free emergency roadside assistance and claim assistance for a
            hassle-free claim experience
          </li>
        </ul>

        <h4 className="text-dark">What is Motorcycle Insurance?</h4>
        <p>
          Motorcycle or bike insurance covers you against certain damages,
          losses, or liabilities related to your motor vehicle such as
          accidental damages, robbery, mugging, personal bodily injury, damages
          or injury to other roadside assets or pedestrians, etc.
        </p>
        <p>There are 2 types of motorcycle/bike insurance policies:</p>
        <ul>
          <li>Comprehensive or 1st Party Motor Insurance Policy</li>
          <li>Act Liability or 3rd Party Motor Insurance Policy</li>
        </ul>

        <h5 className="text-info">
          Coverage of Comprehensive or 1st Party Insurance Policy
        </h5>
        <p>
          <strong>Accidental Damages and Robbery/Mugging:</strong> Comprehensive
          or 1st Party Insurance will provide coverage for damages or loss of
          your motorcycle or scooty and its accessories while driving on the
          road or parked in a designated parking lot. These include damages to
          the bike or scooter due to a road accident or loss of the insured
          vehicle or parts of it due to housebreaking/robbery. It also covers
          engine damage through accidental external means and any damage to the
          bike or scooter if you transport it using a courier service.
        </p>

        <p>
          <strong>Additional Coverage</strong> can be taken for:
        </p>
        <ul>
          <li>
            <strong>Flood & Cyclone:</strong> Damages caused by Typhoon,
            Hurricane, Flood, Storm, Tempest, Cyclone, Hailstorm, Frost, or
            inundation, etc.
          </li>
          <li>
            <strong>Earthquake:</strong> Damages to insured vehicle due to
            earthquake effects such as fire and shock damages, self-ignition,
            etc.
          </li>
          <li>
            <strong>Riot and Strike:</strong> Damages to the insured vehicle due
            to riots and strikes, malicious or violent activities, etc.
          </li>
        </ul>

        <p className="text-muted">
          *Standard insurance terms and conditions apply. Please refer to the
          policy wording document for further details.
        </p>

        <p>
          To buy the insurance policy, just order online and pay the premium
          using our secured online payment gateway. Get the digital copy of the
          insurance policy within the next business hour and free home delivery
          within the next day (for inside Dhaka Metro areas) or 3-4 working days
          all over Bangladesh.
        </p>

        <h5 className="text-warning">Best Claim Experience at Amar Policy!</h5>
        <ul className="list-group">
          <li className="list-group-item">
            Cashless claim processing service from reputed workshops
          </li>
          <li className="list-group-item">
            Emergency assistance in case of any mishaps
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default MotorcycleInsurance;
