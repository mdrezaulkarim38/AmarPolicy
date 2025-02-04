import NavBar from "./NavBar";

function Home(){
    return (
        <>
        
		<div className="main-wrapper">
            <NavBar />            
			<section className="section section-search">
				<div className="container-fluid">
					<div className="banner-wrapper">
						<div className="banner-header text-center">
							<h1>Search Doctor, Make an Appointment</h1>
							<p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
						</div>
                         
						<div className="search-box">
							<form action="templateshub.net">
								<div className="form-group search-location">
									<input type="text" className="form-control" placeholder="Search Location" />
									<span className="form-text">Based on your Location</span>
								</div>
								<div className="form-group search-info">
									<input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
									<span className="form-text">Ex : Dental or Sugar Check up etc</span>
								</div>
								<button type="submit" className="btn btn-primary search-btn"><i className="fas fa-search"></i> <span>Search</span></button>
							</form>
						</div>
                        
						
					</div>
				</div>
			</section>
            
			<section className="section section-specialities">
				<div className="container-fluid">
					<div className="section-header text-center">
						<h2>Clinic and Specialities</h2>
						<p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-9">
                            
							<div className="specialities-slider slider">
                                
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../assets/img/specialities/specialities-01.png" className="img-fluid" alt="Speciality" />
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>
									<p>Urology</p>
								</div>	
                                
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../assets/img/specialities/specialities-02.png" className="img-fluid" alt="Speciality" />
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>
									<p>Neurology</p>	
								</div>	
                                
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../assets/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality" />
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Orthopedic</p>	
								</div>				
                                
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../assets/img/specialities/specialities-04.png" className="img-fluid" alt="Speciality" />
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Cardiologist</p>	
								</div>					
                                
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../assets/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Dentist</p>
								</div>					
                                
								
							</div>
                            
							
						</div>
					</div>
				</div>   
			</section>	 
            
			<section className="section section-doctor">
				<div className="container-fluid">
				   <div className="row">
						<div className="col-lg-4">
							<div className="section-header ">
								<h2>Book Our Doctor</h2>
								<p>Lorem Ipsum is simply dummy text </p>
							</div>
							<div className="about-content">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
								<p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>					
								<a href="javascript:;">Read More..</a>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="doctor-slider slider">
                                
								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-01.jpg" />
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Ruby Perrin</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<span className="d-inline-block average-rating">(17)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Florida, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $300 - $1000 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>
                                
								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-02.jpg" />
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Darren Elder</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(35)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Newyork, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $50 - $300 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>
                                
								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-03.jpg" />
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Deborah Angel</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(27)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Georgia, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $400 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>
                                
								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-04.jpg" />
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Sofia Brient</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(4)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Louisiana, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $150 - $250 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>
                                
								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-05.jpg"/>
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Marvin Campbell</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(66)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Michigan, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $50 - $700 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-06.jpg" />
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Katharine Berthold</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(52)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Texas, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $500 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-07.jpg" />
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Linda Tobin</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(43)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Kansas, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $1000 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<a href="doctor-profile.html">
											<img className="img-fluid" alt="User Image" src="../assets/img/doctors/doctor-08.jpg" />
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Paul Richard</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MBBS, MD - Dermatology , Venereology & Lepros</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(49)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> California, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $400 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
				   </div>
				</div>
			</section>

		   <section className="section section-features">
				<div className="container-fluid">
				   <div className="row">
						<div className="col-md-5 features-img">
							<img src="../assets/img/features/feature.png" className="img-fluid" alt="Feature" /> 
						</div>
						<div className="col-md-7">
							<div className="section-header">	
								<h2 className="mt-2">Availabe Features in Our Clinic</h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
							</div>	
							<div className="features-slider slider">

								<div className="feature-item text-center">
									<img src="../assets/img/features/feature-01.jpg" className="img-fluid" alt="Feature" />
									<p>Patient Ward</p>
								</div>

								<div className="feature-item text-center">
									<img src="../assets/img/features/feature-02.jpg" className="img-fluid" alt="Feature" />
									<p>Test Room</p>
								</div>

								<div className="feature-item text-center">
									<img src="../assets/img/features/feature-03.jpg" className="img-fluid" alt="Feature" />
									<p>ICU</p>
								</div>

								<div className="feature-item text-center">
									<img src="../assets/img/features/feature-04.jpg" className="img-fluid" alt="Feature" />
									<p>Laboratory</p>
								</div>

								<div className="feature-item text-center">
									<img src="../assets/img/features/feature-05.jpg" className="img-fluid" alt="Feature" />
									<p>Operation</p>
								</div>

								<div className="feature-item text-center">
									<img src="../assets/img/features/feature-06.jpg" className="img-fluid" alt="Feature"/>
									<p>Medical</p>
								</div>
							</div>
						</div>
				   </div>
				</div>
			</section>		

			<footer className="footer">
				
				<div className="footer-top">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-3 col-md-6">
							
								<div className="footer-widget footer-about">
									<div className="footer-logo">
										<img src="../assets/img/footer-logo.png" alt="logo"/>
									</div>
									<div className="footer-about-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
										<div className="social-icon">
											<ul>
												<li>
													<a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-twitter"></i> </a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
												</li>
												<li>
													<a href="#" target="_blank"><i className="fab fa-dribbble"></i> </a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								
							</div>
							
							<div className="col-lg-3 col-md-6">
							
								<div className="footer-widget footer-menu">
									<h2 className="footer-title">For Patients</h2>
									<ul>
										<li><a href="search.html"><i className="fas fa-angle-double-right"></i> Search for Doctors</a></li>
										<li><a href="login.html"><i className="fas fa-angle-double-right"></i> Login</a></li>
										<li><a href="register.html"><i className="fas fa-angle-double-right"></i> Register</a></li>
										<li><a href="booking.html"><i className="fas fa-angle-double-right"></i> Booking</a></li>
										<li><a href="patient-dashboard.html"><i className="fas fa-angle-double-right"></i> Patient Dashboard</a></li>
									</ul>
								</div>
								
							</div>
							
							<div className="col-lg-3 col-md-6">
							
								<div className="footer-widget footer-menu">
									<h2 className="footer-title">For Doctors</h2>
									<ul>
										<li><a href="appointments.html"><i className="fas fa-angle-double-right"></i> Appointments</a></li>
										<li><a href="chat.html"><i className="fas fa-angle-double-right"></i> Chat</a></li>
										<li><a href="login.html"><i className="fas fa-angle-double-right"></i> Login</a></li>
										<li><a href="doctor-register.html"><i className="fas fa-angle-double-right"></i> Register</a></li>
										<li><a href="doctor-dashboard.html"><i className="fas fa-angle-double-right"></i> Doctor Dashboard</a></li>
									</ul>
								</div>
								
								
							</div>
							
							<div className="col-lg-3 col-md-6">
							
								<div className="footer-widget footer-contact">
									<h2 className="footer-title">Contact Us</h2>
									<div className="footer-contact-info">
										<div className="footer-address">
											<span><i className="fas fa-map-marker-alt"></i></span>
											<p> 3556  Beech Street, San Francisco,<br/> California, CA 94108 </p>
										</div>
										<p>
											<i className="fas fa-phone-alt"></i>
											+1 315 369 5943
										</p>
										<p className="mb-0">
											<i className="fas fa-envelope"></i>
											doccure@example.com
										</p>
									</div>
								</div>
								
								
							</div>
							
						</div>
					</div>
				</div>
				
                <div className="footer-bottom">
					<div className="container-fluid">
					
						
						<div className="copyright">
							<div className="row">
								<div className="col-md-6 col-lg-6">
									<div className="copyright-text">
										<p className="mb-0"><a href="templateshub.net">Templates Hub</a></p>
									</div>
								</div>
								<div className="col-md-6 col-lg-6">
								
									
									<div className="copyright-menu">
										<ul className="policy-menu">
											<li><a href="term-condition.html">Terms and Conditions</a></li>
											<li><a href="privacy-policy.html">Policy</a></li>
										</ul>
									</div>
									
									
								</div>
							</div>
						</div>
						
						
					</div>
				</div>
				
				
			</footer>
			
		   
	   </div>
	   
        </>
    );
}

export default Home;