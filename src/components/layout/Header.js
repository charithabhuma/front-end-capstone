import { Link } from "react-router-dom";
import "./Header.css";
import pages from "../../constants/Pages";
import navLogo from "../../assets/nav-logo.jpg";

const Header = () => {
  console.log(pages["home"].path);
  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to={pages["home"].path}>
          <img src={navLogo} alt="Little Lemon logo" />
        </Link>
        <ul className="nav-bar-links">
          {Object.entries(pages).map(([index, page]) => (
            <li key={index}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
