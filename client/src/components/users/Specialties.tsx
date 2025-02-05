import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Images
import specialities01 from "./../../assets/users/assets/img/specialities/specialities-01.png";
import specialities02 from "./../../assets/users/assets/img/specialities/specialities-02.png";
import specialities03 from "./../../assets/users/assets/img/specialities/specialities-03.png";
import specialities04 from "./../../assets/users/assets/img/specialities/specialities-04.png";
import specialities05 from "./../../assets/users/assets/img/specialities/specialities-05.png";

function Specialties() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  // Adjusted to show 5 items like your image
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
    <>
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <Slider {...sliderSettings}>
                {/* Specialties Items */}
                <div className="speciality-item">
                  <div className="speciality-img">
                    <img src={specialities01} alt="Urology" />
                    <span></span> {/* Blue dot */}
                  </div>
                  <p>Urology</p>
                </div>

                <div className="speciality-item">
                  <div className="speciality-img">
                    <img src={specialities02} alt="Neurology" />
                    <span></span>
                  </div>
                  <p>Neurology</p>
                </div>

                <div className="speciality-item">
                  <div className="speciality-img">
                    <img src={specialities03} alt="Orthopedic" />
                    <span></span>
                  </div>
                  <p>Orthopedic</p>
                </div>

                <div className="speciality-item">
                  <div className="speciality-img">
                    <img src={specialities04} alt="Cardiologist" />
                    <span></span>
                  </div>
                  <p>Cardiologist</p>
                </div>

                <div className="speciality-item">
                  <div className="speciality-img">
                    <img src={specialities05} alt="Dentist" />
                    <span></span>
                  </div>
                  <p>Dentist</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specialties;
