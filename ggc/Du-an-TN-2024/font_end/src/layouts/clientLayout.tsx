import { Outlet } from "react-router-dom";
import Footer from "../compotion/footer";
import Header from "../compotion/header";

function ClientLayout() {


  return (
    <>
      <div className="client_layout_container">
      <Header/>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default ClientLayout;
