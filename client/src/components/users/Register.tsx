import { Link } from "react-router-dom";

import RegisterImage from "./../../assets/users/assets/img/login-banner.png";
import Header from "./Header";
import Footer from "./Footer";
const Register = () => {
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
										<img src={RegisterImage} className="img-fluid" alt="Doccure Register" />	
									</div>
									<div className="col-md-12 col-lg-6 login-right">
										<div className="login-header">
											<h3>Patient Register <a href="doctor-register.html">Are you a Doctor?</a></h3>
										</div>
										
										<form action="https://dreamguys.co.in/demo/doccure/doctor-dashboard.html">
											<div className="form-group form-focus">
												<input type="text" className="form-control floating" />
												<label className="focus-label">Name</label>
											</div>
											<div className="form-group form-focus">
												<input type="text" className="form-control floating" />
												<label className="focus-label">Mobile Number</label>
											</div>
											<div className="form-group form-focus">
												<input type="password" className="form-control floating" />
												<label className="focus-label">Create Password</label>
											</div>
											<div className="text-right">
												<Link className="forgot-link" to="/login">Already have an account?</Link>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
											<div className="login-or">
												<span className="or-line"></span>
												<span className="span-or">or</span>
											</div>
											<div className="row form-row social-login">
												<div className="col-6">
													<a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1"></i> Login</a>
												</div>
												<div className="col-6">
													<a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Login</a>
												</div>
											</div>
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

export default Register;