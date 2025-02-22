import Breadcrumb from "../../components/users/Breadcrumb";
import Contact from "../../components/users/Contact";
import FaqButton from "../../components/users/FaqButton";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
// import OurClient from "../../components/users/OurClient";

function FAQ() {
  const faqData = [
    {
      id: 1,
      question: "What is Health Insurance?",
      answer:
        "Health insurance is a type of insurance policy that provides financial coverage against illness, diseases, and accident-related treatments. That means you can get financial benefit agaisnt your medical expenses if you have a health insurance policy. All you have to do is buy a good health insurance policy and renew it every year because you never know when an accident may happen or you get sick.Amar Policy offers various health insurance plans on its website and mobile app from where you can easily understand the terms and conditions and purchase online and get claims.",
    },
    {
      id: 2,
      question: "Why do you need a Health Insurance?",
      answer:
        "Health insurance provides coverage against unexpected illness or accidental injuries to better manage your financial situation in case of an emergency hospitalization or treatment.Health insurance helps you to afford better healthcare services as you have the financial independence to seek quality healthcare services.Health insurance ensures peace of mind as you are covered against unexpected situations and do not need to worry about spending your savings on treatment.",
    },
    {
      id: 3,
      question: "Types of Health Insurance Policies:",
      answer:
        "Hospitalization Coverage Policy.Almost all health insurance plans covers hospitalization expesnes. Some of the plans also covers hospitalization for maternity/child-birth cases after a waiting period. These plans usually come with a yearly total coverage amount up to which the you will get insurance benefit if you take treatment in a hospital. An important note to consider here is that health insurance policies give back the medical expenses (subject to exclusion and deductibles) as per the hospital bill. You need to properly collect and preserve the medical documents and bills at the time of discharge to submit an insurance claim. Hospitalization and OPD Coverage Policy.Health insurance policies also covers out-door treatment costs such as doctor consultation, diagnostic tests, prescription medicines, etc. Usually these type of plans are a bit more expensive in terms of yearly premium as they covers OPD (out-door) treatments. However, buying these types of health insurance plans are always a better idea since they provide coverage against serious illnesses which requires hospitalization as well as the minor ones which does not require hospital admission. These plans also come with a yearly total coverage amount for hospital treament and out-door treatments, up to which you can claim and get financial benefit. Critical Illness Coverage Policy. A critical illness (CI) plan is a type of health insurance policy that provides a fixed benefit or reimbursement of expenses up to the coverage amount in case of a diagnosis of a life-threatening illness. Hence it is called the Critical Illness insurance. These plans usually cover severe or life-threatening diseases such as cancer, heart attack, stroke, coronary artery bypass surgery, major organ transplantation, etc. This list may include more diseases or illnesses based on the insurance company or plan. Critical illness health insurance policies are affordable and can be a lifesaver for you in an unfortunate situation.Sometimes, critical illness coverages are bundled with a standard hospitalization health insurance policy so that you can get complete coverage simply by purchasing a single policy. Otherwise, you can buy a standard health insurance plan and get critical illness coverage separately to ensure better financial safety in an emergency.Additional Benefits: If the health insurance is from a life insurance company then you may get an extra term life insurance coverage along with the health coverage without any additional premium. This can be a good option for you to secure your dependent family members in case any unfortunate event occurs to you.",
    },
    {
      id: 4,
      question:
        "Individual Plan vs Family Floater Plan, what is the difference?",
      answer:
        "This is a very common question when searching for a health insurance plan as often we want to have our family memers to be included under the health insurance coverage as illnesses/accidents do not happen to us only, they affect our families as well and we have to spend a lot of money for their treatment. Although, we may buy insruance policy for our parents or extended family members but there is a scenario where this question comes in. \n An individual health insruance plan covers only a single person, be it yourself or your spouse, or father, or mother. On the other hand, family floater health insruance policy covers up to 4 persons (usually) under a single policy and the health coverage amount can be used for all family members included in the policy. In other words, family members (including yourself) can share the coverage of the policy. Apart from your spouse, in order to get coverage for your minor children, you may have to take a family floater plan as most individual health insurance plans cannot be purchased for persons aged below 18 years. So, if you have dependent children, in most cases, your best suited option is a family floater plan. \n However, you have the freedom to buy seperate policies for each members of your family. But, the main advantage of buying a family floater plan is cost saving on the premium payment. Because, if you buy separate policies for each person, it will cost you more (though you will be able to ensure more coverage for each person - at a higher cost). So, if you are looking for an affordable health insruance plan for your family, then go for the family floater plans.",
    },
    {
      id: 5,
      question:
        "Why is Amar Policy the best place to buy health insurance policies?",
      answer:
        "Amar Policy (AmarPolicy.com) is the first digital insurance platform in Bangladesh, from where you can easily buy the insurance policy you prefer or need and submit your insurance claims using the same platform, digitally. Amar Policy is not an insurance company; it is a digital platform through which you can take the insurance services provided by various insurance companies using the website and mobile app. It is a new solution offered by Amar Policy for the people of Bangladesh to make insurance easily accessible and more user-friendly.Amar Policy promotes and markets the insurance services of reputed insurance companies using its website and mobile app. People can now get many services through digital platforms like e-commerce, ride-sharing, doctor consultation, etc. But, before Amar Policy, insurance was not available to people through digital channels, and Amar Policy made it available to Bangladeshi people.Through Amar Policy, you can get the following insurance services: Health Insurance, Travel Insurance, Accident Insurance, Motor insurance, Life Insurance, and many more.Amar Policy is the best platform to get a health insurance policy for yourself and your loved ones. As it provides various insurance policies in one place, you can easily compare and select the best policy suited to your needs and budget. You can also check the terms, conditions, exclusions, and features of the policies before buying so that you can make an informed decision.Amar Policy not only helps you get the best insurance policy for you but also assists you in submitting the insurance claims digitally and getting the settlement as fast as possible.Various reputed insurance companies provide their insurance services through Amar Policy. You can get your suitable health insurance plan today without any hassle through online purchases or with just a phone call. Amar Policy considers customer satisfaction the highest priority and aims to provide the best insurance experience you have ever enjoyed.To know more about health insurance and for any other information, send us an email or call Amar Policy Customer Support. Customer Support Hotline: +88 09606991991 Email Address: cs@amarpolicy.com",
    },
  ];
  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="FAQ" />
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-12 p-5">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="col-12">
            <FaqButton faqData={faqData} />
          </div>
        </div>
      </div>

      <Contact contactTile="Get In Touch" />
      {/* <OurClient /> */}
      <Footer />
    </div>
  );
}

export default FAQ;
