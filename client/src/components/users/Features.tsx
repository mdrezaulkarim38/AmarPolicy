import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import FeatureImg from "./../../assets/users/assets/img/features/feature.png";
import FeatureImg01 from "./../../assets/users/assets/img/features/feature-01.jpg";
import FeatureImg02 from "./../../assets/users/assets/img/features/feature-02.jpg";
import FeatureImg03 from "./../../assets/users/assets/img/features/feature-03.jpg";
import FeatureImg04 from "./../../assets/users/assets/img/features/feature-04.jpg";
import FeatureImg05 from "./../../assets/users/assets/img/features/feature-05.jpg";
import FeatureImg06 from "./../../assets/users/assets/img/features/feature-06.jpg";

const features = [
    { img: FeatureImg01, text: "Patient Ward" },
    { img: FeatureImg02, text: "Test Room" },
    { img: FeatureImg03, text: "ICU" },
    { img: FeatureImg04, text: "Laboratory" },
    { img: FeatureImg05, text: "Operation" },
    { img: FeatureImg06, text: "Medical" },
];

function Features() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust the number of features shown at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-features">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 features-img">
                        <img src={FeatureImg} className="img-fluid" alt="Feature" />
                    </div>
                    <div className="col-md-7">
                        <div className="section-header">	
                            <h2 className="mt-2">Available Features in Our Clinic</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>	
                        <Slider {...settings}>
                            {features.map((feature, index) => (
                                <div className="feature-item text-center" key={index}>
                                    <img src={feature.img} className="img-fluid" alt="Feature" />
                                    <p>{feature.text}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
