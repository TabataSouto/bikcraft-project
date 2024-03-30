import { Link } from "react-router-dom";
import logo from "../../assets/bikcraft.svg";
import "./style.css";

export const Header = () => {
  return (
    <header className="header-bg">
      <div className="container header">
        <Link to="/">
          <img src={logo} alt="logo" width="136" height="32" />
        </Link>
        <nav aria-label="primaria">
          <ul className="header-menu">
            <Link to="/bicycles">
              <li>Bicicletas</li>
            </Link>
            <Link to="/secure">
              <li>Seguros</li>
            </Link>
            <Link to="/contact">
              <li>Contatos</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
