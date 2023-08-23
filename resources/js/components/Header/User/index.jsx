import React from "react"; 
import './style.scss'
import {AiOutlineUser} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function User({handleClick,handleBlur,Hide}) {
     
    let navigate = useNavigate();
    const handleToLogin = () => {
        let path = `/login`; 
        navigate(path);
    }
    const handleToDetailKH = () => {
        let path = `/detailkhachhang`; 
        navigate(path);
    }
    const handleToDMk = () => {
        let path = `/doimatkhau`; 
        navigate(path);
    }
    const handleToRegister = () => {
        let path = `/register`; 
        navigate(path);
    } 
    const handleToLoout = () => {
        localStorage.removeItem("user"); 
        localStorage.removeItem("userDDH"); 
        let path = `/login`; 
        navigate(path);
    } 
    const user = JSON.parse(localStorage.getItem("user"));  
    return (<>
        { user?
        <li name='user' onMouseMove={()=>handleClick('user')} onMouseOut={()=>handleBlur('user')} > 
                <div className='icon-action'><AiOutlineUser /> </div>
                <div className='text-action'><a href=''>{user.taikhoan}</a></div>
                <div className='page-user' style={Hide.user?{display:'none'}:{display:'block'}}>
                  <div className='user-menu'>  <button className='user-button user-login' onClick={handleToDetailKH}>Thông tin Cá Nhân</button></div>
                  <div className='user-menu'>  <button className='user-button user-login' onClick={handleToDMk}>Đổi mật khẩu</button></div>
                  <div className='user-menu'>  <button className='user-button user-register' onClick={handleToLoout}>Đăng Xuất</button></div>
                   </div> 
                  </li>
                  :
        <li name='user' onMouseMove={()=>handleClick('user')} onMouseOut={()=>handleBlur('user')} > 
                <div  onClick={handleToLogin} className='icon-action'><AiOutlineUser /> </div>
                <div  onClick={handleToLogin}  className='text-action'><a href=''>{Hide.Country==='VN'?'Login':'Account'}</a></div>
                <div className='page-user' style={Hide.user?{display:'none'}:{display:'block'}}>
                  <div className='user-menu'>  <button className='user-button user-login' onClick={handleToLogin}>Login</button></div>
                  <div className='user-menu'>  <button className='user-button user-register' onClick={handleToRegister}>Register</button></div>
                   </div> 
                  </li> }
                  </>
    );
}

export default User;
