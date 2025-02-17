import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import GetPersonalInsuranceForm from "../../components/users/GetPersonalInsuraceForm";
import Header from "../../components/users/Header";

function GroupInsurance () {
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Group Insurance" />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center p-5">
                        <h3 className="title" style={{color: "#082854", fontSize: "32px"}}>Group Insurance for Employees</h3>
                        <p className="subtitle" style={{fontSize: "18px"}}>Group Insurance Policy to attract and retain the best human resources</p>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-md-6 mb-4">
                        <p>Having a Group Insurance policy for your organizations' employees can bring a number of advantages for both employer and employees. As an employer, you will get the following advantages by taking a group insurance policy for employees:</p>
                        <ul>
                            <li>Comply with the labor law of Bangladesh</li>
                            <li>Attract better talents during recruitment</li>
                            <li>Retain your most valuable human resources</li>
                            <li>Increase employees' loyalty</li>
                            <li>Ensure better employee productivity</li>
                            <li>Ensure higher job satisfaction</li>
                            <li>Better financial security for employees</li>
                            <li>Financial stability and protection for employees</li>
                            <li>Improved health and wellbeing of employees</li>
                        </ul>
                        <p style={{fontSize:"15px",fontWeight:"bold"}}>What are the coverage/insurance benefits available under the Group Insruance Policy?</p>
                        <p>A group insruance policy can provide the following coverage benefits for your employees; you can choose from the coverage options and benefit levels according to your needs.</p>
                        <ol>
                            <li>Group Life and Disability Benefits
                                <ul>
                                    <li>Group Life Coverage (Death Benefit)</li>
                                    <li>Accidental Death Benefit</li>
                                    <li>Permanent Total Disability Benefit</li>
                                    <li>Permanent Partial Disability Benefit</li>
                                    <li>Critical Illness</li>
                                </ul>
                            </li>
                            <li>Group Medical Benefits
                                <ul>
                                    <li>In-patient Hospitalization (IPD)</li>
                                    <li>Accidental Medical Expense Reimbursement</li>
                                    <li>Maternity/Child-birth</li>
                                    <li>Out-patient Treatment (OPD)</li>
                                    <li>Dental OPD</li>
                                    <li>Optical/Vision OPD</li>
                                </ul>
                            </li>
                        </ol>

                        <p>Why use Amar Policy to get a Group Insurance Policy for your employees?</p>

                        <ul>
                            <li>Customize insruance schemes based on your needs</li>
                            <li>Comparison between different policies on their benefits, features, and terms & conditions</li>
                            <li>Cometitive premium rates from different insurance companies</li>
                            <li>Pool of reputed and trusted insurance partners</li>
                            <li>Free claim assistance for easy claim submission and settlement</li>
                            <li>Dedicated relationship manager for all types of support</li>
                            <li>Training and awareness program for benefits and claim process</li>
                            <li>Mobile App and Website profile for all employees for easy accessibilty</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <GetPersonalInsuranceForm titleName="Group" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default GroupInsurance;