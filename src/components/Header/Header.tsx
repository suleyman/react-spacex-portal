import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="header my-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <a className="navbar-brand" href="#">
            SpaceX 🚀
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
