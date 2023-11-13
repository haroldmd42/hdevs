import "./Promotion.css";

const Promotion = () => {
  return (
    <>
      <h3 className="title">¿Qué promociones tenemos para ti el día de hoy?</h3>
      <hr/>
      <div className="card-deck">
        <div className="card top-0" >
          <img src="img/Camiseta-Blanca-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Camiseta Blanca</h5>
            <p className="card-text">
              Ahora 45.000 cop <br/>
             <span className="card-text-before">Antes 50.000 cop</span> </p>
              <p>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="img/Camiseta-Blanca-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">Camiseta Blanca</h5>
            <p className="card-text">
              Ahora 45.000 cop <br/>
             <span className="card-text-before">Antes 50.000 cop</span> </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="img/Camiseta-Blanca-1.jpg" className="card-img-top" alt="..." />
          <div class="card-body">
          <h5 className="card-title">Camiseta Blanca</h5>
            <p className="card-text">
              Ahora 45.000 cop <br/>
             <span className="card-text-before">Antes 50.000 cop</span> </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="img/Camiseta-Blanca-1.jpg" className="card-img-top" alt="..." />
          <div class="card-body">
          <h5 className="card-title">Camiseta Blanca</h5>
            <p className="card-text">
              Ahora 45.000 cop <br/>
             <span className="card-text-before">Antes 50.000 cop</span> </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="img/Camiseta-Blanca-1.jpg" className="card-img-top" alt="..." />
          <div class="card-body">
          <h5 className="card-title">Camiseta Blanca</h5>
            <p className="card-text">
              Ahora 45.000 cop <br/>
             <span className="card-text-before">Antes 50.000 cop</span> </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card-video">
          <img className="videos" src="video/Blue Geometric Technology LinkedIn Banner.gif"/>
        </div>
      <br></br>
    </>
  );
};

export default Promotion;
