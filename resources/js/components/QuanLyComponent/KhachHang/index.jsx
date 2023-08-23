import React, { useState } from "react";
import { Container, Table, Form } from "react-bootstrap";
import "./style.scss";
import DataKH from "./DataKH";
import EditKH from "./EditKH";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDSTaiKhoan, getKhachHang } from "../../../Actions/sanphamActions";

function KhachHang(props) {
  const { khachhang, dstaiKhoan } = props;
  const [TF, setTF] = useState(true);
  const [searchKH, setSearchKH] = useState('');
  const [saveKH, setSaveKH] = useState([]);
  const dispatch = useDispatch();
  const [editFormData, setEditFormData] = useState({
    id: "",
    hoten: "",
    diachi: "",
    sdt: "",
    taikhoan: "",
    email: "",
    ngaysinh: "",
  });
  const handleSearch=async (e)=>{
    setSaveKH(khachhang);
    if(e.target.value==null)
    { 
      dispatch(getKhachHang(saveKH));
    }else{ 
      setSearchKH(e.target.value)
    const result = await quanlyServices.get(`SearchKH/${e.target.value}`);  
    dispatch(getKhachHang(result.khachhang.data));
    };
 }
  const handleEditClick = (event, khachhang) => {
    event.preventDefault();

    setTF(true);
    const formValues = {
      id: khachhang.id,
      hoten: khachhang.hoten,
      sdt: khachhang.sdt,
      diachi: khachhang.diachi,
      ngaysinh: khachhang.ngaysinh,
      ngayvaolam: khachhang.ngayvaolam,
      email: khachhang.email,
      taikhoan: khachhang.taikhoan,
      hinhanh: khachhang.hinhanh,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      id: editFormData.id,
      hoten: editFormData.hoten,
      diachi: editFormData.diachi,
      sdt: editFormData.sdt,
      taikhoan: editFormData.taikhoan,
      email: editFormData.email,
      ngaysinh: editFormData.ngaysinh,
      thangthai: 1
    };

    if (TF) {
      await quanlyServices.update(`khachhang/${editFormData.id}`, editedContact);
    } else {
      const createTK = {
        taikhoan: editedContact.taikhoan,
        matkhau: editedContact.taikhoan,
        quyen_id: 2,
        thangthai: 1
      };
      await quanlyServices.store('khachhang', editedContact);
      await quanlyServices.store('dstaikhoan', createTK);
    }
    setEditFormData({
      id: "",
      hoten: "",
      diachi: "",
      sdt: "",
      taikhoan: "",
      email: "",
      ngaysinh: "",
    });
    const LoadKH = await quanlyServices.get('khachhang');
    const LoadDSTK = await quanlyServices.get('dstaikhoan');
    dispatch(getKhachHang(LoadKH.khachhang.data));
    dispatch(getDSTaiKhoan(LoadDSTK.data));
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
      id: "",
      hoten: "",
      diachi: "",
      sdt: "",
      taikhoan: "",
      email: "",
      ngaysinh: "",
    });
  };
  const handleDeleteClick = async (id) => {

    const khachhangs = [...khachhang];

    const index = khachhang.findIndex((khachhang) => khachhang.id === id);

    khachhangs.splice(index, 1);
    dispatch(getKhachHang(khachhangs));
    const KHbyID = await quanlyServices.get(`khachhang/${id}`);
    const deleteKH = { ...KHbyID, thangthai: 0 };
    const dstks = [...dstaiKhoan];
    const indextk = dstaiKhoan.findIndex((dstaiKhoan) => dstaiKhoan.taikhoan === deleteKH.taikhoan);
    if (indextk !== -1) {
      const deleteTK = { ...dstks[indextk], thangthai: 0 };
      await quanlyServices.update(`dstaikhoan/${deleteKH.taikhoan}`, deleteTK)
      dstks.splice(indextk, 1);
      dispatch(getDSTaiKhoan(dstks));
    }
    await quanlyServices.update(`khachhang/${id}`, deleteKH);
  };

  const handleADD = () => {
    setTF(false);
    const newKH = {
      id: ' ',
      hoten: "",
      sdt: "",
      diachi: "",
      ngaysinh: "",
      email: "",
      taikhoan: "",
    }
    setEditFormData(newKH);
    dispatch(getKhachHang([...khachhang, newKH]))
  }
  return (
    <>
      <div className='chucnang'>
        <div className='find-seach'>
          <input className='header-input'  value={searchKH} onChange={(e)=>handleSearch(e)} type='text' placeholder='tìm kiếm...' /> 
        </div>
        <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button>
      </div>
      <Container className="feature-card">
        <Form onSubmit={handleEditFormSubmit}>
          <Table >   <thead>
            <tr>
              <th>
                Mã Khách Hàng
              </th>
              <th>
                Họ Tên
              </th>
              <th>
                Địa Chỉ
              </th>
              <th>
                SĐT
              </th>
              <th>
                Tài Khoản
              </th>
              <th>
                Email
              </th>
              <th>
                Ngày Sinh
              </th>
              <th>
                Chức Năng
              </th>
            </tr>
          </thead>
            <tbody>
              {khachhang.map((khachhang, index) => (editFormData.id === khachhang.id ?
                <EditKH
                  key={index}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                /> :
                <DataKH
                  key={index}
                  khachhang={khachhang}
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

export default KhachHang;
