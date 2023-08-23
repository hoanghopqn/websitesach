import React, { useEffect, useState } from "react"; 
import * as sanphamServices from '../../apiServices/sanphamServices';
import * as quanlyServices from '../../apiServices/quanlyServices';
import "./style.scss";
import ProductComponents from "../../components/ProductComponents";
import { useDispatch, useSelector } from "react-redux"; 
import { getDetaiSanPham, getMetaReview, getReview } from "../../Actions/sanphamActions"; 
 
function Card() { 
    const dispatch = useDispatch(); 
    const masanpham = JSON.parse(localStorage.getItem("masanpham"));
    const listRV = useSelector((state) => state.sanpham.listReview.filterRV);
    useEffect(() => {
        const getcardDetail = async () => {
            const result = await sanphamServices.getListSanPham(
                `SanPhamDetail/${masanpham}`
            );
            dispatch(getDetaiSanPham(result.sanpham[0])); 
        };  
        getcardDetail();
    }, []);
    useEffect(() => {

        const getRV = async () => {
            const filter = {
                params: {
                    limit: listRV.limit,
                    page: listRV.page,
                }
            };
            const result = await quanlyServices.get(`reviewbysp/${masanpham}`, filter);
            dispatch(getReview(result.review.data)); 
            dispatch(getMetaReview(result.review.meta));
        };
        getRV();
    }, [listRV]);   
    return (
        <> 
         <ProductComponents/> 
        </>
    );
}

export default Card;
