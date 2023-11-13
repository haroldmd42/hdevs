import "./Navbar.css";


const NavBar = () => {
  return (
<>
      <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#"><img src='img/maac.png' className="logo" alt=""/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about"  style={{color: "black", fontSize: "20px"}}> Mis productos </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects"  style={{color: "black", fontSize: "20px"}} >Nuestra marca</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact"  style={{color: "black", fontSize: "20px"}} >Contactanos</a>
        </li>
      </ul>
    </div>
  </nav>
  
  </>
  );
};
export default NavBar;
