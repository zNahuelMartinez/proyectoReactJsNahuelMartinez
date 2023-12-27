import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/public/zapalogo.png" alt="logo zapatilla" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" to="/categorias/Nike">
                Nike
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/categorias/Adidas">
                Adidas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/categorias/Puma">
                Puma
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default NavBar;
