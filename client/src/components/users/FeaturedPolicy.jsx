import { Link } from "react-router-dom";
import doctor01 from "./../../assets/users/assets/img/doctors/doctor-01.jpg"
import doctor02 from "./../../assets/users/assets/img/doctors/doctor-02.jpg"
import doctor03 from "./../../assets/users/assets/img/doctors/doctor-03.jpg"


const policies = [
    {
        title: "Accident Insurance",
        description: [
            "Get financial benefits against accidental injuries",
            "Coverage against accidental death and permanent disabilities",
        ],
        image: doctor01,
        detailsLink: "/accident-insurance",
        bookingLink: "",
    },
    {
        title: "Health Insurance",
        description: [
            "Covers hospitalization and medical expenses",
            "Affordable premiums with cashless treatment",
        ],
        image: doctor02,
        detailsLink: "/health-insurance",
        bookingLink: "",
    },
    {
        title: "Travel Insurance",
        description: [
            "Get coverage for medical emergencies while traveling",
            "Protection against trip cancellations and lost luggage",
        ],
        image: doctor03,
        detailsLink: "/travel-insurance",
        bookingLink: "",
    }
];

function FeaturedPolicy () {
    return (
        <section className="section section-doctor">
            <div className="container-fluid">
                <h2 className="text-center mb-4">Featured Policies</h2>
                <div className="row d-flex justify-content-center">
                    {policies.map((policy, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="profile-widget">
                                <div className="doc-img">
                                    <Link to={policy.detailsLink}>
                                        <img className="img-fluid" alt={policy.title} src={policy.image} />
                                    </Link>
                                </div>
                                <div className="pro-content">
                                    <h3 className="title">
                                        <Link to={policy.detailsLink}>{policy.title}</Link>
                                        <i className="fas fa-check-circle verified"></i>
                                    </h3>
                                    <ul className="available-info">
                                        {policy.description.map((desc, i) => (
                                            <li key={i}>
                                                <i className={`fas ${i === 0 ? "fa-map-marker-alt" : "far fa-clock"}`}></i> {desc}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="row row-sm">
                                        <div className="col-6">
                                            <Link to={policy.detailsLink} className="btn view-btn">
                                                See Details
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to={policy.bookingLink} className="btn book-btn">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedPolicy;
