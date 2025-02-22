import DoctorImage from "./../../assets/users/assets/img/doctors/doctor-01.jpg";
import DoctorImage2 from "./../../assets/users/assets/img/doctors/doctor-02.jpg";
import MotorImage from "./../../assets/users/assets/img/doctors/Motor.jpg";
function UpdateNews() {
  return (
    <section className="section section-features">
      <div className="container-fluid">
        <h2 className="text-center mb-4">Latest Updates and News</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="profile-widget">
              <div className="doc-img">
                <a href="">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src={MotorImage}
                  />
                </a>
              </div>
              <div className="text-left pro-content">
                <h5 className="speciality font-weight-bold">
                  Motorcycle Insurance:{" "}
                  <span className="font-weight-normal">
                    Accident insurance for motorcycle users
                  </span>
                </h5>
                <div className="col-6">
                  <a href="" className="btn book-btn">
                    Read More.....
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="profile-widget">
              <div className="doc-img">
                <a href="">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src={DoctorImage}
                  />
                </a>
              </div>
              <div className="text-left pro-content">
                <h5 className="speciality font-weight-bold">
                  Car Insurance:{" "}
                  <span className="font-weight-normal">
                    Accident insurance for car users
                  </span>
                </h5>
                <div className="col-6">
                  <a href="" className="btn book-btn">
                    Read More.....
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="profile-widget">
              <div className="doc-img">
                <a href="">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src={DoctorImage2}
                  />
                </a>
              </div>
              <div className="text-left pro-content">
                <h5 className="speciality font-weight-bold">
                  Health Insurance:{" "}
                  <span className="font-weight-normal">
                    Health insurance for all type users
                  </span>
                </h5>
                <div className="col-6">
                  <a href="" className="btn book-btn">
                    Read More.....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateNews;
