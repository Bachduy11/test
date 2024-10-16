import { useState } from 'react';
import '/src/assets/css/style.css'
import { FaRegUser } from 'react-icons/fa';


const Header = () => {
  // State để quản lý hiển thị của submenu
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Hàm để bật/tắt submenu
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <>
      <header>
        <div className="container-fluid p-3 text-bg-dark">
          <div className="row text-center ">
            <div className="col-10"> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <a className="text-light fw-bold m-3 " href="#">  shop now</a></div>
            <div className="col-2 nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Việt Nam</a></li>
                <li><a className="dropdown-item" href="#">Trung Quốc</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-3 ">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand fw-bold fs-2 logo " href="/">GoalMaster</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse logo " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item px-5 ">
                  <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item px-5">
                  <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" aria-current="page" href="/product">Contact</a>
                </li>
                <li className="nav-item px-5">
                  <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" aria-current="page" href="/not">About</a>
                </li>
                <li className="nav-item px-5">
                  <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" aria-current="page" href="/login">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="search-container">
              <input type="text" id="searchInput" placeholder="Search..." />
              <button type="button" id="searchButton"><i className="bi bi-search"></i> </button>
            </div>
            <div className="heart px-4">
              <i className="bi bi-heart heart1"></i>
            </div>
            <div className="header-icons">
              <div className={`menu ${isSubmenuOpen ? 'open' : ''}`} onClick={toggleSubmenu}>
                <button className="menu-button"><FaRegUser /></button>
                {isSubmenuOpen && (
                  <div className="user-menu">
                    <div className="user-info">
                      <div className="user-details">
                        <span className="user-name">Admin 1</span>
                      </div>
                    </div>
                    <div className="menu-options">
                      <div className="menu-item">
                        <span role="img" aria-label="ticket">🛍️</span> Gio hang
                      </div>
                      <div className="menu-item">
                        <span role="img" aria-label="offer">🎫</span> Ưu đãi
                      </div>
                      <div className="menu-item">
                        <span role="img" aria-label="settings">⚙️</span> Cài đặt
                      </div>
                    </div>
                    <div className="logout">
                      Đăng xuất
                    </div>
                  </div>
                )}
              </div>
            </div>

          </nav>


        </div>
      </header>
    </>
  )
}

export default Header