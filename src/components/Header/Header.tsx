import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header className="header my-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <Link to="/" className="navbar-brand">
            SpaceX 🚀
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ " className="nav-link disabled" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
