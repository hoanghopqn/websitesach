import React, { useState } from "react"; 
import "./style.scss";  
import { Button, ButtonGroup } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import * as quanlyServices from '../../../apiServices/quanlyServices';

function PayPalCheckout() { 
 
  const user = JSON.parse(localStorage.getItem("user")); 
    const tong = JSON.parse(localStorage.getItem("tongtien")); 
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [radio,setRadio]=useState('momo');  
    let navigate = useNavigate();
    const handleToPayment = () => {
        let path = `/paymentCart`; 
        navigate(path);
    }  
    const [editFormData, setEditFormData] = useState({  
      sdt: user?user.sdt:'',
      diachi:user? user.diachi:'', 
      ghichu: '', 
    });
    const handleToLogin = async () => { 
      if(!user)
      {
        if (confirm("Vui Long Dang Nhap Tai Khoan!") == true) {
        
          let path = `/login`; 
          navigate(path);
          localStorage.setItem("where", JSON.stringify('cart'));   
      } 
      }else{
        if (confirm("Bạn có chắc chắn mua hàng!") == true) {
          const carts = JSON.parse(localStorage.getItem("cart")); 
          const tongtien = JSON.parse(localStorage.getItem("tongtien"));   
          const ddh= await quanlyServices.get(`dondathang`); 
          const newDDH ={khachhang_id:user.id,
                    nhanvien_id:1,
                    diachi:editFormData.diachi,
                    sdt:editFormData.sdt,
                    ghichu:editFormData.ghichu,
                    thangthai:1,
                    tongtien:tongtien,
                    thoigiandat:date}
          const ddh_id=ddh.dondathang.data.length+1;
          // await quanlyServices.store('dondathang', newDDH); 
            for (let i = 0; i < carts.length; i++) {  
        if(carts[i].soluong >=  carts[i].soluongton )
        {  
          alert(` ${carts[i].tensp} số lượng không đủ `) ;
        }if( carts[i].soluong<0)
        {  
          alert(` ${carts[i].tensp} có số lượng âm. vui lòng đặt lại `) ;
        }else{ 
              const newCTDDH ={masp:carts[i].masp, 
                         ddh_id :ddh_id,
                         soluong:carts[i].soluong,
                         dongia:carts[i].gia }
            await quanlyServices.store('ctddh', newCTDDH);
          }  }
          
        localStorage.removeItem("cart"); 
        localStorage.removeItem("tongtien"); 
        let path = `/`; 
        navigate(path);
    } 
      }
    } 
    const handleEditFormChange = (e) => {
      e.preventDefault(); 
      const fieldValue = e.target.value;
      const fieldName = e.target.getAttribute("name"); 
      setEditFormData({...editFormData,[fieldName]:fieldValue});
    };   
  return ( 
        <div className="payment"> 
          <div className="payment-user">  
            <div className="user"> 
        <div>
          <label for="diachi">Địa Chỉ: </label>
          <input id="diachi" name="diachi"  type="text"  value={editFormData.diachi} onChange={(e)=>handleEditFormChange(e)} />
        </div>
        <div>
          <label for="sdt">SĐT: </label>
          <input  id="sdt" name="sdt"  type="text" value={editFormData.sdt} onChange={(e)=>handleEditFormChange(e)} />
        </div>
        <div>
          <label for="ghichu">Ghi Chú: </label>
          <textarea id="ghichu" name="ghichu" rows="4" cols="43"  value={editFormData.ghichu} onChange={(e)=>handleEditFormChange(e)} />
        </div>
             </div>
          </div> 
          <div className="payment-online">
            <div className="payment-tatol">
            <h1>Tổng tiền:</h1>
            <h1> {tong}</h1>
            </div>
            <div> 
      <button className="payment-button" 
          onClick={handleToLogin}>Đặt Hàng</button> 
            </div>
          </div>
        </div>
 
  );
}

export default PayPalCheckout;