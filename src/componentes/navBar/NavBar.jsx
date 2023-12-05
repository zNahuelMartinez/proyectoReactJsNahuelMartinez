import CartWidget from "./CartWidget";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/public/zapalogo.png" alt="logo zapatilla" className="logo" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">
                Nike
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Adidas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Puma
              </a>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default NavBar;
