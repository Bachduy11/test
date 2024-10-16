
import '/src/assets/css/style.css'

const TwoListProduct = () => {
  
  return (
    <>
      <main>
      <div className="container">
        <div className="tile">
          <button className="btn btn-danger"></button> <a className="btn text-danger fw-medium" href="">Our Products</a>
          <h3 className="mt-3 ">Explore Our Products</h3>
          </div>
          <div className="row">
          
                <div className="col-sm-6 col-lg-3">
                  <div className="card px-5 py-3 bg-dark-subtle" style={{ width: '17rem', height: '14rem' }}>
                    <div className="position-absolute top-0 end-0 ">
                      <div className="icon px-3">
                        <div className="icon-heart rounded-circle bg-white my-3"><a href=""><i className="btn bi bi-suit-heart-fill  "></i></a></div>
                        <div className="icon-heart rounded-circle bg-white"><a href=""><i className="btn bi bi-eye-fill fs-6 "></i></a></div>
                      </div>
                    </div>
                    <a href={``}>
                      <img src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg" className="card-img-top" style={{ width: '11.5rem' }} alt="Product" />
                    </a>
                  </div>
                  <div className="card-body mt-3">
                    <h5 className="card-title">aaaaaaaaaaaaa</h5>
                    <div className="prices my-3">
                      <span className="price-old text-danger fw-medium">$888888</span>
                      <span className="sep">-</span>
                      <span className="price text-decoration-line-through fw-medium">$11111</span>
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
          <div className="viewall text-center mt-3">
            <a className="btn btn-danger py-3 px-5 my-5" href="">View All Products</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default TwoListProduct