import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link,Navigate  } from "react-router-dom";
import RegisterImage from "../../assets/users/assets/img/login-banner.png";
import Header from "./Header";
import Footer from "./Footer";

function Register(){
    const { register, token } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData.name,formData.phone,formData.email, formData.password);
        } catch (err) {
            setError(`Registration failed ${err}`);
        }
    };
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div className="main-wrapper">
            <Header />
            <div className="content mb-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img src={RegisterImage} className="img-fluid" alt="Register" />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <div className="login-header">
                                            <h3>Register</h3>
                                        </div>
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group form-focus">
                                                <input type="text" name="name" className="form-control floating" value={formData.name} onChange={handleChange} required />
                                                <label className="focus-label">Name</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="text" name="phone" className="form-control floating" value={formData.phone} onChange={handleChange} required />
                                                <label className="focus-label">Mobile Number</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="email" name="email" className="form-control floating" value={formData.email} onChange={handleChange} required />
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" name="password" className="form-control floating" value={formData.password} onChange={handleChange} required />
                                                <label className="focus-label">Create Password</label>
                                            </div>
                                            <div className="text-right">
                                                <Link className="forgot-link" to="/login">Already have an account?</Link>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
