import { Link } from "react-router-dom";
import FooterImage from "./../../assets/users/assets/img/footer-logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src={FooterImage} alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Amar Policy – Smart, Simple, Secure. Compare, choose, and
                      safeguard your future with effortless digital insurance
                      solutions at your hand.
                    </p>
                    {/* <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Our Product</h2>
                  <ul>
                    <li>
                      <Link to="/health-insurance">
                        <i className="fas fa-angle-double-right"></i>Health
                        Insurance
                      </Link>
                    </li>
                    <li>
                      <Link to="/travel-insurance">
                        <i className="fas fa-angle-double-right"></i>Travel
                        Insurance
                      </Link>
                    </li>
                    <li>
                      <Link to="/accident-insurance">
                        <i className="fas fa-angle-double-right"></i> Accident
                        Insurance
                      </Link>
                    </li>
                    <li>
                      <Link to="/car-insurance">
                        <i className="fas fa-angle-double-right"></i> Car
                        Insurance
                      </Link>
                    </li>
                    <li>
                      <Link to="/fire-insurance">
                        <i className="fas fa-angle-double-right"></i> Fire
                        Insurance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <p>
                        {" "}
                        Address: House : 687/689, Road: 10, Ave: 6<br /> Dhaka
                        1216{" "}
                      </p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt"></i> +88 09678 777180
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope"></i>{" "}
                      info@synergyinterface.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container-fluid">
            <div className="copyright">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="mb-0 text-white">
                    Copyrights © 2025 All Rights Reserved by
                    <a
                      href="https://synergyinterface.com/"
                      className="hover-white"
                    >
                      {" "}
                      Synergy Interface Ltd
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
