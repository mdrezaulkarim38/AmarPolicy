import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import doctor01 from "./../../assets/users/assets/img/doctors/doctor-01.jpg";
import doctor02 from "./../../assets/users/assets/img/doctors/doctor-02.jpg";
import doctor03 from "./../../assets/users/assets/img/doctors/doctor-03.jpg";
import doctor04 from "./../../assets/users/assets/img/doctors/doctor-04.jpg";
import doctor05 from "./../../assets/users/assets/img/doctors/doctor-05.jpg";
import doctor06 from "./../../assets/users/assets/img/doctors/doctor-06.jpg";
import doctor07 from "./../../assets/users/assets/img/doctors/doctor-07.jpg";
import doctor08 from "./../../assets/users/assets/img/doctors/doctor-08.jpg";

const doctors = [
    { img: doctor01, name: "Ruby Perrin", speciality: "MDS - Periodontology and Oral Implantology, BDS", location: "Florida, USA", price: "$300 - $1000", rating: 5 },
    { img: doctor02, name: "Darren Elder", speciality: "BDS, MDS - Oral & Maxillofacial Surgery", location: "New York, USA", price: "$50 - $300", rating: 4 },
    { img: doctor03, name: "Deborah Angel", speciality: "MBBS, MD - General Medicine, DNB - Cardiology", location: "Georgia, USA", price: "$100 - $400", rating: 4 },
    { img: doctor04, name: "Sofia Brient", speciality: "MBBS, MS - General Surgery, MCh - Urology", location: "Louisiana, USA", price: "$150 - $250", rating: 4 },
    { img: doctor05, name: "Marvin Campbell", speciality: "MBBS, MD - Ophthalmology, DNB - Ophthalmology", location: "Michigan, USA", price: "$50 - $700", rating: 4 },
    { img: doctor06, name: "Katharine Berthold", speciality: "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics", location: "Texas, USA", price: "$100 - $500", rating: 4 },
    { img: doctor07, name: "Linda Tobin", speciality: "MBBS, MD - General Medicine, DM - Neurology", location: "California, USA", price: "$200 - $600", rating: 4 },
    { img: doctor08, name: "Paul Richard", speciality: "MBBS, MD - Dermatology, DNB - Dermatology", location: "Washington, USA", price: "$250 - $800", rating: 4 },
];

function BookDoctor() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of doctors shown at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-doctor">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-header">
                            <h2>Book Our Doctor</h2>
                            <p>Lorem Ipsum is simply dummy text</p>
                        </div>
                        <div className="about-content">
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            <p>Web page editors now use Lorem Ipsum as their default model text.</p>
                            <button onClick={() => console.log("Favorite clicked")}>Read More..</button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Slider {...settings}>
                            {doctors.map((doctor, index) => (
                                <div className="profile-widget" key={index}>
                                    <div className="doc-img">
                                        <Link to="doctor-profile">
                                            <img className="img-fluid" alt="User Image" src={doctor.img} />
                                        </Link>
                                        <Link to="#" className="fav-btn">
                                            <i className="far fa-bookmark"></i>
                                        </Link>
                                    </div>
                                    <div className="pro-content">
                                        <h3 className="title">
                                            <Link to="doctor-profile">{doctor.name}</Link> 
                                            <i className="fas fa-check-circle verified"></i>
                                        </h3>
                                        <p className="speciality">{doctor.speciality}</p>
                                        <div className="rating">
                                            {[...Array(doctor.rating)].map((_, i) => (
                                                <i className="fas fa-star filled" key={i}></i>
                                            ))}
                                            {[...Array(5 - doctor.rating)].map((_, i) => (
                                                <i className="fas fa-star" key={i}></i>
                                            ))}
                                            <span className="d-inline-block average-rating">(17)</span>
                                        </div>
                                        <ul className="available-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> {doctor.location}
                                            </li>
                                            <li>
                                                <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                            </li>
                                            <li>
                                                <i className="far fa-money-bill-alt"></i> {doctor.price}
                                            </li>
                                        </ul>
                                        <div className="row row-sm">
                                            <div className="col-6">
                                                <Link to="doctor-profile" className="btn view-btn">View Profile</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="booking" className="btn book-btn">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDoctor;
