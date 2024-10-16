import FooterAdmin from './footerAdmin'
import NavHeader from './navHeader'
import LefpBar from './lefpBar'



const Listproduct = () => {
    
  return (
    <div>
        <div id="wrapper">
        <LefpBar/>
<div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <NavHeader/>
        <div className="container-fluid ">
            <h1 className='my-3'>Danh sách sản phẩm</h1>
            <a href="/admin/add" className='btn btn-success my-3'>Thêm sản phẩm mới   <i className="bi bi-plus-circle-fill"></i></a>
        <table className="table table-striped table-bordered text-center ">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">giá sản phẩm</th>
            <th scope="col">ảnh sản phẩm</th>
            <th scope="col">mô tả sản phẩm </th>
            <th scope="col">hành động</th>
            </tr>
        </thead>
        <tbody>
      
        </tbody>
        </table>    
        </div>
    </div>
    <FooterAdmin/>
</div>


</div>
</div>
  )
}

export default Listproduct
