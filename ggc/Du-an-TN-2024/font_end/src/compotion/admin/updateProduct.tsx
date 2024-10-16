// import React, { useEffect, useState } from "react";
// import FooterAdmin from "./footerAdmin";
// import LefpBar from "./lefpBar";
// import NavHeader from "./navHeader";
// import { ProductLite } from "../../interface/product";
// import { getIdProduct, putProduct } from "../../sevies/product";
// import { useParams } from "react-router-dom";
// import { validatePro } from "../../validate/product";
// import { ToastContainer, toast } from "react-toastify";

// const UpdateProduct = () => {
//   const [name, setName] = useState<string>('');
//   const [image, setImage] = useState<string>('');
//   const [price, setPrice] = useState<number>(0);
//   const [desc, setDesc] = useState<string>('');
//   const [message, setMessage] = useState<string>('');
//   const { id }: any = useParams();

//   useEffect(() => {
//     (async () => {
//       try {
//         const getIdPro: ProductLite = await getIdProduct(id);
//         setName(getIdPro.name);
//         setPrice(getIdPro.price);
//         setImage(getIdPro.image);
//         setDesc(getIdPro.desc);
//         console.log(getIdPro);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files && e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         // reader.result contains the base64 representation of the image
//         const base64String = reader.result as string;
//         setImage(base64String);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSummit = async (e: any) => {
//     e.preventDefault();
//     const { error } = validatePro.validate({ name, image, price });
//     if (error) {
//       setMessage(error.message);
//     } else {
//       try {
//         const putPro = await putProduct(id, { name, image, price, desc } as ProductLite);
//         toast.success(`Cập nhật thành công sản phẩm`);
//         setTimeout(() =>{
//           window.location.href = `/admin/list`;
//         },2000)
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <div>
//       <div id="wrapper">
//         <LefpBar />
//         <div id="content-wrapper" className="d-flex flex-column">
//           <div id="content">
//             <NavHeader />
//             <div className="container-fluid ">
//               <h1 className="my-3">Trang cập nhật sản phẩm</h1>
//               <a href="/admin/list" className="btn btn-primary my-3">Quay lại danh sách sản phẩm</a>
//               <form onSubmit={handleSummit}>
//                 <div className="mb-3">
//                   <label className="form-label">Tên sản phẩm</label>
//                   <input type="text" onChange={(e: any) => { setName(e.target.value) }} className="form-control w-100 " id="exampleFormControlInput1" placeholder="Tên sản phẩm" value={name} />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Giá sản phẩm</label>
//                   <input type="number" onChange={(e: any) => { setPrice(e.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Giá sản phẩm" value={price} />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Ảnh sản phẩm</label>
//                   <input type="file" onChange={handleFileChange} className="form-control" id="exampleFormControlInput1" />
//                   <img src={image} alt="" width={50} height={40} />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Mô tả</label>
//                   <textarea className="form-control" onChange={(e: any) => { setDesc(e.target.value) }} value={desc} id="exampleFormControlTextarea1" rows={3}></textarea>
//                 </div>
//                 <button className="btn btn-warning" type="submit">Cập nhật sản phẩm</button>
//               </form>
//             </div>
//           </div>
//           <FooterAdmin />
//         </div>
//       </div>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default UpdateProduct;
