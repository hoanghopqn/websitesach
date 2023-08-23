import React, { useState } from 'react'; 
import './style.scss' 
import * as quanlyServices from '../../apiServices/quanlyServices';
import { Link } from 'react-router-dom';

function DetailKhachHang() {
    const user = JSON.parse(localStorage.getItem("user"));  
    const [DetailKH,setDetailKH]=useState({
      hoten:user.hoten,
      taikhoan:user.taikhoan,
      diachi:user.diachi,
      email:user.email,
      sdt: user.sdt,
      ngaysinh:user.ngaysinh,
    }); 
    const handlSubmit=async()=>{   
        const editedContact = {
          id: user.id,
          hoten: DetailKH.hoten,
          diachi: DetailKH.diachi,
          sdt: DetailKH.sdt,
          taikhoan: user.taikhoan,
          email: DetailKH.email,
          ngaysinh: DetailKH.ngaysinh,
          thangthai: 1
        };
        await quanlyServices.update(`khachhang/${user.id}`, editedContact);
        localStorage.setItem("user", JSON.stringify(editedContact));   
    }
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...DetailKH };
      newFormData[fieldName] = fieldValue;

      setDetailKH(newFormData);
    };
    return (
        <> {user?
        <form onSubmit={handlSubmit}>
            <div className='detail-layout'>
                <label>Tên Đăng Nhập: </label>
                <label>{user.taikhoan}</label>
            </div>
            <div className='detail-layout'>
                <label>Tên: </label>
                <input type='text' name='hoten' value={DetailKH.hoten} onChange={handleEditFormChange}/>
            </div>
            <div className='detail-layout'>
                <label>Địa Chỉ: </label>
                <input type='text' name='diachi' value={DetailKH.diachi} onChange={handleEditFormChange}/> 
            </div>
            <div className='detail-layout'>
                <label>Số Điện Thoại: </label>
                <input type='text' name='sdt' value={DetailKH.sdt} onChange={handleEditFormChange}/>
            </div>
            <div className='detail-layout'>
                <label>Email: </label>
                <input type='text' name='email' value={DetailKH.email} onChange={handleEditFormChange}/>
            </div>
            <div className='detail-layout'>
                <label>Ngày Sinh: </label>
                <input type='date' name='ngaysinh' value={DetailKH.ngaysinh} onChange={handleEditFormChange}/>
            </div>
            <button className='detail-button'>Lưu</button>
        </form>:<></>}
        </>
    );
}

export default DetailKhachHang;