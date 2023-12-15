import "./My.css";
import App from "./TextAppear";

const My = () => {
  return (
    <section id="bodies">
      <section id="about" class="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <App />
              <p>
                Soy un desarrollador web full stack y Quality Assurance con experiencia en la creación de aplicaciones web innovadoras. Mi enfoque se centra en interfaces de usuario atractivas y responsivas, utilizando tecnologías como HTML, CSS, JavaScript, React y Angular. También tengo habilidades en el desarrollo del lado del servidor con Node.js y Python, y experiencia en bases de datos como MySQL, MongoDB y PostgreSQL. Comprometido con la calidad y la excelencia en el desarrollo, estoy listo para enfrentar nuevos desafíos. ¡Contáctame para llevar tus ideas al siguiente nivel!</p>
            </div>
            <div className="col-md-6">
              <img src="img/fondogris2.png" alt="Perfil" className="img-fluid" />
              <img src="img/stars.png" alt="Perfil" className="img-fluid2" />
            </div>
            
          </div>
        </div>
      </section>



    </section>
  );
};

export default My;
