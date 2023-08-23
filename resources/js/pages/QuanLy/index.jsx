import React, { useEffect, useState } from "react";
import * as quanlyServices from '../../apiServices/quanlyServices';
import "./style.scss";
import QuanLyComponent from "../../components/QuanLyComponent";
import { useDispatch, useSelector } from "react-redux";
import {
    getCTGiamGia, getCTPhieuNhap, getDSTaiKhoan, getDonDatHang, getFilterNhanVien,
    getGiamGia, getKhachHang, getMetaDSTaiKhoan, getMetaDonDatHang, getMetaKhachHang,
    getMetaNhanVien, getMetaNuoc, getMetaPhieuNhap, getMetaSanPham, getMetaTacGia, getNhanVien,
    getNuoc,
    getPhieuNhap, getSanPham, getTacGia
} from "../../Actions/sanphamActions";

function QuanLy() {
    const dispatch = useDispatch();
    const listds = useSelector((state) => state.sanpham);
    const { listNhanVien, listKhachHang, listSanPham, listGiamGia, listDSTaiKhoan, listPhieuNhap, listCTPN, listDDH,listTacGia,listNuoc } = listds;
    const filterNVs = listNhanVien.filterNV;
    const filterKHs = listKhachHang.filterKH;
    const filterSPs = listSanPham.filterSP;
    const filterPNs = listPhieuNhap.filterPN; 
    const filterDDHs = listDDH.filter;     
    const filterTGs = listTacGia.filterTG;     
    const filterNs = listNuoc.filterN;        
    const filterDSTKs = listDSTaiKhoan.filterDSTK;     
    useEffect(() => {

        const getNV = async () => {
            const filter = {
                params: {
                    limit: filterNVs.limit,
                    page: filterNVs.page,
                }
            };
            const result = await quanlyServices.get("nhanvien", filter);
            dispatch(getNhanVien(result.nhanvien.data));
            dispatch(getMetaNhanVien(result.nhanvien.meta));
        };
        getNV();
    }, [filterNVs]);
    useEffect(() => {

        const getTG = async () => {
            const filter = {
                params: {
                    limit: filterTGs.limit,
                    page: filterTGs.page,
                }
            };
            const result = await quanlyServices.get("tacgia", filter);
            dispatch(getTacGia(result.tacgia.data)); 
            dispatch(getMetaTacGia(result.tacgia.meta));
        };
        getTG();
    }, [filterTGs]);
    useEffect(() => {

        const getN = async () => {
            const filter = {
                params: {
                    limit: filterNs.limit,
                    page: filterNs.page,
                }
            };
            const result = await quanlyServices.get("nuoc", filter);
            dispatch(getNuoc(result.nuocsx.data));
            dispatch(getMetaNuoc(result.nuocsx.meta));
        };
        getN();
    }, [filterNs]);
    useEffect(() => {

        const getKH = async () => {
            const filter = {
                params: {
                    limit: filterKHs.limit,
                    page: filterKHs.page,
                }
            };
            const result = await quanlyServices.get("khachhang", filter);
            dispatch(getKhachHang(result.khachhang.data));
            dispatch(getMetaKhachHang(result.khachhang.meta));
        };
        getKH();
    }, [filterKHs]);
    useEffect(() => {  
          const getDDH = async () => {
              const endpoint = filterDDHs.link;
          const filter = {
              params: { 
                  limit: filterDDHs.limit,
                  page: filterDDHs.page,
              }
          }; 
          const result = await quanlyServices.get(endpoint, filter);
          dispatch(getDonDatHang(result.dondathang.data)); 
          dispatch(getMetaDonDatHang(result.dondathang.meta));
                 };
      getDDH();
    }, [filterDDHs]);
    useEffect(() => {

        const getSP = async () => {
            const filter = {
                params: {
                    limit: filterSPs.limit,
                    page: filterSPs.page,
                }
            };
            const result = await quanlyServices.get("get-books-all", filter);
            dispatch(getSanPham(result.sanpham.data));
            dispatch(getMetaSanPham(result.sanpham.meta));
        };
        getSP();
    }, [filterSPs]);

    useEffect(() => {

        const getPN = async () => {
            const filter = {
                params: {
                    limit: filterPNs.limit,
                    page: filterPNs.page,
                }
            };
            const result = await quanlyServices.get("phieunhapsanpham", filter);
            dispatch(getPhieuNhap(result.phieunhapsanpham.data));
            dispatch(getMetaPhieuNhap(result.phieunhapsanpham.meta));
        };
        getPN();
    }, [filterPNs]);

    useEffect(() => {

        const getDSTK = async () => {
            const filter = {
                params: {
                    limit: filterDSTKs.limit,
                    page: filterDSTKs.page,
                }
            };
            const result = await quanlyServices.get("dstaikhoan", filter);
            dispatch(getDSTaiKhoan(result.dstaikhoan.data));
            dispatch(getMetaDSTaiKhoan(result.dstaikhoan.meta));
        };
        getDSTK();
    }, [filterDSTKs]);
    useEffect(() => {
        // const getDonDatHang = async () => { 
        //     const result = await quanlyServices.get("dondathang"); 
        //     dispatch(getDonDatHang(result.dondathang.data));
        // }; 

        const getGG = async () => {
            const result = await quanlyServices.get("giamgia");
            dispatch(getGiamGia(result.giamgia.data));
        }; 
        const getCTPN = async () => {
            const result = await quanlyServices.get("ctpn");
            dispatch(getCTPhieuNhap(result.ctpn));
        };
        getCTPN(); 
        // getDonDatHang();
        getGG(); 
    }, []);
    return (
        <>
            <QuanLyComponent 
            />
        </>
    );
}

export default QuanLy;
