import "./Projects.css";


const Projects = () => {
  return (
    <section>
      <div id="carouselExampleDark" className="carousel carousel-light slide">
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
      </div>
    </section>
  );
};

export default Projects;
