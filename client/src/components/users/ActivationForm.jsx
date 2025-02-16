import { useState } from "react";
function ActivationForm() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        mobile: '',
        email: '',
        productModel: '',
        purchaseDate: '',
        dealerName: '',
        activationCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data logic
        console.log(formData);
    };

    return (
        <div className="card-body">
            <form method="post" id="enrollment_form_id" onSubmit={handleSubmit}>
                <input type="hidden" name="_token" value="by8mcFxWqJ2ebvAxJmTMQU3Nj1xUHViupCc56qHS" />
                <input type="hidden" name="plan_type" value="" />
                <input type="hidden" name="plan_id" value="" />

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Full Name (As per NID/Passport/Birth Certificate) <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="date_of_birth">
                                Date of Birth <span className="text-danger">*</span>
                            </label>
                            <input
                                type="Date"
                                className="form-control"
                                id="date_of_birth"
                                name="date_of_birth"
                                placeholder="Date of Birth"
                                required
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="mobile" className="form-label">
                                Mobile <span className="text-danger">*</span>
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="mobile"
                                name="mobile"
                                placeholder="Mobile Number"
                                required
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email (Optional)
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="product_model" className="form-label">
                        Helmet Model <span className="text-danger">*</span>
                    </label>
                    <select
                        className="form-control"
                        id="product_model"
                        name="product_model"
                        required
                        value={formData.productModel}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Origine Delta">Origine Delta</option>
                        <option value="Origine Dinamo">Origine Dinamo</option>
                        <option value="Origine Strada">Origine Strada</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="purchase_date" className="form-label">
                        Helmet Purchase Date <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="purchase_date"
                        name="purchase_date"
                        required
                        value={formData.purchaseDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dealer_name" className="form-label">
                        Dealer Name <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="dealer_name"
                        name="dealer_name"
                        placeholder="Dealer Name"
                        required
                        value={formData.dealerName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="activation_code" className="form-label">
                        Activation Code <span className="text-danger">*</span>
                    </label>
                    <p className="has-text-info is-size-7">
                        Please check the back side of the warranty/insurance card to get the Activation Code
                    </p>
                    <input
                        type="text"
                        className="form-control"
                        id="activation_code"
                        name="activation_code"
                        required
                        value={formData.activationCode}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-3 form-group">
                    <small>
                        By clicking submit I am agreeing to the{' '}
                        <a href="https://bimafy.com/terms-of-service" target="_blank" rel="noopener noreferrer">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="https://bimafy.com/channel/speedoz/plans" target="_blank" rel="noopener noreferrer">
                            insurance policy specific conditions
                        </a>
                        .
                    </small>
                    <br />
                    <button type="submit" className="mt-3 btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ActivationForm;