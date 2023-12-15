import "./Navbar.css";


const NavBar = () => {
  return (
    <>
      <div className="navbarcontains">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#" ><img src='img/logo.png' className="logo" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler" > <i class="fa fa-bars" id="bars" aria-hidden="true"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{ color: "white"}}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link fw-lighter" href="#about" style={{ color: "white", fontSize: "18px" }}> Proyectos </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-lighter" href="#projects" style={{ color: "white", fontSize: "18px" }} >Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-lighter" href="#contact" style={{ color: "white", fontSize: "18px" }} >Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
