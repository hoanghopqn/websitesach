import React, { useEffect, useState } from "react";
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "react-bootstrap";
import "./style.scss"; 
import { useDispatch } from "react-redux";
import { getDDHFilterLink } from "../../../Actions/sanphamActions";
import DonDatHang from ".";
function DDHComponent(props) {
    const { dsdondathang,filterDDHs,nhanvienid } = props; 
    const [Tabid, SetTabId] = useState(1) ;  
    const [id, SetId] = useState(1) ;  
  const dispatch = useDispatch(); 
    const nameQL = [
        { id: 0, name: 'Đã Xóa' },
        { id: 1, name: 'Đang Chờ Đuyệt'  },
        { id: 2, name: 'Đang Giao Hàng' },
        { id: 3, name: 'Đã Giao' },
        { id: 4, name: 'Bị Hủy' }, ];  
    const hangletab=(ida)=>{
        SetTabId(nameQL[ida].id);
        SetId(nameQL[ida].id);
        dispatch(getDDHFilterLink(`dondathangbytt/${ida}`)); 
    }
    return (
        <div className="feature-ddh">
            <div className="feature-ddh-btn"> 
            <Button className={Tabid === nameQL[1].id ? "active" : ""}
                    onClick={() => {hangletab(1) }}>
                    <a>  {nameQL[1].name}</a> 
            </Button>
            <Button className={Tabid === nameQL[2].id ? "active" : ""}
                    onClick={() => {hangletab(2) }}>
                    <a> {nameQL[2].name}</a> 
            </Button>  
            <Button className={Tabid === nameQL[3].id ? "active" : ""}
                    onClick={() => { hangletab(3)  }}>
                    <a>  {nameQL[3].name}</a> 
            </Button>  
            <Button className={Tabid === nameQL[4].id ? "active" : ""}
                    onClick={() => {hangletab(4) }}>
                    <a> {nameQL[4].name}</a> 
            </Button>  
            <Button className={Tabid === nameQL[0].id ? "active" : ""}
                    onClick={() => {hangletab(0) }}>
                    <a> {nameQL[0].name}</a> 
            </Button>  
            </div>
            <div className="ddh-table">
            <TabContent activeTab={Tabid}> 
                <TabPane className={Tabid === id ? "" : "none"} tabId="1"> 
                    <DonDatHang dsdondathang={dsdondathang} 
                filterDDHs={filterDDHs}  nhanvienid={nhanvienid} nameTT={Tabid}/>
                </TabPane> 
                
            </TabContent></div>
        </div>
    );
}

export default DDHComponent;
