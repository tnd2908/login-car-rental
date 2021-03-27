// import '../login.css';
// import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { render } from '@testing-library/react';

class login extends React.Component {
    render(){
        return(
            <div className="wrapper">
          <div className="title-text">
            <div className="title login">Đăng Nhập</div>
            <div className="title signup">Đăng Ký</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" defaultChecked />
              <input type="radio" name="slide" id="signup" />
              <label htmlFor="login" className="slide login">Đăng Nhập</label>
              <label htmlFor="signup" className="slide signup">Đăng Ký</label>
              <div className="slider-tab" />
            </div>
            <div className="form-inner">
              <form action="#" className="login">
                <div className="field">
                  <input type="text" placeholder="Nhập Email" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Nhập Mật Khẩu" required />
                </div>
                <div className="pass-link">
                  <a href="#">Quên Mật Khẩu?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" defaultValue="Đăng Nhập" />
                </div>
                <div className="signup-link">Vẫn Chưa Phải Thành Viên? <a href>Đăng Ký Ngay!</a>
                </div>
              </form>
              <form action="#" className="signup">
                <div className="field">
                  <input type="text" placeholder="Nhập Địa Chỉ Email" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Nhập Mật Khẩu" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Xác Nhận Mật Khẩu" required />
                </div>
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" defaultValue="Đăng Ký" />
                </div>
              </form>
            </div>
          </div>
        </div>
        );
    };
};
export default login;