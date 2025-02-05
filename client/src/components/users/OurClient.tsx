import ImageDoctor01 from "./../../assets/users/assets/img/doctors/doctor-01.jpg"
import ImageDoctor02 from "./../../assets/users/assets/img/doctors/doctor-02.jpg"
import ImageDoctor03 from "./../../assets/users/assets/img/doctors/doctor-03.jpg"
import ImageDoctor04 from "./../../assets/users/assets/img/doctors/doctor-04.jpg"
import ImageDoctor05 from "./../../assets/users/assets/img/doctors/doctor-05.jpg"
import ImageDoctor06 from "./../../assets/users/assets/img/doctors/doctor-06.jpg"
function OurClient() {
  return (
    <section className="section section-doctor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center mb-4">Company Alliance to Us</h2>
            <p>
              Let 'Amar Policy' become your trusted insurance solutions provider
            </p>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src={ImageDoctor01}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src={ImageDoctor02}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src={ImageDoctor03}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src={ImageDoctor04}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src={ImageDoctor05}
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src={ImageDoctor06}
                    />
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

export default OurClient;
