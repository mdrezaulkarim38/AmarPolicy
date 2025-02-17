import SpecialImg01 from "./../../assets/users/assets/img/specialities/specialities-01.png"
import SpecialImg02 from "./../../assets/users/assets/img/specialities/specialities-02.png"
import SpecialImg03 from "./../../assets/users/assets/img/specialities/specialities-03.png"

function HowWorks() {
    return (
        <>
            <section className="section section-specialities bg-light py-5">
                <div className="container-fluid">
                    <div className="section-header text-center mb-4">
                        <h2>How Amar Policy Works</h2>
                    </div>

                    <div className="speciality-box text-center p-4 border rounded bg-white">
                        <div className="row justify-content-center">
                            <div className="col-md-3 mb-4">
                                <div>
                                    <div className="speciality-img mb-3">
                                        <img
                                            src={SpecialImg01}
                                            className="img-fluid"
                                            alt="Health Insurance"
                                        />
                                    </div>
                                    <p className="mb-0">
                                        Choose your coverage from the options above.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4">
                                <div>
                                    <div className="speciality-img mb-3">
                                        <img
                                            src={SpecialImg02}
                                            className="img-fluid"
                                            alt="Life Insurance"
                                        />
                                    </div>
                                    <p className="mb-0">
                                        Order according to your needs and convenience.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div>
                                    <div className="speciality-img mb-3">
                                        <img
                                            src={SpecialImg03}
                                            className="img-fluid"
                                            alt="Corporate Insurance"
                                        />
                                    </div>
                                    <p className="mb-0">
                                        Confirm - where the delivery address and payment will be.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HowWorks;
