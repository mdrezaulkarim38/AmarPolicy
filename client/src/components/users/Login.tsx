import { Link } from "react-router-dom";
import ImageLogin from "../../assets/users/assets/img/login-banner.png"
import Header from "./Header";
import Footer from "./Footer";
const Login = () => {
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
											<h3>Login <span>Doccure</span></h3>
										</div>
										<form action="https://dreamguys.co.in/demo/doccure/index.html">
											<div className="form-group form-focus">
												<input type="email" className="form-control floating" />
												<label className="focus-label">Email</label>
											</div>
											<div className="form-group form-focus">
												<input type="password" className="form-control floating" />
												<label className="focus-label">Password</label>
											</div>
											<div className="text-right">
												<a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
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