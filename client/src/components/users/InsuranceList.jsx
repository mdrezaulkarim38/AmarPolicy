import SpecialititesImg01 from "./../../assets/users/assets/img/specialities/specialities-01.png"
import SpecialititesImg02 from "./../../assets/users/assets/img/specialities/specialities-02.png"
import SpecialititesImg03 from "./../../assets/users/assets/img/specialities/specialities-03.png"
import SpecialititesImg04 from "./../../assets/users/assets/img/specialities/specialities-04.png"
import SpecialititesImg05 from "./../../assets/users/assets/img/specialities/specialities-05.png"
import SpecialititesImg06 from "./../../assets/users/assets/img/specialities/specialities-06.png"
function InsuranceList(){
    return (
        <section className="section section-specialities">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img src={SpecialititesImg01} className="img-fluid specialities" alt="Health Insurance" />
                            </div>
                            <p className="mb-0">Health Insurance</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img src={SpecialititesImg02} className="img-fluid specialities" alt="Life Insurance" />
                            </div>
                            <p className="mb-0">Travel Insurance</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img src={SpecialititesImg03} className="img-fluid specialities" alt="Corporate Insurance" />
                            </div>
                            <p className="mb-0">Accident Insurance</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img src={SpecialititesImg04} className="img-fluid specialities" alt="Corporate Insurance" />
                            </div>
                            <p className="mb-0">Car Insurance</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img src={SpecialititesImg05} className="img-fluid specialities" alt="Corporate Insurance" />
                            </div>
                            <p className="mb-0">Motorcycle Insurance</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="speciality-box text-center p-4 border rounded bg-white">
                            <div className="speciality-img mb-3">
                                <img src={SpecialititesImg06} className="img-fluid specialities" alt="Corporate Insurance" />
                            </div>
                            <p className="mb-0">Life Insurance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InsuranceList;