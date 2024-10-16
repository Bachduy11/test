import { useState } from "react";
import '/src/assets/css/style.css'
import '../assets/css/login.css'
import { toast, ToastContainer } from "react-toastify";
import Breadcrumb from "./Breadcrumb";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { UserLogin } from "../interface/user";
import { userLogin } from "../sevies/user";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Đăng Nhập', duongDan: 'login' },
    ];
    const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await userLogin({
      email: email,
      password: password,
    } as UserLogin);
    if (!user.status) {
        toast.warning(user.message)
    }
    else{
      localStorage.setItem('user', JSON.stringify({
        user: user.userdata,
        token: user.token
      }))
        toast.success('Bạn đã đăng nhập thành công vui lòng đơi 3s để chuyển trang')
        setTimeout(()=>{
            window.location.href= "/admin";
        },3000)
        console.log(user);
    }
  };
    return (
        <> <Breadcrumb items={duongDan} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-8" >
                        <img src="https://pubcdn.ivymoda.com/files/news/2023/05/16/4c9b7ece1675eff8c459dd08d06baae4.jpg" alt="" width={'100%'} />
                    </div>
                    <div className="col-4 d-flex align-items-center my-4">
                        <div className="login">
                            <div className="tile">
                                <h2 className="my-4">Đăng nhập vào Exclusive</h2>
                                <span>Enter your details below</span>
                            </div>
                            <form className="form"  onSubmit={handleLogin} >
                                <div className="email my-3 ">
                                    <input type="email" className="form-control border-0 border-bottom " name="" onChange={(e) => setEmail(e.target.value)} placeholder="Email or Phone Number" style={{ width: '350px' }} />

                                </div>
                                <div className="pass my-2">
                                    <input type={showPassword ? "text" : "password"} className="form-control border-0 border-bottom" name=""  onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" style={{ width: '350px' }} />
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
                                        <p>Quên mật khẩu</p>
                                    </div>
                                </div>
                                <div className="row my-3 ">
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-danger">Login</button>

                                    </div>
                                    <div className="col-6"><a className="btn text-danger " href="/register">Đăng kí tài khoản</a></div>
                                </div>
                                <div className="social-register">
                                    <p className="social-register__text">Hoặc</p>
                                    <div className="social-register__buttons">
                                        <button className="social-register__btn facebook-btn">
                                            <FaFacebookF />  Facebook
                                        </button>
                                        <button className="social-register__btn google-btn">
                                            <FaGoogle />  Google
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login