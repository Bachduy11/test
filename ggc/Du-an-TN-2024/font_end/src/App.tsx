import { useRoutes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './compotion/home';
import 'react-toastify/dist/ReactToastify.css';
import ClientLayout from './layouts/clientLayout';
import Login from './compotion/login';
import Products from './compotion/products';
import Register from './compotion/register';
import Pay from './pages/Website/home/pay';
import Bill from './pages/Website/home/bill';
import DetailBill from './pages/Website/home/detailBill';
import SingleProduct from './compotion/singleProduct';
import adminLayout from './layouts/adminLayout';
import NotFound from './compotion/notFound';
import HomeAdmin from './compotion/admin/homeAdmin';
import AdminLayout from './layouts/adminLayout';
import Listproduct from './compotion/admin/listproduct';
import AddProduct from './compotion/admin/addProduct';


//   return (
//     <>
//     <Routes>
//       {/* <Route path='/' Component={Home} /> */}
//       <Route path='/product' Component={Products} />
//       <Route path='/login' Component={Login} />
//       <Route path='/register' Component={Register} />
//       <Route path='/single/:id' element={<SingleProduct product = {listProduct} setProduct ={setlistProduct}/>}/>
//       {/* <Route path='/s' Component={Load} /> */}
//       {/* <Route path='/admin' Component={HomeAdmin}/>
//       <Route path='/admin/list'  element={<Listproduct product = {listProduct} setProduct ={setlistProduct}/>}/>
//       <Route path='/admin/add' Component={AddProduct}/>
//       <Route path='/admin/update/:id' Component={UpdateProduct}/> */}
//       <Route path='*' element={<NotFound />} /> 
//     </Routes>
//     </>
//   )
// }

// export default App

const routerConfig = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product",
        element: <Products />,
      },
  
      {
        path: "/pay",
        element: <Pay />,
      },
      {
        path: "/bill",
        element: <Bill />,
      },
      {
        path: "/detailbill",
        element: <DetailBill />,
      },
      {
        path: "/single",
        element: <SingleProduct />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
     
    ],
    
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      
        {
          path: "/admin",
          element: <HomeAdmin />,
        },
        {
          path: "/admin/list",
          element: <Listproduct />,
        },
        {
          path: "/admin/add",
          element: <AddProduct />,
        },
      
    ]
  },
]

function App() {
  const routes = useRoutes(routerConfig);
  return (
    <>{routes}</>
  );
}

export default App;
