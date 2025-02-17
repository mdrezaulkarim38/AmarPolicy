import { useState } from "react";
import Breadcrumb from "../../components/users/Breadcrumb";
import FaqButton from "../../components/users/FaqButton";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

import DImage from "../../assets/users/assets/img/doctors/doctor-08.jpg";

function HealthInsurance() {
    const [coverageRange, setCoverageRange] = useState("500000-1000000"); // Default coverage range
    const [childRange, setChildRange] = useState(1);
    const [InSuranceFor, setInSuranceFor] = useState("Both");
    const handleInSuranceForClick = (forPerson) => {
        setInSuranceFor(forPerson);
    };
    const handleChildRangeClick = (child) => {
        setChildRange(child);
    };
    const handlePriceRangeClick = (range) => {
        setCoverageRange(range); // Update the selected coverage range
    };

    const faqData = [
        {
            question: "What is Health Insurance?",
            answer:
                "Health insurance is a type of insurance policy that provides financial coverage against illness, diseases, and accident-related treatments. That means you can get financial benefit agaisnt your medical expenses if you have a health insurance policy. All you have to do is buy a good health insurance policy and renew it every year because you never know when an accident may happen or you get sick.Amar Policy offers various health insurance plans on its website and mobile app from where you can easily understand the terms and conditions and purchase online and get claims.",
        },
        {
            question: "Why do you need a Health Insurance?",
            answer:
                "Health insurance provides coverage against unexpected illness or accidental injuries to better manage your financial situation in case of an emergency hospitalization or treatment.Health insurance helps you to afford better healthcare services as you have the financial independence to seek quality healthcare services.Health insurance ensures peace of mind as you are covered against unexpected situations and do not need to worry about spending your savings on treatment.",
        },
        {
            question: "Types of Health Insurance Policies:",
            answer:
                "Hospitalization Coverage Policy.Almost all health insurance plans covers hospitalization expesnes. Some of the plans also covers hospitalization for maternity/child-birth cases after a waiting period. These plans usually come with a yearly total coverage amount up to which the you will get insurance benefit if you take treatment in a hospital. An important note to consider here is that health insurance policies give back the medical expenses (subject to exclusion and deductibles) as per the hospital bill. You need to properly collect and preserve the medical documents and bills at the time of discharge to submit an insurance claim. Hospitalization and OPD Coverage Policy.Health insurance policies also covers out-door treatment costs such as doctor consultation, diagnostic tests, prescription medicines, etc. Usually these type of plans are a bit more expensive in terms of yearly premium as they covers OPD (out-door) treatments. However, buying these types of health insurance plans are always a better idea since they provide coverage against serious illnesses which requires hospitalization as well as the minor ones which does not require hospital admission. These plans also come with a yearly total coverage amount for hospital treament and out-door treatments, up to which you can claim and get financial benefit. Critical Illness Coverage Policy. A critical illness (CI) plan is a type of health insurance policy that provides a fixed benefit or reimbursement of expenses up to the coverage amount in case of a diagnosis of a life-threatening illness. Hence it is called the Critical Illness insurance. These plans usually cover severe or life-threatening diseases such as cancer, heart attack, stroke, coronary artery bypass surgery, major organ transplantation, etc. This list may include more diseases or illnesses based on the insurance company or plan. Critical illness health insurance policies are affordable and can be a lifesaver for you in an unfortunate situation.Sometimes, critical illness coverages are bundled with a standard hospitalization health insurance policy so that you can get complete coverage simply by purchasing a single policy. Otherwise, you can buy a standard health insurance plan and get critical illness coverage separately to ensure better financial safety in an emergency.Additional Benefits: If the health insurance is from a life insurance company then you may get an extra term life insurance coverage along with the health coverage without any additional premium. This can be a good option for you to secure your dependent family members in case any unfortunate event occurs to you.",
        },
        {
            question:
                "Individual Plan vs Family Floater Plan, what is the difference?",
            answer:
                "This is a very common question when searching for a health insurance plan as often we want to have our family memers to be included under the health insurance coverage as illnesses/accidents do not happen to us only, they affect our families as well and we have to spend a lot of money for their treatment. Although, we may buy insruance policy for our parents or extended family members but there is a scenario where this question comes in. \n An individual health insruance plan covers only a single person, be it yourself or your spouse, or father, or mother. On the other hand, family floater health insruance policy covers up to 4 persons (usually) under a single policy and the health coverage amount can be used for all family members included in the policy. In other words, family members (including yourself) can share the coverage of the policy. Apart from your spouse, in order to get coverage for your minor children, you may have to take a family floater plan as most individual health insurance plans cannot be purchased for persons aged below 18 years. So, if you have dependent children, in most cases, your best suited option is a family floater plan. \n However, you have the freedom to buy seperate policies for each members of your family. But, the main advantage of buying a family floater plan is cost saving on the premium payment. Because, if you buy separate policies for each person, it will cost you more (though you will be able to ensure more coverage for each person - at a higher cost). So, if you are looking for an affordable health insruance plan for your family, then go for the family floater plans.",
        },
        {
            question:
                "Why is Amar Policy the best place to buy health insurance policies?",
            answer:
                "Amar Policy (amarpolicy.com) is the first digital insurance platform in Bangladesh, from where you can easily buy the insurance policy you prefer or need and submit your insurance claims using the same platform, digitally. Amar Policy is not an insurance company; it is a digital platform through which you can take the insurance services provided by various insurance companies using the website and mobile app. It is a new solution offered by Amar Policy for the people of Bangladesh to make insurance easily accessible and more user-friendly.Amar Policy promotes and markets the insurance services of reputed insurance companies using its website and mobile app. People can now get many services through digital platforms like e-commerce, ride-sharing, doctor consultation, etc. But, before Amar Policy, insurance was not available to people through digital channels, and Amar Policy made it available to Bangladeshi people.Through Amar Policy, you can get the following insurance services: Health Insurance, Travel Insurance, Accident Insurance, Motor insurance, Life Insurance, and many more.Amar Policy is the best platform to get a health insurance policy for yourself and your loved ones. As it provides various insurance policies in one place, you can easily compare and select the best policy suited to your needs and budget. You can also check the terms, conditions, exclusions, and features of the policies before buying so that you can make an informed decision.Amar Policy not only helps you get the best insurance policy for you but also assists you in submitting the insurance claims digitally and getting the settlement as fast as possible.Various reputed insurance companies provide their insurance services through Amar Policy. You can get your suitable health insurance plan today without any hassle through online purchases or with just a phone call. Amar Policy considers customer satisfaction the highest priority and aims to provide the best insurance experience you have ever enjoyed.To know more about health insurance and for any other information, send us an email or call Amar Policy Customer Support. Customer Support Hotline: +88 09606991991 Email Address: cs@amarpolicy.com",
        },
    ];

    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Health Insurance" />

            <div className="container mt-5 mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src={DImage} className="img-fluid" alt="Image of a doctor" />
                            <h3 className="font-weight-normal">
                                Choose the best Health Insurance{" "}
                                <span className="font-weight-bolder">
                  {" "}
                                    Plan for Yourself and your Family
                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#solid-justified-tab1"
                                            data-toggle="tab"
                                        >
                                            Self
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#solid-justified-tab2"
                                            data-toggle="tab"
                                        >
                                            Couple
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#solid-justified-tab3"
                                            data-toggle="tab"
                                        >
                                            Family
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#solid-justified-tab4"
                                            data-toggle="tab"
                                        >
                                            Parents
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body" style={{ paddingTop: "0px" }}>
                                <div className="tab-content">
                                    <div
                                        className="tab-pane show active"
                                        id="solid-justified-tab1"
                                    >
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input
                                                        type="text"
                                                        name="yourName"
                                                        className="form-control"
                                                        id="YourNameSelf"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input
                                                        type="text"
                                                        name="mobileSelf"
                                                        className="form-control"
                                                        id="mobileSelf"
                                                        placeholder="Mobile Number"
                                                    />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on
                                                        WhatsApp
                                                    </label>
                                                </div>
                                                <div className="form-field  col-12">
                                                    <label htmlFor="self_age">Your Age</label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        {Array.from({ length: 53 }, (_, i) => (
                                                            <option key={i} value={18 + i}>
                                                                {18 + i} Years
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">
                                                        Health Coverage Amount (৳)
                                                    </label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "all" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("all")}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "1-100000" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("1-100000")}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "100000-500000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("100000-500000")
                                                            }
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "500000-1000000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("500000-1000000")
                                                            }
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the
                                                        Terms of Service
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-info w-100">See Plans</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab2">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input
                                                        type="text"
                                                        name="yourName"
                                                        className="form-control"
                                                        id="YourNameSelf"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input
                                                        type="text"
                                                        name="mobileSelf"
                                                        className="form-control"
                                                        id="mobileSelf"
                                                        placeholder="Mobile Number"
                                                    />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on
                                                        WhatsApp
                                                    </label>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Your Age</label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        {Array.from({ length: 53 }, (_, i) => (
                                                            <option key={i} value={18 + i}>
                                                                {18 + i} Years
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Spouse&#39;s Age</label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        {Array.from({ length: 53 }, (_, i) => (
                                                            <option key={i} value={18 + i}>
                                                                {18 + i} Years
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">
                                                        Health Coverage Amount (৳)
                                                    </label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "all" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("all")}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "1-100000" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("1-100000")}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "100000-500000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("100000-500000")
                                                            }
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "500000-1000000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("500000-1000000")
                                                            }
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the
                                                        Terms of Service
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-info w-100">See Plans</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab3">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input
                                                        type="text"
                                                        name="yourName"
                                                        className="form-control"
                                                        id="YourNameSelf"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input
                                                        type="text"
                                                        name="mobileSelf"
                                                        className="form-control"
                                                        id="mobileSelf"
                                                        placeholder="Mobile Number"
                                                    />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on
                                                        WhatsApp
                                                    </label>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Your Age</label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        {Array.from({ length: 53 }, (_, i) => (
                                                            <option key={i} value={18 + i}>
                                                                {18 + i} Years
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-field  col-6">
                                                    <label htmlFor="self_age">Spouse&#39;s Age</label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        {Array.from({ length: 53 }, (_, i) => (
                                                            <option key={i} value={18 + i}>
                                                                {18 + i} Years
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">
                                                        Number of Child (Below 18 years)
                                                    </label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                childRange === 1 ? "active" : ""
                                                            }`}
                                                            onClick={() => handleChildRangeClick(1)}
                                                        >
                                                            1 Child
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                childRange === 2 ? "active" : ""
                                                            }`}
                                                            onClick={() => handleChildRangeClick(2)}
                                                        >
                                                            2 Child
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">
                                                        Health Coverage Amount (৳)
                                                    </label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "all" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("all")}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "1-100000" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("1-100000")}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "100000-500000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("100000-500000")
                                                            }
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "500000-1000000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("500000-1000000")
                                                            }
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the
                                                        Terms of Service
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-info w-100">See Plans</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="YourName">Your Name</label>
                                                    <input
                                                        type="text"
                                                        name="yourName"
                                                        className="form-control"
                                                        id="YourNameSelf"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="mobileSelf">Mobile Number</label>
                                                    <input
                                                        type="text"
                                                        name="mobileSelf"
                                                        className="form-control"
                                                        id="mobileSelf"
                                                        placeholder="Mobile Number"
                                                    />
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> Get Updates on
                                                        WhatsApp
                                                    </label>
                                                </div>
                                                <div className="form-field col-12 mb-3">
                                                    <label htmlFor="self_coverage">Insurance For</label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                InSuranceFor === "Father" ? "active" : ""
                                                            }`}
                                                            onClick={() => handleInSuranceForClick("Father")}
                                                        >
                                                            Father
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                InSuranceFor === "Mother" ? "active" : ""
                                                            }`}
                                                            onClick={() => handleInSuranceForClick("Mother")}
                                                        >
                                                            Mother
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                InSuranceFor === "Both" ? "active" : ""
                                                            }`}
                                                            onClick={() => handleInSuranceForClick("Both")}
                                                        >
                                                            Both
                                                        </button>
                                                    </div>
                                                </div>

                                                <div
                                                    className={`form-field  col-6 ${
                                                        InSuranceFor === "Mother"
                                                            ? "d-none"
                                                            : InSuranceFor === "Father"
                                                                ? "col-12"
                                                                : "col-6"
                                                    }`}
                                                >
                                                    <label htmlFor="self_age">Father&#39;s Age</label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        {Array.from({ length: 53 }, (_, i) => (
                                                            <option key={i} value={18 + i}>
                                                                {18 + i} Years
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div
                                                    className={`form-field  ${
                                                        InSuranceFor === "Father"
                                                            ? "d-none"
                                                            : InSuranceFor === "Mother"
                                                                ? "col-12"
                                                                : "col-6"
                                                    }`}
                                                >
                                                    <label htmlFor="self_age">Mother&#39;s Age</label>
                                                    <select className="form-control select" id="self_age">
                                                        <option value="">Select</option>
                                                        {Array.from({ length: 53 }, (_, i) => (
                                                            <option key={i} value={18 + i}>
                                                                {18 + i} Years
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-field col-12 mt-3">
                                                    <label htmlFor="self_coverage">
                                                        Health Coverage Amount (৳)
                                                    </label>
                                                    <div className="price-range-list d-flex justify-content-start">
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "all" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("all")}
                                                        >
                                                            Show All Plans
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "1-100000" ? "active" : ""
                                                            }`}
                                                            onClick={() => handlePriceRangeClick("1-100000")}
                                                        >
                                                            Upto 1 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "100000-500000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("100000-500000")
                                                            }
                                                        >
                                                            1 Lac to 5 Lac
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-sm ml-2 btn-outline-info ${
                                                                coverageRange === "500000-1000000"
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handlePriceRangeClick("500000-1000000")
                                                            }
                                                        >
                                                            5 Lac to 10 Lac
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="CheckButtonArea m-3">
                                                    <label className="cum_check">
                                                        <input type="checkbox" name="select_specialist" />
                                                        <span className="checkmark"></span> I agree with the
                                                        Terms of Service
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-info w-100">See Plans</button>
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

export default HealthInsurance;
