import React, { useEffect } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";    
import HeaderComponent from "../components/Header/HeaderComponent";
import Home from "./Home"; 
import Shop from "./Shop";
import Card from "./Card"; 
import QuanLy from "./QuanLy"; 
import SortFilter from "../components/SortFilter";
import Pagination from "../components/pagination";
import * as sanphamServices from '../../js/apiServices/sanphamServices';
import * as quanlyServices from '../apiServices/quanlyServices';
import { getTacGiaName,getTheLoaiName,getNuocSXName, getQuyenName, getDonDatHang, getMetaDonDatHang, getUserDDH, getUerDDHLink } from "../Actions/sanphamActions";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../components/Login/LoginComponent";
import RegisterComponent from "../components/Register/RegisterComponent";
import Cart from "./Cart";
import PaymentCart from "../components/CartComponents/PaymentCart";
import DefaultLayout from "../components/CartComponents/DefaultLayout";
import DetailKhachHang from "../components/DetailKhachHang"; 
import Doimatkhau from "../components/CartComponents/Doimatkhau";
import DetailUserKhachHang from "../components/DetailUserKhachHang";

export default function App(){
   
  const dispatch = useDispatch();    
  const filters = useSelector((state) => state.sanpham.listUserDDH);    
  const linkDDH=filters.link;
  const UserIDDDH=filters.user_id;
  useEffect(() => {     
      const getUSERDDH = async () => { 
      const result = await quanlyServices.get(linkDDH,UserIDDDH);
      dispatch(getUserDDH(result.dondathang.data));  
    }
    getUSERDDH();  
}, [linkDDH]);
  useEffect(() => {    
    const getLoaiSanPham = async () => {
      const result = await sanphamServices.getAllName("names/loaisanpham");
      dispatch(getTheLoaiName(result.loaisanpham));
  };
  const getTacGia = async () => { 
      const result = await sanphamServices.getAllName("names/tacgia");
      dispatch(getTacGiaName(result.tacgia.data));  
      
  };
  const getNuocSX = async () => { 
      const result = await sanphamServices.getAllName("names/nuocsx");
      dispatch(getNuocSXName(result.nuocsx.data));  
  };
  const getQ = async () => { 
      const result = await sanphamServices.getAllName("names/quyen"); 
      dispatch(getQuyenName(result.quyen)); 
      
  };
  getLoaiSanPham();
  getTacGia();
  getNuocSX();
  getQ();
}, []);
    return(
      
    <BrowserRouter>
      <React.Fragment>  
      <div className="App" > 
        <Routes>  
        <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>} />      
        <Route path="/shop" element={<DefaultLayout><Shop/></DefaultLayout>} />   
        <Route path="/login" element={<DefaultLayout><LoginComponent/></DefaultLayout>} />  
        <Route path="/register" element={<DefaultLayout><RegisterComponent/></DefaultLayout>} /> 
        <Route path="/shop/product/:masp" element={<DefaultLayout><Card /></DefaultLayout>} />   
        <Route path="/paymentCart" element={<DefaultLayout><PaymentCart /></DefaultLayout>} />   
        <Route path="/cart" element={<DefaultLayout><Cart /></DefaultLayout>} /> 
        <Route path="/detailkhachhang" element={<DefaultLayout><DetailUserKhachHang /></DefaultLayout>} /> 
        <Route path="/doimatkhau" element={<DefaultLayout><Doimatkhau/></DefaultLayout>} /> 
        <Route path="/QuanLy" element={<QuanLy/>} />   
        </Routes>  
      </div> 
    </React.Fragment>
    </BrowserRouter>
    )
};
