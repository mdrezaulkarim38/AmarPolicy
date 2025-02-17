import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import GetPersonalInsuranceForm from "../../components/users/GetPersonalInsuraceForm";
import Header from "../../components/users/Header";

function MarineInsurance (){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Marine Insurance" />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center p-5">
                        <h3 className="title" style={{color: "#082854", fontSize: "32px"}}>Marine Insurance for international trade and commerce.</h3>
                        <p className="subtitle" style={{fontSize: "18px"}}>Get the best Marine Insurance rates and same day delivery from Amar Policy.</p>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-md-6">
                        <p>Marine insurance policies provide coverage to the goods or products being transported using a ship, train, lorry, truck, or aircraft. It is a commonly used insurance policy for international trades such as import or export activities. During the shipment, your products may get damaged or lost due to various reasons and due to such risks, it is a must have policy for cross border trade and commerce. If you are importing goods from another country under bank financing arrangements such as letters of credit (LC), then your bank may ask you to get a marine insurance policy covering the products during the shipment. So, often, marine cargo insruance policy is a mandatory financial nstrument in terms of import or export activites. </p>
                        <p style={{fontSize:"15px",fontWeight:"bold"}}>Advantages of using Amar Policy for Marine Insurance</p>
                        <ul>
                            <li>Fastest delivery of Cover Notes to your office or bank - so that you can open your L/C in the same day</li>
                            <li>Best commercial rates - so that you can reduce your import costs and maintain a higher margin</li>
                        </ul>
                        <br />
                        <p>Marine insurance policies are also used to cover the ship or vessel itself and its equipments or machineries against various risks such as accidents, natural disasters, hijacks, terrorisms, etc. These marine insurance policies are knowned as Marine Hull Insurance as they cover the ship or vessels hull (body), machinery, and equipments.</p>
                        <p>For internaional and domestic transportation of goods and products, you can take a Marine (Cargo) Insurance Policy based on your coverage needs categorized under the following below:</p>
                        <ol>
                            <li>Institute Cargo Clause C (ICC-C) Coverages:
                                <ul>
                                    <li>Fire or explosion</li>
                                    <li>Vessel or craft being stranded, grounded, sunk, or capsized</li>
                                    <li>Overturning or derailment of land conveyance</li>
                                    <li>Collision of vessel, aircraft, or conveyance with any external object other than water</li>
                                    <li>Discharge of cargo at a port of distress</li>
                                    <li>General average sacrifice</li>
                                    <li>Jettison</li>
                                </ul>
                            </li>
                            <li>Institute Cargo Clause B (ICC - B) Coverages:
                                <ul>
                                    <li>All risks under ICC-C coverage, and</li>
                                    <li>Earthquake, volcanic eruption or lightning</li>
                                    <li>Washing overboard</li>
                                    <li>Entry of sea, lake or river water into vessel</li>
                                    <li>Total loss of any product overboard or damaged whilst loading or unloading from vessel</li>
                                </ul>
                            </li>
                            <li>Institute Cargo Clause &quot;A&quot; (ICC - A) Coverages:
                                <ul>
                                    <li>All risks under ICC-C and ICC-B coverage, and</li>
                                    <li>Theft, pilferage, and non-delivery</li>
                                    <li>Fresh water, and rainwater damages</li>
                                    <li>Hook/sling, and oil damages</li>
                                    <li>Heating and sweating</li>
                                    <li>Damage by mud, acid, and other extraneous substances</li>
                                    <li>Breakage, and leakage</li>
                                    <li>Loss/dmage due to bursting/tearing of bags or packaging</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="col-md-6">
                        <GetPersonalInsuranceForm titleName="Marine" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MarineInsurance;