import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumb from "./Breadcrumb";
import { UserRegister } from "../interface/user";
import { userRegister } from "../sevies/user";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const duongDan = [
    { nhan: 'Trang Chủ', duongDan: '/' },
    { nhan: 'Đăng Ký', duongDan: '/register' },
  ];
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await userRegister({
      fullname: fullName,
      email: email,
      password: password,
    } as UserRegister);
    // alert("Bạn đã đăng kí thành công");
    console.log(user);
    if (!user.status) {
        setMessage(user.message);
        toast.warning(message)
    }
    else{
        toast.success('Bạn đã đăng kí thành công')
        setTimeout(()=>{
            window.location.href= "/login";
        },3000)
    }
  };
  return (
    <>
      <Breadcrumb items={duongDan} />
      <div className="container my-5">
        <div className="row">
          <div className="col-8">
            <img src="https://pubcdn.ivymoda.com/files/news/2023/05/16/4c9b7ece1675eff8c459dd08d06baae4.jpg" alt="" width={"100%"} />
          </div>
          <div className="col-4 d-flex align-items-center my-4">
            <div className="login">
              <div className="tile">
                <h2 className="my-4">Đăng Ký vào Exclusive</h2>
                <span>Enter your details below</span>
              </div>
              <form className="form" onSubmit={handleRegister}>
                <div className="email my-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    name=""
                    placeholder="full name"
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="email my-3">
                <input
                    type="email"
                    className="form-control border-0 border-bottom"
                    name=""
                    
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="email my-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    name=""

                    placeholder="Phone Number"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="pass my-2">
                                    <input type={showPassword ? "text" : "password"} className="form-control border-0 border-bottom" name=""  onChange={(e) => setPassword(e.target.value)} id="password"  placeholder="Password" style={{ width: '350px' }} />
                                    <div className="login-form__checkbox-container">
                            <input
                                type="checkbox"
                                id="show-password"
                               
                                onChange={togglePasswordVisibility}
                                className="login-form__checkbox"
                            />
                            <label
                                htmlFor="show-password"
                                className="login-form__label"
                            >
                                Hiện mật khẩu
                            </label>
                            {/* <p>Quên mật khẩu</p> */}
                        </div>
                                </div>
                <div className="row my-3">
                  <div className="col-6">
                    <button type="submit" className="btn btn-danger">
                      Register
                    </button>
                  </div>
                  <div className="col-6">
                    <a className="btn text-danger " href="/login">
                      Login
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
