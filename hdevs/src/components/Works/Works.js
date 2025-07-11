import "./Works.css"

const Works = () => {
  return (
    <section id="works">

      <div id="carouselExampleDark1" className="carousel carousel-light slide">
        <div className="description">
          <h1>Proyectos</h1>
          <p>
            Con mi experiencia he logrado desarrollar proyectos diversos, desde sitios web corporativos hasta aplicaciones interactivas, me destaco por mi enfoque en la calidad y la adaptabilidad a nuevas tecnologías. Mi objetivo es desarrollar experiencias web excepcionales y eficientes. Conoce aquí algunos de ellos</p>
        </div>
        <br></br>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="4" aria-label="Slide 5"></button>


        </div>
        <div className="carousel-inner" >
        <div className="carousel-item active" data-bs-interval="0.1">
            <div class="container-card">
              <div class="wrapper-card">
                <div class="banner-image5"> </div>
                <h2>Herramientas</h2>
                <p>Herramientas y Recursos útiles para diversas tareas, creados con React.

Herramientas para entornos de trabajop colaborativo.</p>
              </div>
              <div class="button-wrapper">
                <a className="links-git" href="https://haroldmd42.github.io/sprint-points/" target="_blank"><button class="btn outline">VISUALIZAR</button></a> 
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10">
            <div class="container-card">
              <div class="wrapper-card">
                <div class="banner-image"> </div>
                <h2>Página Web Institucional</h2>
                <p>Página Web creada para el Cuerpo de Bomberos Voluntarios de Honda, creada con HTML, CSS y JavaScript, utilizando también algunas librerías y FrameWorks para implementar algunos procesos.</p>
              </div>
              <div class="button-wrapper">
                <a className="links-git" href="https://bomberoshonda.com/" target="_blank"><button class="btn outline">VISUALIZAR</button></a>
                
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10" >
            <div class="container-card">
              <div class="wrapper-card">
                <div class="banner-image2"> </div>
                <h2>Página Web Fundación </h2>
                <p>Página Web creada para una fundación denominada Ginebra Diversa, creada con HTML, CSS y JavaScript, utilizando también algunas librerías y FrameWorks para implementar algunos procesos.</p>
              </div>
              <div class="button-wrapper">
              <a className="links-git" href="https://fundaciongidi.vercel.app/" target="_blank"><button class="btn outline">VISUALIZAR</button></a>
                
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10" >
            <div class="container-card">
              <div class="wrapper-card">
                <div class="banner-image3"> </div>
                <h2> Aplicación Web Interactiva</h2>
                <p>Aplicación web creada con React y node.js utilizando algunas librerías y FrameWorks, en donde puedes crear equipos y capturar eventos, con el fin de mejorar las habilidades con React.</p>
              </div>
              <div class="button-wrapper">
              <a className="links-git" href="https://grupos-pearl.vercel.app/" target="_blank"><button class="btn outline">VISUALIZAR</button></a>
                
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10">
            <div class="container-card">
              <div class="wrapper-card">
                <div class="banner-image4"> </div>
                <h2> Formulario de Registro</h2>
                <p>
                  Formulario de validaciones, creado con HTML, CSS y JavaScript con el fin de generar las validaciones y restricciones posibles para que sean implementadas y conectadas a una base de datos.</p>
              </div>
              <div class="button-wrapper">
              <a className="links-git" href="https://validacion-de-formularios-zeta.vercel.app/" target="_blank"><button class="btn outline">VISUALIZAR</button></a>
                
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev" >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Works;