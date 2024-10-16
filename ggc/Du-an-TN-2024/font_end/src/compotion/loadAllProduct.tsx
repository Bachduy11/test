
import '/src/assets/css/style.css'

const LoadListProduct = () => {
  
  return (
    <>
        <main>
      <div className="container mb-5 ">
        <hr className="mb-5"/>
        <div className="tile">
          <button className="btn btn-danger"></button> <a className="btn text-danger fw-medium" href="">This Month</a>
          <div className="row">
            <div className="col-10">
              <h3 className="mt-3 ">Best Selling Products</h3>
            </div>
            <div className="col-2 mb-4 "><a className="btn btn-danger py-3 px-5  " href="">View All</a></div>
          </div>
        </div>
        <div className="row">
          
                    <div className="col-sm-6 col-lg-3" >
              <div className="card px-5 py-3 bg-dark-subtle" style={{width: '18rem', height: '14rem'}}>
                  <div className="position-absolute top-0 end-0 ">
                      <div className="icon px-3">
                          <div className="icon-heart rounded-circle bg-white my-3"><a href=""><i className="btn bi bi-heart fs-6 "></i></a></div>
                          <div className="icon-heart rounded-circle bg-white"><a href=""><i className="btn bi bi-eye fs-6 "></i></a></div>
                      </div>
                  </div>
                  <a href="/single">
                  <img src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg" className="card-img-top" style={{width: '11rem'}} />
                  </a>
                </div>
                <div className="card-body mt-3">
                  <h5 className="card-title"></h5>
                  <div className="prices my-3">
                      <span className="price-old text-danger fw-medium">$</span>
                      <span className="sep">-</span>
                      <span className="price text-decoration-line-through fw-medium">$360</span>
                    </div>
                </div>
                <div className="start">
                  <span><i className="bi bi-star-fill text-warning"></i></span>
                  <span><i className="bi bi-star-fill text-warning"></i></span>
                  <span><i className="bi bi-star-fill text-warning"></i></span>
                  <span><i className="bi bi-star-fill text-warning"></i></span>
                  <span><i className="bi bi-star-fill text-warning"></i></span>
                  <samp>(65)</samp>
                </div>
          </div>

         
      </div>
      </div>
    </main>
    </>
  )
}

export default LoadListProduct