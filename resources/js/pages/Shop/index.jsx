import React, { useEffect, useState } from "react";
import * as sanphamServices from '../../apiServices/sanphamServices';
import "./style.scss";
import ShopComponent from "../../components/ShopComponents/ShopComponent/ShopContent";
import { useDispatch, useSelector } from "react-redux";
import { getDisplaySanPham, getPagination } from "../../Actions/sanphamActions";

function Shop() {
 
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.sanpham.filter); 
    useEffect(() => {
        const getDisplaySanPhams = async () => {
            const endpoint = filters.link;

            const filter = {
                params: {
                    limit: filters.limit,
                    sort: filters.sort,
                    tacgia: filters.tacgia,
                    nuocsx: filters.nuocsx,
                    theloai: filters.theloai,
                    star: filters.star,
                    page: filters.page,
                },
            };
            const result = await sanphamServices.getListSanPham(endpoint, filter);  
            dispatch(getPagination(result.sanpham.meta)); 
            dispatch(getDisplaySanPham(result.sanpham.data));  
        };
        getDisplaySanPhams();
    }, [filters]);   
    return (
        <>
            <ShopComponent 
            />
        </>
    );
}

export default Shop;
