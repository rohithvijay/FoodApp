import companyLogo from "./../assets/img/sample-logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
  <nav className="navbar navbar-expand-sm app-theme flex header">
    <div className="container-fluid">
      <div className="logo">
        <img src={companyLogo} alt="logo" />
      </div>
      <ul className="navbar-nav header-menu align-items-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
        </li>
        <Link to="/contactus" className="nav-link">
            Contact Us
          </Link>
          <Link to="/cart" className="nav-link">
            <i className="fa fa-shopping-cart"></i>
            <span>{cartItems.length}</span>
          </Link>
      </ul>
    </div>
  </nav>
  );
}
export default AppHeader;
