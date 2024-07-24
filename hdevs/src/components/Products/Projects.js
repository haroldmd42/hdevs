/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Projects.css";


const Projects = () => {
  return (
    <section id="skills">
      <div className="description-skills2">
          <h1>Skills</h1>
          <p>Conoce algunas de mis habilidades.</p>
        </div>
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="../img/coder.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Desarrollo web</h5>
            <p class="card-text">Soy un desarrollador de software full stack con experiencia en crear aplicaciones web completas, desde el diseño frontend hasta el desarrollo backend. Mi enfoque es entregar soluciones digitales innovadoras y eficientes.</p>
            <ul>
            <li><strong>Lenguajes de Programación:</strong> JavaScript, Python, Java, TypeScript</li>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Angular</li>
            <li><strong>Backend:</strong> Node.js, Spring Boot</li>
            <li><strong>Bases de Datos:</strong> MySQL, PostgreSQL, MongoDB</li>
            <li><strong>Control de Versiones:</strong> Git</li>
        </ul>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../img/analista.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Análisis de calidad</h5>
            <p class="card-text">
            Soy un analista de calidad de software especializado en asegurar la excelencia de los productos digitales. Tengo experiencia en pruebas manuales y automatizadas, manejo de herramientas como Cypress, Playwright, Puppeteer y JIRA, y análisis de seguridad para detectar vulnerabilidades. Mi enfoque es garantizar que cada software cumpla con los más altos estándares de calidad.</p>
            <ul>
            <li><strong>Metodologías de Pruebas:</strong> Pruebas Manuales, Pruebas Automatizadas</li>
            <li><strong>Herramientas de Pruebas:</strong> Cypress, Playwright, Puppeteer, JIRA, TestRail, Postman</li>
            <li><strong>Lenguajes de Script:</strong> JavaScript, Python</li>
            <li><strong>Gestión de Defectos:</strong> Reporte y Seguimiento de Errores</li>
            <li><strong>Pruebas de Seguridad:</strong> Análisis de Vulnerabilidades, Pruebas de Penetración</li>
            <li><strong>Documentación:</strong> Creación de Casos de Prueba, Planes de Pruebas</li>
            <li><strong>Colaboración:</strong> Comunicación con Equipos de Desarrollo, Revisión de Requisitos</li>
        </ul>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../img/ciber.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Ciberseguridad</h5>
            <p class="card-text">En ciberseguridad cuento con experiencia en proteger sistemas y datos contra amenazas y vulnerabilidades. Especializado en análisis de seguridad, pruebas de penetración y desarrollo de estrategias de defensa. Mi objetivo es asegurar que tus activos digitales permanezcan seguros frente a cualquier riesgo.</p>
            <ul>
            <li><strong>Análisis de Vulnerabilidades:</strong> Identificación y evaluación de vulnerabilidades en sistemas y redes.</li>
            <li><strong>Pruebas de Penetración:</strong> Realización de pruebas para detectar y explotar vulnerabilidades.</li>
            <li><strong>Seguridad de Redes:</strong> Configuración y monitoreo de firewalls, IDS/IPS y VPNs.</li>
            <li><strong>Gestión de Incidentes</strong></li>
            <li><strong>Seguridad en Aplicaciones</strong> </li>
            <li><strong>Análisis Forense:</strong> Investigación y análisis de incidentes de seguridad para determinar causas y efectos.</li>
            <li><strong>Cumplimiento Normativo:</strong> Conocimiento de normativas y estándares como GDPR, HIPAA y PCI-DSS.</li>
            <li><strong>Seguridad en la Nube:</strong> Gestión de la seguridad en entornos de nube y servicios de infraestructura como AWS, Azure o Google Cloud.</li>
        </ul>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

      {/*     <div id="carouselExampleDark" className="carousel carousel-light slide">
        <div className="description-skills2">
          <h1>Skills</h1>
          <p>Conoce algunas de mis habilidades.</p>
        </div>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner" >
          <div className="carousel-item active" data-bs-interval="10">
            <i class="fa-brands fa-js" id="items-skills"></i>
            <div className="description-skills2">
              <h5>JavaScript</h5>
              <div class="container ">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width:"80%"}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10" >
            <i class="fa-brands fa-python" id="items-skills"></i>
            <div className="description-skills2">
              <h5>Python</h5>
              <div class="container ">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width:"60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
              </div>            
              </div>
          </div>
          <div className="carousel-item" data-bs-interval="10" >
            <i class="fa-brands fa-react" id="items-skills"></i>
            <div className="description-skills2">
              <h5>React</h5>
              <div class="container ">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width:"60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
              </div> 
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10" >
            <i class="fa-brands fa-java" id="items-skills"></i>
            <div className="description-skills2">
              <h5>Java</h5>
              <div class="container ">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width:"60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
              </div> 
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10" >
            <i class="fa-solid fa-user-check" id="items-skills"></i>
            <div className="description-skills2">
              <h5>Qualyty Assurance</h5>
              <div class="container ">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width:"60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
              </div> 
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10">
          <i class="fa-solid fa-database" id="items-skills"></i>
            <div className="description-skills2">
              <h5>Database</h5>
              <div class="container ">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width:"60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>*/}
    </section>
  );
};

export default Projects;
