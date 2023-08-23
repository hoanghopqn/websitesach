import React, { useEffect, useState } from "react"; 
import "./style.scss"; 
import CardDetail from "./CardDetail"; 
import ListReview from "./ListReview";
import ListCardByTheLoai from "./ListCardByTheLoai";
import * as sanphamServices from '../../apiServices/sanphamServices';  

function ProductComponents(props) {  
    const [saleBooks,setSaleBooks]=useState([]);
    const idloaisanpham = JSON.parse(localStorage.getItem("idloaisanpham"));
    useEffect(() => { 
       const getcardTheLoai = async () => {
           const result = await sanphamServices.getListSanPham(
               `SanPhamBytheloai/${idloaisanpham}`
           );  
           setSaleBooks(result.sanpham)
       };  
       getcardTheLoai();
   }, []);     
    return (
        <>  
        <CardDetail /> 
        <ListCardByTheLoai saleBooks={saleBooks}/> 
        <ListReview/>
        </> 
    );
}

export default ProductComponents;
