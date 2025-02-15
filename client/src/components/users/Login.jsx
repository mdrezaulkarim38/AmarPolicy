import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ImageLogin from "../../assets/users/assets/img/login-banner.png"
import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";

function Login(){
    const { token, login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const [error, setError] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        try
        {
            await login(formData.email, formData.password);
        }
        catch(err)
        {
            setError(`Login Fail ${err}`)
        }
    };
    if(token)
    {
        return <Navigate to="/" />
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
                                        <img src={ImageLogin} className="img-fluid" alt="Doccure Login" />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <div className="login-header">
                                            <h3>Login</h3>
                                        </div>
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group form-focus">
                                                <input type="email" name="email" className="form-control floating" value={formData.email} onChange={handleChange} required/>
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" name="password" className="form-control floating" value={formData.password} onChange={handleChange}/>
                                                <label className="focus-label">Password</label>
                                            </div>
                                            <div className="text-right">
                                                <a className="forgot-link" href="#">Forgot Password ?</a>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                            <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
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
}

export default Login;