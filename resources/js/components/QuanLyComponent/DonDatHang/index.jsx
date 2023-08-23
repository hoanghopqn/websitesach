import React, { useState } from "react";
import { Container, Table, Form,CloseButton } from "react-bootstrap";
import { AiFillCloseSquare } from "react-icons/ai"; 
import * as quanlyServices from '../../../apiServices/quanlyServices';
import "./style.scss";
import DataDDH from "./DataDDH"; 
import { useDispatch } from "react-redux"; 
import CTDDH from "../CTDDH";
import { getDonDatHang } from "../../../Actions/sanphamActions";

function DonDatHang(props) {
  const { dsdondathang,filterDDHs,nhanvienid,nameTT } = props; 
  const [OCTDDH, setOCTDDH] = useState("ctddh-content displaynone"); 
  const [dsctddh, setDSCTDDH] = useState([]);
  const dispatch = useDispatch(); 
  const handleEditClick = async (event, dondathang,trangthai) => {
    event.preventDefault();
 
    const formValues = {
      id: dondathang.id,
      khachhang_id: dondathang.khachhang_id,
      nhanvien_id: nhanvienid,
      diachi: dondathang.diachi,
      sdt: dondathang.sdt,
      ghichu: dondathang.ghichu,
      thangthai: trangthai,
      tongtien: dondathang.tongtien,
      thoigiandat: dondathang.thoigiandat,
    };
    
  // const result = await quanlyServices.get(`ctgg/${listds.idGG}`);
    await quanlyServices.update(`dondathang/${dondathang.id}`, formValues);  
    const filter = {
        params: {
            limit: filterDDHs.limit,
            page: filterDDHs.page,
        }
    };
    const result = await quanlyServices.get(`dondathangbytt/${dondathang.thangthai}`, filter);
    dispatch(getDonDatHang(result.dondathang.data)); 
    
  };
   
  const handleCTDDHClick = async ( id) => {
    setOCTDDH('ctddh-content');
   const result = await quanlyServices.get(`ctddh/${id}`); 
   setDSCTDDH(result.CTDDH) 
  };
  const handleCloseClick = async ( ) => {
    setOCTDDH('ctddh-content displaynone'); 
   setDSCTDDH([]) 
  };
  return (
    <>
      <div className='chucnang'> 
      </div>
      <div className="dondathang-content"> 
      <div className={OCTDDH}>
        <AiFillCloseSquare className="button-close" onClick={handleCloseClick}/>
          <CTDDH  dsctddh={dsctddh}/> 
      </div>
        <Container className="feature-card">
          <Table >   <thead>
            <tr>
              <th>
                Mã DDH
              </th>
              <th>
                Mã Khách Hàng
              </th>
              <th>
                Mã Nhân Viên
              </th>
              <th>
                Địa Chỉ
              </th>
              <th>
                SĐT
              </th>
              <th>
                Ghi Chú
              </th>
              <th>
                Tổng Tiền
              </th>
              <th>
                Thời Gian Đặt
              </th>
              <th>
                Trạng Thái
              </th>
              <th>
                Chức Năng
              </th>
            </tr>
          </thead>
            <tbody>
              {dsdondathang.map((dondathang, index) => ( 
                <DataDDH
                  key={index} 
                  dondathang={dondathang}
                  nameTT={nameTT}
                  handleCTDDHClick={handleCTDDHClick}
                  handleEditClick={handleEditClick} 
                />
              ))}

            </tbody>
          </Table>
        </Container>
      </div></>
  );
}

export default DonDatHang;
