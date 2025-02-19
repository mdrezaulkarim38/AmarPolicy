import { useState } from "react";
import Breadcrumb from "../../components/users/Breadcrumb";
import FaqButton from "../../components/users/FaqButton";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import DImage from "../../assets/users/assets/img/doctors/doctor-08.jpg";
import { Link } from "react-router-dom";

import CardImageO1 from "../../assets/users/assets/img/specialities/specialities-01.png"
import CardImageO2 from "../../assets/users/assets/img/specialities/specialities-02.png"
import CardImageO3 from "../../assets/users/assets/img/specialities/specialities-03.png"
import CardImageO4 from "../../assets/users/assets/img/specialities/specialities-04.png"

function TravelInsurance() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const faqData = [
    {
      id: 1,
      question: "Travel Insurance in Bangladesh",
      answer:
        "Buy travel insurance policies in Bangladesh online at Amar Policy. Get your customized price quote and order online quickly using the Amar Policy website or mobile app. Secure yourself and your loved ones while travelling abroad with travel health insurance which provides coverage against unexpected events and medical emergencies such as accidents, illness, death, etc. Travel Insurance (also known as Travel Health Insurance) provides coverage for Bangladeshi nationals visiting abroad; for multiple purposes, including business, holidays, study, employment, or temporary residency in foreign lands outside of Bangladesh. Select your travel insurance from various insurance companies and get your digital policy certificate within a few hours, with free delivery of the original policy certificate anywhere in Bangladesh. A lot of countries around the world require travel insurance to enter. Countries which require travel insurance include the United Kingdom, Turkey, Egypt, Oman, Qatar, Indonesia, Nepal, Philippines, Russia, Singapore, United Arab Emirates, Vietnam, Thailand, etc., and all 29 Schengen Countries. Notable Schengen countries taht require travel health insurance for visa application include Austria, Belgium, Czech Republic, Finland, France, Germany, Italy, Malta, Poland, Portugal, Spain, and Sweden.",
    },
    {
      id: 2,
      question:
        "Travel Insurance Purchasing Guide - Which policy suits me best?",
      answer:
        "There are different types of travel insurance policies available at Amar Policy and you can select the best-suited plan for you from the available plans. Usually, travel insurance plans are categorized based on the purpose of travel such as holiday, business, study, employment, etc. You should also check your visa/travel requirements so that you can get the right insurance policy before your visa application/departure. If you are going to a Schengen country then your travel insurance policy must provide at least â¬30,000 in coverage against illnesses and accidents and there must not be any deductible in the insurance policy. Some countries require travel insurance to enter but do not specify any minimum coverage amount. However, all of the travel insurance plans available at Amar Policy provide at least US$50,000 (â¬30,000 for Schengen Countries) coverage and are accepted almost everywhere in the world including 29 Schengen countries. Travel insurance for USA and Canada shall provide coverage of $100,000 as the medical costs are significantly higher in these countries. If you are a casual traveller, then a Business & Holiday plan would be the most suitable one for you. But, if you are a frequent traveller and go abroad multiple times in a calendar year then a Frequent Traveling plan can be the best option as it provides coverage for multiple trips (up to 30 days per trip) within the policy validity period of one year. For study purposes, you may need to get a travel insurance policy before your visa application or departure. Travel insurance for Study is the right choice for you if you are going abroad with a student visa. This plan provides coverage for up to one year in a single policy and provides coverage up to US$75,000 (â¬30,000 for Schengen countries). If you are going abroad for employment purposes then the Employment plan would be the most suited one as this policy provides coverage of up to US$75,000 (â¬30,000 for Schengen countries) for up to one year in a single policy. For your better understanding, a summary of the travel health insurance plans are listed below:Travel Insurance for Business & Holiday: For periods up to 180 days; with a coverage of up to US$50,000 (â¬30,000 for Schengen Countries, $100,000 for USA and Canada) Travel Insurance for Frequent Traveling: For 365 days, but a maximum of 30 days per trip; with a coverage of up to $100,000 (or Euro equivalent for Schengen Countries) Travel Insurance for Employment: For periods exceeding 180 days but not exceeding 12 months, with a coverage of up to US$75,000 (â¬30,000 for Schengen countries) Travel Insurance for Study: For periods exceeding 180 days but not exceeding 12 months, with a coverage of up to US$75,000 (â¬30,000 for Schengen countries) Amar Policy also offer Travel Insurance for Study and Employment purposes with $125,000 coverage. If you require a travel health insurance with a greater coverage (more than $50,000) then contact us directly. For more details, please call Amar Policy Customer Support at +88 09606991991 or write an email to: cs@Amar Policy.com",
    },
    {
      id: 3,
      question: "Travel Insurance Coverage - Business and Holiday Plans",
      answer:
        "Coverage for Medical Expenses (refer to the List of Covered Medical Expenses below) For Schengen Countries: Insurance will pay up to the insured person's total coverage limit as per the plan (i.e., $50,000/$75,000/$100,000). No deductible applies per accident or illness in respect of the following medical-related expenses, reasonably and necessarily incurred outside the Peopleâs Republic of Bangladesh by the Insured Person as a direct result of the Insured Person suffering bodily injury, sickness, disease, or death during the Period of Insurance. For Non-Schengen Countries: Insurance will pay up to the insured person's total coverage limit as per the plan (i.e., $50,000/$75,000/$100,000), subject to the deductible stated on the policy schedule (typically $100), which deductible applies per accident or illness, in respect of the following medical related expenses, reasonably and necessarily incurred outside the Peopleâs Republic of Bangladesh by the Insured Person as a direct result of the Insured Person suffering bodily injury, sickness, disease, or death during the Period of Insurance. Notwithstanding the above, if the TPA/Claims Handler appointed by the insurance company recommends that continued treatment in Bangladesh is appropriate, the policy is extended to cover medical expenses incurred in Bangladesh as specified in Covered Expenses herein. Provided that expenses will only be paid at the usual and customary level for such services, and further provided that expenses will only be paid for treatment incurred within the 90 days immediately following the first manifestation of the bodily injury, sickness, or disease and the Insured Person had to return earlier than the expiry date of the trip. List of Covered Medical Expenses: 1. Expenses for physician service, hospital and medical services, and local emergency medical transportation. 2. Dental services: For Schengen Countries: Up to $500 or equivalent Euro per occurrence of dental services for immediate dental pain relief only. However, dental care rendered necessary due to a covered accident shall be subject to the limit of cover as per the policy. No deductible applies. For Non-Schengen Countries: Up to $500 per occurrence of dental services for immediate dental pain relief only. However, dental care rendered necessary due to a covered accident shall be subject to the coverage limit as per the policy and the Deductible stated in the policy schedule (typically $50). 3. Expenses for physician-ordered emergency medical evacuation, including medically appropriate transportation and necessary care, en route to the nearest suitable hospital when the Insured Person is critically ill or injured, and no suitable local care is available, subject to the prior approval of the Program Medical Advisors. In dire emergencies in a remote area where TPA/Claims Handler cannot be contacted, the medical evacuation must be reported to the first available physician and the nearest Bangladesh Consulate. 4. Expenses for medical evacuation, including transportation and medical care En-route to a hospital or the Insured Personâs usual place of residence in the Peopleâs Republic of Bangladesh when deemed medically advisable by the Program Medical Advisor and the attending physician.5. If the Insured Person dies outside of the People's republic of Bangladesh, the expenses for preparing the air transportation of the remains for repatriation to the Peopleâs Republic of Bangladesh of up to an equivalent amount for a local burial or cremation in the country where the death occurred. All expenses must be approved by the TPA/Claims Handler before the remains are prepared for transportation to the Peopleâs Republic of Bangladesh or local burial or cremation.",
    },
    {
      id: 4,
      question: "Price of Travel Insurance",
      answer:
        "Premium of Travel Insurance is determined based on your travel destination (countries you are visiting), duration of your travel (policy duration), and your age. You can quickly get a personalized price quote using the Amar Policy website or mobile app by providing basic information, such as your date of birth, destination country, and travel duration.",
    },
    {
      id: 5,
      question: "Exclusions",
      answer:
        "Some of the notable coverage exclusions of the Travel Insurance policy are listed below: Pre-existing conditions Travelling against the advice of the physician Travelling to obtain treatment for an identified illness/medical condition Applicable deductibles under the travel insurance policy schedule Cosmetic surgeries, unless required against a covered accident AIDS/HIV-related conditions Routine physical examinations or health checkups War, invasion, civil wars, mutiny, riot, rebellion, civil commotions, military or usurped power, terrorism, mass destruction, etc.Mountaineering and any other potentially dangerous sports/activities Professional sports Pregnancy/maternity and its related complications Applicable for children aged 5 years and under: treatment relating to Mumps, Chicken Pox, Measles, German Measles, Spina Bifida Whooping Cough, Diphtheria, Poliomyelitis, Meningitis, and Scarlet Fever and for consequences attributable thereto, accelerated thereby or arising therefrom. Please refer to the product details or the policy wording file to see the policy s complete exclusion list and other terms. You can view the product details after getting a price quote by clicking on the âMore Detailsâ button.",
    },
  ];

  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Travel Insurance" />

      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="container content_padding_top content_padding_bottom">
            <div className="section-gap-2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="img-fluid travel-banner"
                      src={DImage}
                      alt="Travel Insurance"
                    />
                    <h3 className="travel-slogan mt-4">
                      Ensure a safe trip with
                      <br />
                      <span className="font-weight-bold text-primary">
                        Travel Insurance
                      </span>
                    </h3>
                  </div>
                  <div className="col-lg-6">
                    <div className="travel-search-box bg-white p-4 shadow-sm rounded">
                      <ul className="nav nav-tabs stepper-nav">
                        {["1", "2", "3", "4"].map((num, index) => (
                          <li key={index} className="step-wrapper">
                            <div
                              className={`step-item ${
                                step >= index + 1 ? "active" : ""
                              }`}
                            >
                              <div className="step-circle">{num}</div>
                            </div>
                            {index < 3 && (
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
                            <h6 className="mb-3 mt-3">Select Travel Purpose</h6>
                            <div className="option-list">
                              {[
                                {
                                  name: "Business/Holiday",
                                  icon: CardImageO1,
                                  value: "business_and_holiday",
                                },
                                {
                                  name: "Study",
                                  icon: CardImageO2,
                                  value: "study",
                                },
                                {
                                  name: "Employment",
                                  icon: CardImageO3,
                                  value: "employment",
                                },
                                {
                                  name: "Frequent Traveler",
                                  icon: CardImageO4,
                                  value: "frequent_traveler",
                                },
                              ].map((item) => (
                                <button
                                  key={item.value}
                                  type="button"
                                  className="btn btn-outline-primary btn-block text-left mb-3"
                                  onClick={nextStep}
                                >
                                  <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="mr-2 specialities"
                                    style={{ width: "24px" }}
                                  />
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          </fieldset>
                        )}
                        {step === 2 && (
                          <fieldset>
                            <h6 className="mb-3 mt-3">How many travelers?</h6>
                            <input
                              type="number"
                              className="form-control mb-4"
                              min="1"
                              max="9"
                              defaultValue="1"
                            />
                            <h6 className="mb-4">Enter Date of Birth</h6>
                            <input type="date" className="form-control mb-4" />
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
                            <h6 className="mb-3 mt-3">
                              Select Travel Destination
                            </h6>
                            <select className="form-control mb-4">
                              <option value="ASC">
                                All Schengen Countries
                              </option>
                              <option value="ANSC">
                                All Non-Schengen Countries
                              </option>
                            </select>
                            <h6 className="mb-4">Date of Travel</h6>
                            <input type="date" className="form-control mb-4" />
                            <h6 className="mb-4">Policy Duration (Days)</h6>
                            <input
                              type="number"
                              className="form-control mb-4"
                              min="1"
                            />
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
                            <h6 className="mt-3 mb-3">Enter Your Details</h6>
                            <input
                              type="text"
                              className="form-control mb-4"
                              placeholder="Your Name"
                              required
                            />
                            <input
                              type="text"
                              className="form-control mb-4"
                              placeholder="Mobile Number"
                              required
                            />
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
                                <Link to="/terms-and-service" target="_blank">
                                  Terms of Service
                                </Link>
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
                                See Plans{" "}
                                <i className="fas fa-arrow-right ml-2"></i>
                              </button>
                            </div>
                          </fieldset>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <hr />
        <div className="row">
          <FaqButton faqData={faqData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TravelInsurance;
