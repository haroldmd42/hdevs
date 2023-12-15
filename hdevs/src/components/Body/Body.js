import "./Body.css"

const Body = () => {
  return (
    <header class="jumbotron">
      <div class="container text-center">
        <h1 class="display-4">
         <strong> Hola!{" "}
         Soy Harold{" "} </strong>
         <i class="fa-solid fa-earth-americas fa-spin"></i>
        </h1>
        <p class="lead">
        
"Soy un desarrollador Full Stack apasionado por la creación de soluciones web innovadoras. Con experiencia en desarrollo Web y Quality Assurance, estoy listo para aportar mi creatividad y habilidades técnicas a tu próximo proyecto. ¡Descubre mi portafolio para conocer más!"
        </p>
        <a href="#bodies" className="icon-sroll"><i class="fa-solid fa-circle-arrow-down fa-shake"></i></a>
      </div>
    </header>
  );
};

export default Body;
