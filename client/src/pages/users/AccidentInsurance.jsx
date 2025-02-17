import Breadcrumb from "../../components/users/Breadcrumb";
import FaqButton from "../../components/users/FaqButton";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import DImage from "../../assets/users/assets/img/doctors/doctor-08.jpg";

function AccidentInsurance () {
    const faqData = [
        {
            question: "What is an Accident Insurance?",
            answer:
                "Accident insurance is a type of insurance where the policyholder or insured person is paid directly in the event of an accident resulting in an injury to the insured person. The insured can spend the benefit payment however they choose. While accidents and their causes vary wildly, the general definition of an accident is an unfortunate incident that happens unexpectedly and unintentionally, typically resulting in an injury.",
        },
        {
            question: "Why should I have an Accident Insurance policy?",
            answer:
                "Everyone should have a personal Accident Insurance policy because we never know when an accident may occur. Every day we live through some uncertain risks that may affect us negatively, such as road traffic accidents, workplace injuries, and even accidents within our homes while performing our regular life. So, it is always wise to have an accident insurance policy that pays compensation in case of accidental injuries. Moreover, Accident Insurance policies are affordable in terms of price and provide excellent coverage against accident-related mishaps.",
        },
        {
            question: "What are the types of Accident Insurance?",
            answer:
                "Generally, there are two types of Accident Insurance available in Bangladesh. One pays benefits against temporary disablement or injuries due to an accident, and the other pays benefits against permanent disabilities due to an accident. Accident Insurance may sometimes compensate the nominee if the insured person dies due to an accident. Please check the policy details before purchasing Accident Insurance for yourself or your loved ones.",
        },
        {
            question: "Which Accident Insurance policies can I get at Amar Policy?",
            answer:
                "Amar Policy offers all types of Accident Insurance to customers. Biker Bima for motorcycle users is the most famous accident insurance policy, which pays fixed benefits against injuries due to road traffic accidents. The Peoples's Personal Accident (PPA) policy is another very affordable accident insurance policy that pays benefits against accidental death and permanent disabilities.",
        },
    ];
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Accident Insurance" />
            <div className="container mt-5 mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                        <img
                            src={DImage}
                            className="img-fluid rounded shadow-lg"
                            alt="Doctor"
                            style={{ maxWidth: "80%", marginBottom: "20px" }}
                        />
                        <h3 className="font-weight-normal">
                            Accidents can happen,<br />
                            <span className="font-weight-bolder text-primary"> get yourself covered!
            </span>{" "}
                        </h3>
                    </div>

                    <div className="col-lg-6">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <h4 className="text-center mb-3 font-weight-bold text-secondary">
                                    Get Your Free Quote
                                </h4>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="YourName">Your Name</label>
                                        <input
                                            type="text"
                                            name="yourName"
                                            className="form-control"
                                            id="YourNameSelf"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="mobileSelf">Mobile Number</label>
                                        <input
                                            type="text"
                                            name="mobileSelf"
                                            className="form-control"
                                            id="mobileSelf"
                                            placeholder="Enter your mobile number"
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="whatsappUpdates"
                                                name="select_specialist"
                                            />
                                            <label
                                                className="custom-control-label text-muted"
                                                htmlFor="whatsappUpdates"
                                            >
                                                Get Updates on <b>WhatsApp</b>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label htmlFor="self_age">Your Age</label>
                                        <select className="form-control" id="self_age">
                                            <option value="">Select</option>
                                            {Array.from({ length: 53 }, (_, i) => (
                                                <option key={i} value={18 + i}>
                                                    {18 + i} Years
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="termsCheckbox"
                                                name="agree_terms"
                                            />
                                            <label
                                                className="custom-control-label text-muted"
                                                htmlFor="termsCheckbox"
                                            >
                                                I agree with the <b>Terms of Service</b>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary btn-block font-weight-bold">
                                            See Plans
                                        </button>
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
};

export default AccidentInsurance;
