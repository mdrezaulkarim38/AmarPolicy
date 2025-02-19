import SpecialImg01 from "./../../assets/users/assets/img/specialities/specialities-01.png"
import SpecialImg02 from "./../../assets/users/assets/img/specialities/specialities-02.png"
import SpecialImg03 from "./../../assets/users/assets/img/specialities/specialities-03.png"
function SmeCorporate() {
    return (
        <section className="section section-specialities">
            <div className="container-fluid">
                <div className="section-header text-center mb-4">
                    <h2>SME and Corporate Insurance Solution</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img
                                    src={SpecialImg01}
                                    className="img-fluid specialities"
                                    alt="Health Insurance"
                                />
                            </div>
                            <p className="mb-0">Group Insurance for employees</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img
                                    src={SpecialImg02}
                                    className="img-fluid specialities"
                                    alt="Life Insurance"
                                />
                            </div>
                            <p className="mb-0">Marine Insurance</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img
                                    src={SpecialImg03}
                                    className="img-fluid specialities"
                                    alt="Corporate Insurance"
                                />
                            </div>
                            <p className="mb-0">Fire Insurance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SmeCorporate;
