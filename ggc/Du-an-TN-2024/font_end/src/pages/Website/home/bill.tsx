import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faPhone,
    faEnvelope,
    faCar,
    faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/Website/bill.css";

const Bill = () => {
    const nav = useNavigate();
    Swal.fire({
        title: "Mua hang thành công",
        text: "Bạn có muốn về trang chủ?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Xem hóa đơn",
        confirmButtonText: "Về Trang Chủ",
    }).then((result) => {
        if (result.isConfirmed) {
            nav("/");
        }
    });

    return (
        <>
            <div className="invoice-container">
                <div className="schedule-header">
                    {/* <div className="header-item step2">Chọn chỗ</div>
                    <div className="header-item step2">Thanh Toán</div>
                    <div className="header-item">Hoàn Thành</div> */}
                </div>
                <div className="invoice-container-item">
                    <div className="header_bill">
                        <h2>
                            <FontAwesomeIcon icon={faFileInvoice} style={{color:'#405187'}} /> Hóa đơn
                        </h2>
                        {/* <p className="ticket-code">Mã van chuyen: 012913914</p> */}
                    </div>

                    <hr className="section-divider" />

                    <table className="info-table">
                    <tbody>
                            <tr>
                                <td className="left-section-bill">
                                    <strong>Thông tin hành khách</strong>
                                    <p>
                                        <FontAwesomeIcon icon={faUser} /> Họ và
                                        tên: Phạm Vang
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhone} /> Số
                                        điện thoại: 0332702119
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                                        Email: vang@gmail.com
                                    </p>
                                </td>
                                <td className="right-section-bill vehicle-info">
                                    <div className="vehicle-info-content">
                                        <div>
                                            <strong>Thông tin người liên hệ</strong>
                                            <p>
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                />{" "}
                                                Tên tài xế: Phạm V
                                            </p>
                                            <p>
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                />{" "}
                                                Số điện thoại:0332702119
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCar} />{" "}
                                                Email: vang@gmail.com
                                            </p>
                                        </div>

                                        <div className="driver-image">
                                            <div className="driver-image">
                                                {" "}
                                                <img
                                                    src="https://makan.vn/wp-content/uploads/2022/11/logo-da-banh-vector-1.jpg"
                                                    alt="Driver"
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <hr className="section-divider" />
                                </td>
                            </tr>

                            <tr>
                                <td className="left-section-bill">
                                    <strong>Thông tin chính</strong>
                                    <p>Địa chỉ: Mỹ Đình</p>
                                    <p>Ảnh:  {" "}
                                                <img
                                                    src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg" width={100}
                                                    alt=""
                                                />{" "}</p>
                                    <p>Tên sản phẩm: Áo  MU</p>
                                    <p>Giá: 100.000</p>
                                    <p>Màu: Đỏ</p>
                                    <p>Sile: XL</p>
                                </td>
                                <td className="right-section-bill">
                                    <strong>Thông tin thêm</strong>
                                    <p>Mã khuyến mãi: Mu</p>
                                    <p>Ghi chú: Áo Đẹp</p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <hr className="section-divider" />
                                </td>
                            </tr>

                            <tr>
                                <td className="pricing-left">
                                    <p>Giá:</p>
                                    <p>Mã giảm giá:</p>
                                    <p>
                                        <strong>Tổng tiền:</strong>
                                    </p>
                                    <p>Tình trạng:</p>
                                </td>
                                <td className="pricing-right">
                                    <p>300,000đ</p>
                                    <p>80,000đ</p>
                                    <p>
                                        <strong>220,000đ</strong>
                                    </p>
                                    <p className="status-pay">Đã thanh toán</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Bill;
