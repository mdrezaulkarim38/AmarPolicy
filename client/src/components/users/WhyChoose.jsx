import { Link } from "react-router-dom";
import DoctorImage from "./../../assets/users/assets/img/2149631022.jpg"
import AIImage from "./../../assets/users/assets/img/AI.jpg"
import CompareImage from "./../../assets/users/assets/img/compare.jpg"
function WhyChoose(){
    return (
        <section className="section section-features">
            <div className="container-fluid">
                <h2 className="text-center mb-4">Why choose Amar Policy?</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <Link to="/InsuranceBlogPage">
                                    <img
                                        className="img-fluid"
                                        alt="User Image"
                                        src={DoctorImage}
                                    />
                                </Link>
                            </div>
                            <div className="text-center pro-content">
                                <p className="speciality">
                                    We are align with Top Rated Insurance companies with a proven track record.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <Link to="/InsuranceBlogPageAI">
                                    <img
                                        className="img-fluid"
                                        alt="User Image"
                                        src={AIImage}
                                    />
                                </Link>
                            </div>
                            <div className="text-center pro-content">
                                <p className="speciality">
                                    We use Artificial Intelligence in insurance claiming  Process
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <Link to="/InsuranceBlogPageCompare">
                                    <img
                                        className="img-fluid"
                                        alt="User Image"
                                        src={CompareImage}
                                    />
                                </Link>
                            </div>
                            <div className="text-center pro-content">
                                <p className="speciality">
                                Easily Compare between the top most insurance company and chose
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;