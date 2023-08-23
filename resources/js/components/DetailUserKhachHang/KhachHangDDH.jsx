import React, { useEffect, useState } from "react";
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "react-bootstrap";
import "./style.scss"; 
import { useDispatch, useSelector } from "react-redux"; 
import { getDDHFilterLink, getUerDDHLink } from "../../Actions/sanphamActions";
import DonDatHang from "../QuanLyComponent/DonDatHang";
import { useNavigate } from "react-router-dom";
import SanPhamDDH from "./SanPhamDDH";
function KhachHangDDH(props) { 
    const [Tabid, SetTabId] = useState(1) ;  
    const [id, SetId] = useState(1) ;   
    let navigate = useNavigate(); 
  const dispatch = useDispatch(); 
    const nameQL = [
        { id: 1, name: 'Đang Chờ Đuyệt'  },
        { id: 2, name: 'Đang Giao Hàng' },
        { id: 3, name: 'Hoàn Thành' },
        { id: 4, name: 'Đã Hủy' },  ];  
    const hangletab=(ida)=>{
        SetTabId(nameQL[ida].id);
        SetId(nameQL[ida].id);   
        dispatch(getUerDDHLink(`dondathangbytt/${nameQL[ida].id}`))
    }
    return (
        <div className="feature-ddh">
            <div className="feature-ddh-btn"> 
            <Button className={Tabid === nameQL[0].id ? "active ddhbtn" : "ddhbtn"}
                    onClick={() => {hangletab(0) }}>
                    <a>  {nameQL[0].name}</a> 
            </Button>
            <Button className={Tabid === nameQL[1].id ? "active ddhbtn" : "ddhbtn"}
                    onClick={() => {hangletab(1) }}>
                    <a> {nameQL[1].name}</a> 
            </Button>  
            <Button className={Tabid === nameQL[2].id ? "active ddhbtn" : "ddhbtn"}
                    onClick={() => { hangletab(2)  }}>
                    <a>  {nameQL[2].name}</a> 
            </Button>  
            <Button className={Tabid === nameQL[3].id ? "active ddhbtn" : "ddhbtn"}
                    onClick={() => {hangletab(3) }}>
                    <a> {nameQL[3].name}</a> 
            </Button>   
            </div>
            <TabContent activeTab={Tabid}> 
                <TabPane className={Tabid === id ? "" : "none"} tabId="1">  
                <SanPhamDDH nameTT={nameQL[Tabid-1].name} id={nameQL[Tabid-1].id}/>
                </TabPane> 
                
            </TabContent>
        </div>
    );
}

export default KhachHangDDH;
