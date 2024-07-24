import "./Body.css"

const Body = () => {
  return (
    <header className="jumbotron" >
      <div className="container text-center">
        <h1 className="display-4">
         <strong> Hola!{" "}
         Soy Harold{" "} </strong>
         <i className="fa-solid fa-earth-americas fa-spin"></i>
        </h1>
        <p className="lead">
        Soy un desarrollador Full Stack apasionado por la creación de soluciones web innovadoras. Con experiencia en desarrollo Web, Análisis de calidad y Ciberseguridad, estoy listo para aportar mi creatividad y habilidades técnicas a tu próximo proyecto. ¡Descubre mi portafolio para conocer más!
        </p>
        <a href="#bodies" className="icon-sroll"><i className="fa-solid fa-circle-arrow-down fa-shake"></i></a>
      </div>
    </header>
  );
};

export default Body;
