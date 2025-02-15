
// eslint-disable-next-line react/prop-types
function GetPersonalInsuranceForm({titleName}){
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="text-black">Get Personalized {titleName} Insurance Quotation</h4>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="organization"
                            placeholder="Organization Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="designation"
                            placeholder="Designation"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            className="form-control"
                            id="mobileNumber"
                            placeholder="Mobile Number"
                            required
                        />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-info btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GetPersonalInsuranceForm;