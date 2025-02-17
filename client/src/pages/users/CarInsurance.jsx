import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function CarInsurance () {
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Car Insurance" />
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
                <h4 className="text-primary mb-4">Best Claim Experience at Amar Policy!</h4>
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
};

export default CarInsurance;
