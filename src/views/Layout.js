import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <div className="nav-header">
          <div className="nav-item">
            <Link to="/">
              <div className="link-item">Home</div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/demo">
              <div className="link-item">Demo</div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/about">
              <div className="link-item">About</div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/contact">
              <div className="link-item">Contact</div>
            </Link>
          </div>
        </div>
      
        <Outlet />
      </>
    )
};

export default Layout;

