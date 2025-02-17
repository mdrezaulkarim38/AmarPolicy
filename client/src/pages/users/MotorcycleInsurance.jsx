import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";

function MotorcycleInsurance() {
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Motorcycle Insurance" />
            <div className="container pb-5">
                <blockquote className="blockquote text-primary mt-4">
                    <h4>
                        Compare And Find The Best Deals Of Motor Bike Insurance Policies
                        From Amar Policy
                    </h4>
                </blockquote>

                <h4 className="text-success">
                    Motorcycle Insurance: Order Online And Get Free Home Delivery
                </h4>
                <ul className="list-group mb-4">
                    <li className="list-group-item">
                        Get 0% interest EMI with eligible credit cards for up to 12 months
                        for orders more than Tk. 5,000
                    </li>
                    <li className="list-group-item">
                        Select your preferred insurance policy from different top-rated
                        insurance companies
                    </li>
                    <li className="list-group-item">
                        Get free emergency roadside assistance and claim assistance for a
                        hassle-free claim experience
                    </li>
                </ul>

                <h4 className="text-dark">What is Motorcycle Insurance?</h4>
                <p>
                    Motorcycle or bike insurance covers you against certain damages,
                    losses, or liabilities related to your motor vehicle such as
                    accidental damages, robbery, mugging, personal bodily injury, damages
                    or injury to other roadside assets or pedestrians, etc.
                </p>
                <p>There are 2 types of motorcycle/bike insurance policies:</p>
                <ul>
                    <li>Comprehensive or 1st Party Motor Insurance Policy</li>
                    <li>Act Liability or 3rd Party Motor Insurance Policy</li>
                </ul>

                <h5 className="text-info">
                    Coverage of Comprehensive or 1st Party Insurance Policy
                </h5>
                <p>
                    <strong>Accidental Damages and Robbery/Mugging:</strong> Comprehensive
                    or 1st Party Insurance will provide coverage for damages or loss of
                    your motorcycle or scooty and its accessories while driving on the
                    road or parked in a designated parking lot. These include damages to
                    the bike or scooter due to a road accident or loss of the insured
                    vehicle or parts of it due to housebreaking/robbery. It also covers
                    engine damage through accidental external means and any damage to the
                    bike or scooter if you transport it using a courier service.
                </p>

                <p>
                    <strong>Additional Coverage</strong> can be taken for:
                </p>
                <ul>
                    <li>
                        <strong>Flood & Cyclone:</strong> Damages caused by Typhoon,
                        Hurricane, Flood, Storm, Tempest, Cyclone, Hailstorm, Frost, or
                        inundation, etc.
                    </li>
                    <li>
                        <strong>Earthquake:</strong> Damages to insured vehicle due to
                        earthquake effects such as fire and shock damages, self-ignition,
                        etc.
                    </li>
                    <li>
                        <strong>Riot and Strike:</strong> Damages to the insured vehicle due
                        to riots and strikes, malicious or violent activities, etc.
                    </li>
                </ul>

                <p className="text-muted">
                    *Standard insurance terms and conditions apply. Please refer to the
                    policy wording document for further details.
                </p>

                <p>
                    To buy the insurance policy, just order online and pay the premium
                    using our secured online payment gateway. Get the digital copy of the
                    insurance policy within the next business hour and free home delivery
                    within the next day (for inside Dhaka Metro areas) or 3-4 working days
                    all over Bangladesh.
                </p>

                <h5 className="text-warning">Best Claim Experience at Amar Policy!</h5>
                <ul className="list-group">
                    <li className="list-group-item">
                        Cashless claim processing service from reputed workshops
                    </li>
                    <li className="list-group-item">
                        Emergency assistance in case of any mishaps
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default MotorcycleInsurance;
