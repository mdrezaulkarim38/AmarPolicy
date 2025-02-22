import MobileAppImg from "./../../assets/users/assets/img/features/feature.png"
function MobileApp(){
    return(
        <section className="section section-features">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 features-img">
                        <img
                            src={MobileAppImg}
                            className="img-fluid"
                            alt="Feature"
                            style={{maxWidth: "421px", maxHeight: "376px"}}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="section-header">
                            <h2 className="mt-2">Get the Amar Policy Mobile App now!</h2>
                            <p>Get access to all your insurance needs anytime, anywhere</p>
                        </div>

                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-3">
                                <i className="fas fa-check-circle text-success mr-3"></i>
                                Compare and get coverage on the top
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <i className="fas fa-check-circle text-success mr-3"></i>
                                Manage policy anytime, anywhere
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <i className="fas fa-check-circle text-success mr-3"></i>
                                Submit insurance claims easily
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <i className="fas fa-check-circle text-success mr-3"></i>
                                Get claim updates in real time
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fas fa-check-circle text-success mr-3"></i>
                                In-app extra benefits
                            </li>
                        </ul>

                        <div className="mt-4">
                            <h4 className="mb-3">Click here to download our app</h4>
                            <div className="d-flex">
                                <a href="#" className="btn btn-dark d-flex align-items-center mr-3">
                                    <i className="fab fa-google-play mr-2"></i> Google Play
                                </a>
                                <a href="#" className="btn btn-dark d-flex align-items-center">
                                    <i className="fab fa-apple mr-2"></i> App Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileApp;