import React, { useEffect, useState } from "react";
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "react-bootstrap";
import "./style.scss"; 
import { FaBookReader, FaUserCog, FaGift, FaEdit } from "react-icons/fa"; 
import { BsPlusCircle, BsChevronLeft, BsChevronRight } from "react-icons/bs"; 
import DetailKhachHang from "../DetailKhachHang";
import Doimatkhau from "../CartComponents/Doimatkhau";
import KhachHangDDH from "./KhachHangDDH";
function DetailUserKhachHang(props) {
    const [Tabid, SetTabId] = useState(1)  
    const nameQL = [
        { id: 1, name: 'Thông Tin Cá Nhân' },
        { id: 2, name: 'Đơn Mua'},
        { id: 3, name: 'Đổi Mật Khẩu' }, ]; 
 
    return (
        <div className="feature">
            <div className="feature-btndetail"> 
            <Button className={Tabid === nameQL[0].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[0].id) }}>
                    <a>{nameQL[0].icon}    {nameQL[0].name}</a> 
            </Button>
            <Button className={Tabid === nameQL[1].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[1].id) }}>
                    <a>{nameQL[1].icon}    {nameQL[1].name}</a> 
            </Button>  
            <Button className={Tabid === nameQL[2].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[2].id) }}>
                    <a>{nameQL[2].icon}    {nameQL[2].name}</a> 
            </Button> 
            </div>
            <TabContent activeTab={Tabid}> 
                <TabPane className={Tabid === 1 ? "" : "none"} tabId="1">
                    <DetailKhachHang/>
                </TabPane>
                <TabPane className={Tabid === 2 ? "" : "none"} tabId="2">
                <KhachHangDDH/>
                </TabPane>
                <TabPane className={Tabid === 3 ? "" : "none"} tabId="3">
                <Doimatkhau/>
                </TabPane> 
            </TabContent>
        </div>
    );
}

export default DetailUserKhachHang;
