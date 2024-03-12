import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/home"}>HOME</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/menu"}>MENU</Link>
        <Link to={"/reservations"}>RESERVATIONS</Link>
        <Link to={"/orderOnline"}>ORDER ONLINE</Link>
        <Link to={"/login"}>LOGIN</Link>
      </nav>
    </header>
  );
};

export default Header;
