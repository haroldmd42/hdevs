import "./My.css";
import App from "./TextAppear";

const My = () => {
  return (
    <section id="bodies">
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <App />
              <p>
                Soy un desarrollador web full stack con una sólida experiencia en la creación de aplicaciones web innovadoras. Además, cuento con una amplia trayectoria en análisis de calidad de software y ciberseguridad.

                Domino múltiples lenguajes de programación y tengo experiencia en análisis, ejecución de pruebas manuales y automatizadas para garantizar la calidad del software. También tengo habilidades en ciberseguridad, incluyendo la realización de pruebas y la elaboración de estrategias para asegurar la integridad de tus productos.

                ¡Contáctame para llevar tus ideas al siguiente nivel!</p>
                
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
