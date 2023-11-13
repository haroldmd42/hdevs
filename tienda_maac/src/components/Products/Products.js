import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="productos">
        <h3 className="title">Nuevos diseños</h3>
        <hr />
        <div className="card-deck">
          <div className="card top-0">
            <img
              src="img/Camiseta-Blanca-1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Camiseta Blanca</h5>
              <p className="card-text">Por solo 45.000 cop</p>
              <p>
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="img/Camiseta-Blanca-1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Camiseta Blanca</h5>
              <p className="card-text">Por solo 45.000 cop</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="img/Camiseta-Blanca-1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 className="card-title">Camiseta Blanca</h5>
              <p className="card-text">Por solo 45.000 cop</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="img/Camiseta-Blanca-1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 className="card-title">Camiseta Blanca</h5>
              <p className="card-text">Por solo 45.000 cop</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="img/Camiseta-Blanca-1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 className="card-title">Camiseta Blanca</h5>
              <p className="card-text">Por solo 45.000 cop</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          
        </div>
        <a href="#">
        <div className="card-video">
          <img className="videos" src="video/banner2.gif"/>
        </div> </a>
      </div>
    </>
  );
};

export default Products;
