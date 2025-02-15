import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Contact({contactTile}) {
    const [formData, setFormData] = useState({
        department: "support",
        subject: "",
        name: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log("Form Data Submitted:", formData);
        // Add form submission logic here
    };

    return (
        <div className="section py-5 bg-light">
            <div className="container">
                <div className="section-heading text-center mb-4">
                    <h3 className="title">{contactTile}</h3>
                </div>

                <div className="row">
                    {/* Contact Info Box */}
                    <div className="col-lg-4 d-flex">
                        <div className="contact-info-box p-4 bg-white border rounded shadow-sm flex-fill">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                  <span className="mr-2">
                    <i className="fa fa-phone"></i>
                  </span>
                                    <a href="tel:+88-02-58070873" className="text-dark">
                                        +88-02-58070873
                                    </a>
                                </li>
                                <li className="mb-3">
                  <span className="mr-2">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                                    <a
                                        href="http://wa.me/880258070873"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark"
                                    >
                                        WhatsApp
                                    </a>
                                </li>
                                <li className="mb-3">
                  <span className="mr-2">
                    <i className="fa fa-envelope"></i>
                  </span>
                                    <a
                                        href="mailto:info@synergyinterface.com"
                                        className="text-dark"
                                    >
                                        info@synergyinterface.com
                                    </a>
                                </li>
                                <li>
                  <span className="mr-2">
                    <i className="fa fa-map-marker-alt"></i>
                  </span>
                                    <a
                                        href="https://maps.app.goo.gl/Rzzss9XdMfwqWiYg8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark"
                                    >
                                        Address: House : 687/689, Road: 10, Dhaka 1216
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 d-flex">
                        <div className="contact-form-box p-4 bg-white border rounded shadow-sm flex-fill">
                            <fieldset>
                                <legend className="h5 mb-4">Type of Assistance:</legend>
                                <div className="form-group mb-4">
                                    <div className="d-flex align-items-center">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="support"
                                                name="department"
                                                value="support"
                                                checked={formData.department === "support"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="support">
                                                Support
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="sales"
                                                name="department"
                                                value="sales"
                                                checked={formData.department === "sales"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="sales">
                                                Information
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group form-focus mb-3">
                                            <input
                                                type="text"
                                                className="form-control floating"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                            <label className="focus-label">Subject</label>
                                        </div>
                                        <div className="form-group form-focus mb-3">
                                            <input
                                                type="text"
                                                className="form-control floating"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            <label className="focus-label">Name</label>
                                        </div>
                                        <div className="form-group form-focus mb-3">
                                            <input
                                                type="text"
                                                className="form-control floating"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                            />
                                            <label className="focus-label">Mobile Number</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3">
                      <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                      ></textarea>
                                        </div>
                                        <div className="form-group text-right">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </button>
                                        </div>

                                        <div className="loading-overlay text-center d-none">
                                            <i className="fa fa-spinner fa-3x fa-spin"></i>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
