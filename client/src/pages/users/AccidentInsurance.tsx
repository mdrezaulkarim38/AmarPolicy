import Breadcrumb from "../../components/users/Breadcrumb";
import FaqButton from "../../components/users/FaqButton";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

const AccidentInsurance = () => {
    const faqData = [
        {
            question: "What is an Accident Insurance?",
            answer: "Accident insurance is a type of insurance where the policyholder or insured person is paid directly in the event of an accident resulting in an injury to the insured person. The insured can spend the benefit payment however they choose. While accidents and their causes vary wildly, the general definition of an accident is an unfortunate incident that happens unexpectedly and unintentionally, typically resulting in an injury."
        },
        {
            question: "Why should I have an Accident Insurance policy?",
            answer: "Everyone should have a personal Accident Insurance policy because we never know when an accident may occur. Every day we live through some uncertain risks that may affect us negatively, such as road traffic accidents, workplace injuries, and even accidents within our homes while performing our regular life. So, it is always wise to have an accident insurance policy that pays compensation in case of accidental injuries. Moreover, Accident Insurance policies are affordable in terms of price and provide excellent coverage against accident-related mishaps."
        },
        {
            question: "What are the types of Accident Insurance?",
            answer: "Generally, there are two types of Accident Insurance available in Bangladesh. One pays benefits against temporary disablement or injuries due to an accident, and the other pays benefits against permanent disabilities due to an accident. Accident Insurance may sometimes compensate the nominee if the insured person dies due to an accident. Please check the policy details before purchasing Accident Insurance for yourself or your loved ones."
        },
        {
            question: "Which Accident Insurance policies can I get at Amar Policy?",
            answer: "Bimafy offers all types of Accident Insurance to customers. Biker Bima for motorcycle users is the most famous accident insurance policy, which pays fixed benefits against injuries due to road traffic accidents. The Peoples's Personal Accident (PPA) policy is another very affordable accident insurance policy that pays benefits against accidental death and permanent disabilities."
        }
    ]
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Accident Insurance" />
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
