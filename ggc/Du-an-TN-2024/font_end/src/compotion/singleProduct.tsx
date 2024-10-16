import '/src/assets/css/swiper.min.css'
import '/src/assets/js/modernizr.js'
import '/src/assets/js/jquery-main.js'
import '/src/assets/js/jquery-migrate.js'
import '/src/assets/js/popper.min.js'
import '/src/assets/js/jquery-ui.min.js'
import '/src/assets/js/swiper.min.js'
import '/src/assets/js/fancybox.min.js'
import '/src/assets/js/waypoint.js'
import '/src/assets/js/parallax.min.js'
import '/src/assets/css/pe-icon-7-stroke.css'
import '/src/assets/css/aos.min.css'
import '/src/assets/js/custom.js'
import Header from './header'
import Footer from './footer'
import '/src/assets/css/style.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {

  return (
    <>

      <main>
        <section className="product-area product-single-area my-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-single-item">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="product-single-thumb">
                        <div className="swiper-container single-product-thumb single-product-thumb-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a className="lightbox-image" data-fancybox="gallery" href="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg">
                                <img src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg" width="570" height="541" alt="Image-HasTech" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="product-single-info">
                        <h3 className="main-title">Ao Man u</h3>
                        <div className="prices">
                          <span className="price" color='#red'>$111111</span>
                        </div>
                        <div className="rating-box-wrap">
                          <div className="rating-box m-0 d-block">
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                          </div>
                          <div className="review-status m-0 d-block">
                            <a href="javascript:void(0)">(5 Customer Review)</a>
                          </div>
                        </div>
                        <p></p>
                        <div className="group-product-list">
                          <span className="info-text">Buy this bundle and get off to <span className="text-danger">25%</span> of all prices.</span>
                          <table className="m-0 d-block">
                            <tbody>
                              <tr>
                                <td className="choose"><input type="checkbox" checked={true} disabled={true} /></td>
                                <td className="quantity"></td>
                                <td className="thumb"><img src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg" width="40" height="35" alt="Image" /></td>
                                <td className="title"> <a className="btn" href="single-product.html">Trọn bộ</a></td>
                                <td className="price"><span className="pro-price fw-medium"><span>$96</span></span></td>
                              </tr>
                              <tr>
                                <td className="choose"><input type="checkbox" /> </td>
                                <td className="quantity">1</td>
                                <td className="thumb"><img src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg" width="40" height="35" alt="Image" /></td>
                                <td className="title"><a className="btn" href="single-product.html">Trọn bộ 3 cái</a></td>
                                <td className="price"><span className="pro-price"><span className="old fw-medium  ">$120</span> <span className="">-</span><span className="new fw-medium text-danger ">$96</span></span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="product-quick-action my-3">
                          <div className="qty-wrap m-0 d-block">
                            <div className="pro-qty">
                              <input type="text" title="Quantity" value="1" />
                            </div>
                          </div>
                          <a className="btn btn-danger m-0 d-block mx-5 px-4 py-3" href="/pay">Add to Cart</a>
                        </div>
                        <div className="product-wishlist-compare">
                          <a href="shop-wishlist.html"><i className="bi bi-heart"></i>Đánh giá</a>
                          <a href="shop-compare.html"><i className="bi bi-chat-left"></i>Bình luận</a>
                        </div>
                        <div className="product-info-footer">
                          <h6 className="code"><span>Code :</span>Ch-256xl</h6>
                          <div className="social-icons">
                            <span>Share</span>
                            <a href="#/"><i className="bi bi-facebook"></i></a>
                            <a href="#/"><i className="bi bi-dribbble"></i></a>
                            <a href="#/"><i className="bi bi-pinterest"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main>
          <div className="container mb-5 ">
            <hr className="mb-5" />
            <div className="tile">
              <button className="btn btn-danger"></button> <a className="btn text-danger fw-medium" href="" >Related Item</a>
              <div className="row">
                {/* <div className="col-10">
                  <h3 className="mt-3 ">Best Selling Products</h3>
                </div> */}
                {/* <div className="col-2 mb-4 "><a className="btn btn-danger py-3 px-5  " href="">View All</a></div> */}
              </div>
            </div>
            <div className="row">

              <div className="col-sm-6 col-lg-3">
                <div className="card px-5 py-3 bg-dark-subtle" style={{ width: '18rem', height: '14rem' }}>
                  <div className="position-absolute top-0 end-0 ">
                    <div className="icon px-3">
                      <div className="icon-heart rounded-circle bg-white my-3"><a href=""><i className="btn bi bi-heart fs-6 "></i></a></div>
                      <div className="icon-heart rounded-circle bg-white"><a href=""><i className="btn bi bi-eye fs-6 "></i></a></div>
                    </div>
                  </div>
                  <a href={``}>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top" style={{ width: '8rem' }} alt="Product" />
                  </a>
                </div>
                <div className="card-body mt-3">
                  <h5 className="card-title">aaaaaaaaaaaaaaaaaa</h5>
                  <div className="prices my-3">
                    <span className="price-old text-danger fw-medium">$1111111</span>
                    <span className="sep">-</span>
                    <span className="price text-decoration-line-through fw-medium">$1111111111111</span>
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
      </main>
    </>
  )
}

export default SingleProduct