import DoctorImage from "./../../assets/users/assets/img/doctors/doctor-01.jpg"
function UpdateNews() {
    return (
        <section className="section section-features">
            <div className="container-fluid">
                <h2 className="text-center mb-4">Latest Updates and News</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img
                                        className="img-fluid"
                                        alt="User Image"
                                        src={DoctorImage}
                                    />
                                </a>
                            </div>
                            <div className="text-left pro-content">
                                <h5 className="speciality">
                                    বাইকার বীমাঃ মোটরসাইকেল ব্যবহারকারীদের জন্য দূর্ঘটনা বীমা
                                </h5>
                                <div className="col-6">
                                    <a href="booking.html" className="btn book-btn">
                                        Read More.....
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img
                                        className="img-fluid"
                                        alt="User Image"
                                        src={DoctorImage}
                                    />
                                </a>
                            </div>
                            <div className="text-left pro-content">
                                <h5 className="speciality">
                                    বাইকার বীমাঃ মোটরসাইকেল ব্যবহারকারীদের জন্য দূর্ঘটনা বীমা
                                </h5>
                                <div className="col-6">
                                    <a href="booking.html" className="btn book-btn">
                                        Read More.....
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img
                                        className="img-fluid"
                                        alt="User Image"
                                        src={DoctorImage}
                                    />
                                </a>
                            </div>
                            <div className="text-left pro-content">
                                <h5 className="speciality">
                                    বাইকার বীমাঃ মোটরসাইকেল ব্যবহারকারীদের জন্য দূর্ঘটনা বীমা
                                </h5>
                                <div className="col-6">
                                    <a href="booking.html" className="btn book-btn">
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
