import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styes from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styes.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styes.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
