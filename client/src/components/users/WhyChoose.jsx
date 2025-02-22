import DoctorImage from "./../../assets/users/assets/img/doctors/doctor-01.jpg"
function WhyChoose(){
    return (
        <section className="section section-features">
            <div className="container-fluid">
                <h2 className="text-center mb-4">Why choose Amar Policy?</h2>
                <div className="row">
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
                            <div className="text-center pro-content">
                                <p className="speciality">
                                    Top Rated Insurance companies with a proven track record.
                                </p>
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
                            <div className="text-center pro-content">
                                <p className="speciality">
                                    More than 450000 people covered with claims every day.
                                </p>
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
                            <div className="text-center pro-content">
                                <p className="speciality">
                                    Widest range of policies with free claims assistance
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