import React, { useState } from 'react'; 
import * as quanlyServices from '../../../apiServices/quanlyServices';
import './style.scss' 
import { Link } from 'react-router-dom';

function DetailNhanVien() {
    const [test,settest]=useState('hoang hop');
    const nhanvien = JSON.parse(localStorage.getItem("nhanvien"));    
    const [DetailNV,setDetailNV]=useState({
        hoten:nhanvien.user.hoten,
        taikhoan:nhanvien.user.taikhoan,
        diachi:nhanvien.user.diachi,
        email:nhanvien.user.email,
        sdt: nhanvien.user.sdt,
        ngaysinh:nhanvien.user.ngaysinh,
        ngayvaolam:nhanvien.user.ngayvaolam,
        hinhanh: nhanvien.user.hinhanh? nhanvien.user.hinhanh : "user",
      }); 
      const handlSubmit=async()=>{    
          const editedContact = {
            id: nhanvien.user.id,
            hoten: DetailNV.hoten,
            sdt: DetailNV.sdt,
            diachi: DetailNV.diachi,
            ngaysinh: DetailNV.ngaysinh,
            ngayvaolam: DetailNV.ngayvaolam,
            email: DetailNV.email,
            taikhoan: nhanvien.taikhoan,
            hinhanh:  DetailNV.hinhanh ,
            thangthai: 1
          }; 
          await quanlyServices.update(`nhanvien/${nhanvien.user.id}`, editedContact);
          localStorage.setItem("nhanvien", JSON.stringify({...nhanvien,user:{...editedContact}}));   
      }
      
    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...DetailNV };
        newFormData[fieldName] = fieldValue;
  
        setDetailNV(newFormData);
      };
    return (
        <> {nhanvien?<>
        <form className='form-user' onSubmit={handlSubmit}>
            <div className="user">  
        <img className="user-image" alt="" src={`/images/${DetailNV.hinhanh}.jpg`}/> 
       </div>
       <div className="user-title">
            <div className='detail-layout'>
                <label>Tên Đăng Nhập: </label>
                <label>{nhanvien.taikhoan}</label>
            </div>
            <div className='detail-layout'>
                <label>Tên: </label>
                <input type='text' name='hoten' value={DetailNV.hoten} onChange={handleEditFormChange} />
            </div>
            <div className='detail-layout'>
                <label>Địa Chỉ: </label>
                <input type='text' name='diachi' value={DetailNV.diachi} onChange={handleEditFormChange} />
            </div>
            <div className='detail-layout'>
                <label>Số Điện Thoại: </label>
                <input type='text' name='sdt' value={DetailNV.sdt} onChange={handleEditFormChange} />
            </div>
            <div className='detail-layout'>
                <label>Email: </label>
                <input type='text' name='email' value={DetailNV.email} onChange={handleEditFormChange} />
            </div>
            <div className='detail-layout'>
                <label>Ngày Sinh: </label>
                <input type='date' name='ngaysinh' value={DetailNV.ngaysinh} onChange={handleEditFormChange} />
            </div>
            <div className='detail-layout'>
                <label>Ngày Vào Làm: </label>
                <input type='date' name='ngayvaolam' value={DetailNV.ngayvaolam} onChange={handleEditFormChange} />
            </div>
            <button className='detail-button'>Lưu</button></div>
        </form></>:<></>}
        </>
    );
}

export default DetailNhanVien;