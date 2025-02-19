import { useState } from "react";
import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function CarInsurance() {
  const [step, setStep] = useState(1);
  const [hasInsurance, setHasInsurance] = useState(null);
  const handleInsuranceChange = (event) => {
    setHasInsurance(event.target.value === "1"); // Check if "Yes" is selected
  };

  const [seatValue, setSeatValue] = useState(0);

  const handleSeatChange = (event) => {
    setSeatValue(event.target.value); // Update the seat value
  };
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Car Insurance" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="h2 my-4">Car Insurance in Bangladesh</h1>
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
                      What is the CC limit of your Private Car?
                    </h3>
                    <div className="control">
                      {[
                        { name: "800 cc - 1300 cc", value: "800cc-1300cc" },
                        { name: "1301 cc - 1800 cc", value: "1301cc-1800cc" },
                        { name: "1801 cc - 3000 cc", value: "1801cc-3000cc" },
                        { name: "Over 3000 cc", value: "Over3000cc" },
                      ].map((item) => (
                        <label className="radio d-block mb-3" key={item.value}>
                          <input
                            type="radio"
                            name="cc_limit"
                            value={item.value}
                            className="mr-2"
                          />
                          {item.name}
                        </label>
                      ))}
                      <hr />
                      <p className="text-success">Seating Capacity</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0">1 Driver +</p>
                        <span className="ml-2">
                          <input
                            type="number"
                            value={seatValue}
                            onChange={handleSeatChange}
                            min={0}
                            className="form-control col-4"
                          />
                        </span>
                      </div>
                        <p className="my-2">
                          Passengers = Total {parseInt(seatValue) + 1} seats
                        </p>
                      <p className="h6 my-3">
                        * As per vehicle registration certificate
                      </p>
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
                    What is the price of this vehicle? (as per purchase invoice)
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

                    {hasInsurance !== null && hasInsurance && (
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
                    <h4 className="text-success mb-3 mt-3">
                      What coverages do you want for your vehicle?
                    </h4>
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
                    <h4 className="text-success mb-3 mt-3">
                      Additional coverages
                    </h4>
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

      <div className="container my-5">
        <blockquote className="blockquote">
          <p className="mb-0">
            Compare And Find The Best Deals Of Motor Bike Insurance Policies
            From Amar Policy
          </p>
        </blockquote>
        <h4 className="mb-4 text-primary">
          Car Insurance: Order Online And Get Free Home Delivery
        </h4>
        <ul className="list-unstyled mb-5">
          <li className="mb-2">
            Get 0% interest EMI with eligible credit cards for up to 12 months
            for orders more than Tk. 5,000
          </li>
          <li className="mb-2">
            Select your preferred insurance policy from different top-rated
            insurance companies
          </li>
          <li className="mb-2">
            Get free emergency roadside assistance and claim assistance for a
            hassle-free claim experience
          </li>
        </ul>
        <h4 className="mb-4 text-primary">What is Car Insurance?</h4>
        <p className="mb-4">
          Motor car insurance covers you against certain damages, losses, or
          liabilities related to your motor vehicle such as accidental damages,
          theft, robbery, mugging, personal bodily injury, damages or injury to
          other roadside assets or pedestrians, etc.
        </p>
        <p className="mb-4">There are 2 types of car insurance policies:</p>
        <ul className="mb-4">
          <li className="mb-2">
            Comprehensive or 1st Party Motor Insurance Policy
          </li>
          <li className="mb-2">
            Act Liability or 3rd Party Motor Insurance Policy
          </li>
        </ul>
        <h5 className="text-primary mb-3">
          Coverage of Comprehensive or 1st Party Insurance Policy
        </h5>
        <p>
          <u>Accidental Damages and Theft/Robbery/Mugging:</u> Comprehensive or
          1st Party Insurance will provide coverage for damages or loss of your
          car and its accessories while driving on the road or parked in a
          designated parking lot. These include damages to the car due to a road
          accident or loss of the insured vehicle or parts of it due to
          housebreaking/robbery. It also covers engine damage through accidental
          external means and any damage to the car if you transport it using a
          courier service.
        </p>
        <p>
          <strong>Additional Coverage</strong> can be taken for:
        </p>
        <ul className="pl-4">
          <li>
            <u>Flood & Cyclone:</u> Damages caused by Typhoon, Hurricane, Flood,
            Storm, Tempest, Cyclone, Hailstorm, Frost or inundation, etc.
          </li>
          <li>
            <u>Earthquake:</u> Damages to the insured vehicle due to earthquake
            effects such as fire and shock damages, self-ignition, etc.
          </li>
          <li>
            <u>Riot and Strike:</u> Damages to the insured vehicle due to riots
            and strikes, malicious or violent activities, etc.
          </li>
        </ul>
        <p>
          <small>
            * Standard insurance terms and conditions apply. Please refer to the
            policy wording document for further details.
          </small>
        </p>
        <p>
          To buy the insurance policy, just order online and pay the premium
          using our secured online payment gateway. Get the digital copy of the
          insurance policy within the next business hour and free home delivery
          within the next day (for inside Dhaka Metro areas) or 3-4 working days
          all over Bangladesh.
        </p>
        <h4 className="text-primary mb-4">
          Best Claim Experience at Amar Policy!
        </h4>
        <ul className="list-unstyled">
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-circle text-success mr-2"></i>
            Cashless claim processing service from reputed workshops
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-circle text-success mr-2"></i>
            Emergency assistance in case of any mishaps
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default CarInsurance;
