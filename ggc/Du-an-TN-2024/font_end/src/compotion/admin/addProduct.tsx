import React, { useState } from "react";
import FooterAdmin from "./footerAdmin";
import LefpBar from "./lefpBar";
import NavHeader from "./navHeader";
// import { validatePro } from "../../validate/product";
// import { postProduct } from "../../sevies/product";
// import { ProductLite } from "../../interface/product";
import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {

  return (
    <div>
        <div id="wrapper">
        <LefpBar/>
<div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <NavHeader/>
      <div className="container-fluid ">
        <h1 className="my-3">Trang thêm mới sản phẩm</h1>
        <a href="/admin/list" className="btn btn-primary my-3">Quay lại danh sách sản phẩm</a>
          <form >
          <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input type="text"className="form-control w-100 " id="exampleFormControlInput1" placeholder="Tên sản phẩm"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Giá sản phẩm</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Giá sản phẩm"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Ảnh sản phẩm</label>
            <input type="file"  className="form-control" id="exampleFormControlInput1"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Mô tả</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
          </div>
          <button className="btn btn-success" type="submit">Thêm sản phẩm</button>
          </form>
      </div>
    </div>
    <FooterAdmin/>
</div>
</div>
<ToastContainer/>
</div>
  )
}

export default AddProduct;
