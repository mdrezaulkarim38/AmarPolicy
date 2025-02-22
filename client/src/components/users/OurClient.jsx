import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import ImageDoctor01 from "./../../assets/users/assets/img/doctors/doctor-01.jpg";
import ImageDoctor02 from "./../../assets/users/assets/img/doctors/doctor-02.jpg";
import ImageDoctor03 from "./../../assets/users/assets/img/doctors/doctor-03.jpg";
import ImageDoctor04 from "./../../assets/users/assets/img/doctors/doctor-04.jpg";
import ImageDoctor05 from "./../../assets/users/assets/img/doctors/doctor-05.jpg";
import ImageDoctor06 from "./../../assets/users/assets/img/doctors/doctor-06.jpg";

const doctors = [
    { img: ImageDoctor01, link: "" },
    { img: ImageDoctor02, link: "" },
    { img: ImageDoctor03, link: "" },
    { img: ImageDoctor04, link: "" },
    { img: ImageDoctor05, link: "" },
    { img: ImageDoctor06, link: "" },
];

function OurClient() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of doctors shown at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
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
                    <div className="col-lg-12">
                        <h2 className="text-center mb-4">Company Alliance to Us</h2>
                        <p className="text-center">
                            Let Amar Policy become your trusted insurance solutions provider
                        </p>
                        <Slider {...settings} className="customerSlider">
                            {doctors.map((doctor, index) => (
                                <div key={index} className="doc-img">
                                    <a href={doctor.link}>
                                        <img className="img-fluid" alt="User Image" src={doctor.img} />
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurClient;
