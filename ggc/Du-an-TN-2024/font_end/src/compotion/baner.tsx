import '/src/assets/css/style.css'

const Banner = () => {
  return (
    <>
     <hr/>
    <main>
      <div className="container pb-4">
        <div className="row">
          <div className="col-3 border-end">
            <div className="grid">
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Câu lạc bộ <i className="bi bi-caret-right-fill "></i></a>
              </div>
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Đội tuyển <i className="bi bi-caret-right-fill "></i></a>
              </div>
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Sản phẩm mới</a>
              </div>
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Giới thiệu</a>
              </div>
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Khuyển mãi</a>
              </div>
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Hướng dẫn mua hàng</a>
              </div>
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Sản phẩm có sẵn </a>
              </div>
              <div className="g-col-12">
                <a className="btn text-dark fw-medium " href="#">Liên hệ</a>
              </div>
            </div>
          </div>
          <div className="col-9 ">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src="https://bulbal.vn/wp-content/uploads/2022/06/header-banner-final.jpg" className="d-block w-100" />
                  
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="src/images/images.jpg" className="d-block w-100" />
                  
                </div>
                <div className="carousel-item">
                  <img src="src/images/Frame 560.png" className="d-block w-100" />
                  
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Banner