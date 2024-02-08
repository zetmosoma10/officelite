import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container">
      <Link to="/">
        <img src="shared/logo.svg" />
      </Link>
    </nav>
  );
}

export default NavBar;
