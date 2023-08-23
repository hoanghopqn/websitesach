import React, { useState } from "react";
import { Container, Table, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import "./style.scss";
import DataPN from "./DataPN";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { useDispatch } from "react-redux";
import { getPhieuNhap } from "../../../Actions/sanphamActions";
import EditPN from "./EditPN";

function PhieuNhap(props) {
  const { phieunhap } = props;
  const [TF, setTF] = useState(true);
  const [savePN, setSavePN] = useState([]);
  const [searchPN, setSearchPN] = useState('');
  const dispatch = useDispatch();
  const [editFormData, setEditFormData] = useState({
    maphieunhap: "",
    nhanvien_id: "",
    ngaynhap: "",
    tongtien: "",
  });
  const handleSearch=async (e)=>{
    setSavePN(phieunhap);
    if(e.target.value==null)
    {
      dispatch(getPhieuNhap(savePN));

    }else{ 
      setSearchPN(e.target.value)
      const result = await quanlyServices.get(`SearchPN/${e.target.value}`);  
      dispatch(getPhieuNhap(result.phieunhapsanpham.data));
    }
 }
  const handleEditClick = (event, phieunhap) => {
    event.preventDefault();

    setTF(true);
    const formValues = {
      maphieunhap: phieunhap.maphieunhap,
      nhanvien_id: phieunhap.nhanvien_id,
      ngaynhap: phieunhap.ngaynhap,
      tongtien: phieunhap.tongtien,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      maphieunhap: editFormData.maphieunhap,
      nhanvien_id: editFormData.nhanvien_id,
      ngaynhap: editFormData.ngaynhap,
      tongtien: editFormData.tongtien,
    };
    if (TF) {
      await quanlyServices.update(`phieunhapsanpham/${editFormData.maphieunhap}`, editedContact);
    } else {
      await quanlyServices.store('phieunhapsanpham', editedContact);
    }
    setEditFormData({
      maphieunhap: "",
      nhanvien_id: "",
      ngaynhap: "",
      tongtien: "",
    });
    const dspn = await quanlyServices.get('phieunhapsanpham');
    dispatch(getPhieuNhap(dspn.phieunhapsanpham.data))
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleCancelClick = () => { 
    setEditFormData({
      maphieunhap: "",
      nhanvien_id: "",
      ngaynhap: "",
      tongtien: "",
    });
  };
  const handleDeleteClick = async (id) => {

  };

  const handleADD = () => {
    setTF(false);
    const newmapn =phieunhap.length>0&&phieunhap.length<9? ('phieunhap000' + (phieunhap.length + 1)):('phieunhap00' + (phieunhap.length + 1));
    const newPN = {
      maphieunhap: newmapn,
      nhanvien_id: "",
      ngaynhap: "",
      tongtien: "",
    }
    setEditFormData(newPN);
    dispatch(getPhieuNhap([...phieunhap, newPN]))
  }



  return (
    <>
      <div className='chucnang'>
        <div className='find-seach'>
          <input className='header-input'  value={searchPN} onChange={(e)=>handleSearch(e)}  type='text' placeholder='tìm kiếm...' /> 
        </div>
        <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button>
      </div>
      <Container className="feature-card">
        <Form onSubmit={handleEditFormSubmit}>
          <Table >   <thead>
            <tr>
              <th>
                Mã Phiếu Nhập
              </th>
              <th>
                Mã Nhân Viên
              </th>
              <th>
                Ngay Nhập
              </th>
              <th>
                Tổng Tiền
              </th>
              <th>
                Chức Năng
              </th>
            </tr>
          </thead>
            <tbody>
              {phieunhap.map((phieunhap, index) => (editFormData.maphieunhap === phieunhap.maphieunhap ?
                <EditPN
                  key={index}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                /> :
                <DataPN
                  key={index}
                  phieunhap={phieunhap}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              ))}

            </tbody>
          </Table></Form>
      </Container>
    </>
  );
}

export default PhieuNhap;
