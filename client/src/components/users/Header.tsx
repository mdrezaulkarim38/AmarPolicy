import { Link } from "react-router-dom";
import HeaderLogo from "./../../assets/users/assets/img/logo.png";

function Header() {
  return (
    <header className="text-left header">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <button id="mobile_btn" className="navbar-toggler">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <Link to="/" className="navbar-brand logo">
            <img src={HeaderLogo} className="img-fluid" alt="Logo" />
          </Link>
        </div>

        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/" className="menu-logo">
              <img src={HeaderLogo} className="img-fluid" alt="Logo" />
            </Link>
            <button id="menu_close" className="menu-close">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <ul className="main-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li className="has-submenu">
              <a href="#">Products <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><Link to="/health-insurance">Health Insurance</Link></li>
                <li><Link to="/travel-insurance">Travel Insurance</Link></li>
                <li><Link to="/accident-insurance">Accident Insurance</Link></li>
                <li><Link to="/car-insurance">Car Insurance</Link></li>
                <li><Link to="/motorcycle-insurance">Motorcycle Insurance</Link></li>
                <li><Link to="/life-insurance">Life Insurance</Link></li>
                <li><Link to="/group-insurance">Group Insurance for Employees</Link></li>
                <li><Link to="/marine-insurance">Marine Insurance</Link></li>
                <li><Link to="/fire-insurance">Fire Insurance</Link></li>
              </ul>
            </li>

            <li className="has-submenu">
              <a href="#">Doctors <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><a href="doctor-dashboard.html">Doctor Dashboard</a></li>
                <li><a href="appointments.html">Appointments</a></li>
                <li><a href="schedule-timings.html">Schedule Timing</a></li>
                <li><a href="my-patients.html">Patients List</a></li>
                <li><a href="patient-profile.html">Patients Profile</a></li>
                <li><a href="chat-doctor.html">Chat</a></li>
                <li><a href="invoices.html">Invoices</a></li>
                <li><a href="doctor-profile-settings.html">Profile Settings</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="doctor-register.html">Doctor Register</a></li>
              </ul>
            </li>

            <li>
              <a href="admin/index.html" target="_blank" rel="noopener noreferrer">Admin</a>
            </li>

            <li className="login-link">
              <Link to="/login">Login / Signup</Link>
            </li>
          </ul>
        </div>

        <ul className="nav header-navbar-rht">
          <li className="nav-item contact-item">
            <div className="header-contact-img">
              <i className="far fa-hospital"></i>
            </div>
            <div className="header-contact-detail">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header">+1 315 369 5943</p>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link header-login" to="/login">Login / Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
