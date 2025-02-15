function RequestCallForm() {
    return (
        <section className="section section-specialities bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="text-center mb-4">Request for a phone call</h2>
                        <form action="#" method="POST" className="form-style">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="topic">Topic</label>
                                    <select
                                        id="topic"
                                        name="topic"
                                        className="form-control"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Select a topic
                                        </option>
                                        <option value="health_insurance">Health Insurance</option>
                                        <option value="life_insurance">Life Insurance</option>
                                        <option value="travel_insurance">Travel Insurance</option>
                                        <option value="car_insurance">Car Insurance</option>
                                        <option value="motorcycle_insurance">
                                            Motorcycle Insurance
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary">
                                    Send call request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RequestCallForm;
