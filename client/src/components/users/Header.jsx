import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import HeaderLogo from "./../../assets/users/assets/img/logo.png";

function Header() {
  const { token, logout } = useAuth();

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
            <button id="menu_close" className="menu-close border-0 bg-white">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <ul className="main-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li className="has-submenu">
              <Link to="/product">
                Products <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/health-insurance">Health Insurance</Link>
                </li>
                <li>
                  <Link to="/travel-insurance">Travel Insurance</Link>
                </li>
                <li>
                  <Link to="/accident-insurance">Accident Insurance</Link>
                </li>
                <li>
                  <Link to="/car-insurance">Car Insurance</Link>
                </li>
                <li>
                  <Link to="/motorcycle-insurance">Motorcycle Insurance</Link>
                </li>
                <li>
                  <Link to="/life-insurance">Life Insurance</Link>
                </li>
                <li>
                  <Link to="/group-insurance">
                    Group Insurance for Employees
                  </Link>
                </li>
                <li>
                  <Link to="/marine-insurance">Marine Insurance</Link>
                </li>
                <li>
                  <Link to="/fire-insurance">Fire Insurance</Link>
                </li>
              </ul>
            </li>
            {/* <li className="has-submenu d-none">
              <Link to="/enrollments">
                Activate <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/speedoz">Origine Helmets by Speedoz</Link>
                </li>
                <li>
                  <Link to="/mt-speedoz">MT Helmets by Speedoz</Link>
                </li>
                <li>
                  <Link to="/gearx">GearX Bangladesh</Link>
                </li>
                <li>
                  <Link to="/ar-helmets">AR Helmets</Link>
                </li>
                <li>
                  <Link to="/freedconn">FreedConn Bangladesh</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/login" rel="noopener noreferrer">
                Claims
              </Link>
            </li>
            <li className="has-submenu">
              <Link to="#">
                Support <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/faq">F.A.Q</Link>
                </li>
              </ul>
            </li>

            {!token && (
              <li className="login-link">
                <Link to="/login">Login / Signup</Link>
              </li>
            )}
          </ul>
        </div>

        <ul className="nav header-navbar-rht">
          {!token ? (
            <li className="nav-item">
              <Link className="nav-link header-login" to="/login">
                Login / Signup
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <button
                className="nav-link header-login btn btn-danger"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
