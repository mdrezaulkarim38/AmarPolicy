import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import GetPersonalInsuranceForm from "../../components/users/GetPersonalInsuraceForm";
import Header from "../../components/users/Header";

const LifeInsurance = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Life Insurance" />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center p-5">
                        <h3 className="title" style={{color: "#082854", fontSize: "32px"}}>Life Insurance for your office, warehouse, and factories</h3>
                        <p className="subtitle" style={{fontSize: "18px"}}>Secure your business from fire, burglary, and natural disaster by getting a Fire and allied perils insurance policy.</p>
                    </div>
                </div>
                <div className="row justify-content-end"> 
                    <div className="col-md-6">
                        <GetPersonalInsuranceForm titleName="Life" />
                    </div>
                </div>
                <div className="row">
                    <p>Life insurance is a financial product which provides financial protection to the beneficiaries of the policy if the insured person passes away unexpectedly. The beneficiaries or the nominees get the financial compensation (a lump-sum amount or an annuity) in such a case. It is very important to note that <strong>life insurance protects your family members</strong> or the loved ones in case of your demise for which your family is not financially prepared. So, if you have a family who are dependent on your earnings, you should get a life insurance policy as soon as possible.</p>
                    <p>There are different types of life insurance products available in the market and you can choose the policy which best fits your needs. </p>
                    <p><strong>Term Life Insurance: </strong>Provides coverage for a specific period, offering high coverage amounts at a relatively low premium. Ideal for those seeking coverage during their working years or while raising a family. This type of policies does not come with any savings element, so the paid premiums are not returned at the end of the policy term if there is no death claim. But, this is the best life insurance policy if you cannot manage to save money every month but still want to get a financial protection for your family in case of your demise.</p>
                    <p><strong>Whole Life Insurance: </strong>Offers lifetime coverage with a savings component that grows over time. It provides a death benefit and a cash value component, making it a valuable long-term investment. This type of policy provides 2 financial component in a single product. One is the life insurance coverage as like as Term Life Insurance and the second one is a savings account which grows over time and generates lucrative return on investment at the end of the policy term. Premiums are relatively higher than Term Life Insruance but as it has a savings component, it creates a surrender value after a certatin period of time and you can get the maturity value at the end of the policy if you are still alive. Nevertheless, the nominee will get the life isurance sum amount if you pass away within the policy period.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LifeInsurance;