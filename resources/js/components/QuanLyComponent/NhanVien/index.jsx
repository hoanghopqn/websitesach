import React, { Fragment, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import DataNV from "./DaTaNV";
import "./style.scss";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import ReadOnlyRow from "./ReadOnlyRow";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDSTaiKhoan, getNhanVien } from "../../../Actions/sanphamActions";


function NhanVien(props) {
  const { nhanvien, dstaiKhoan } = props;
  const [searchNV, setSearchNV] = useState('');
  const [saveNV, setSaveNV] = useState([]);
  const dispatch = useDispatch();
  const [editFormData, setEditFormData] = useState({
    id: "",
    hoten: "",
    sdt: "",
    diachi: "",
    ngaysinh: "",
    ngayvaolam: "",
    email: "",
    taikhoan: "",
    hinhanh: "",
  });
  const [TF, setTF] = useState(true);

  const handleEditClick = (event, nhanvien) => {
    event.preventDefault();
    setTF(true);
    const formValues = {
      id: nhanvien.id,
      hoten: nhanvien.hoten,
      sdt: nhanvien.sdt,
      diachi: nhanvien.diachi,
      ngaysinh: nhanvien.ngaysinh,
      ngayvaolam: nhanvien.ngayvaolam,
      email: nhanvien.email,
      taikhoan: nhanvien.taikhoan,
      hinhanh: nhanvien.hinhanh,
    };

      console.log(formValues)
    setEditFormData(formValues);
  };
  const handleEditFormSubmit = async (event) => {

    event.preventDefault();

    const editedContact = {
      hoten: editFormData.hoten,
      sdt: editFormData.sdt,
      diachi: editFormData.diachi,
      ngaysinh: editFormData.ngaysinh,
      ngayvaolam: editFormData.ngayvaolam,
      email: editFormData.email,
      taikhoan: editFormData.taikhoan,
      hinhanh: editFormData.hinhanh,
      thangthai: 1
    };

    if (TF) {
      await quanlyServices.update(`nhanvien/${editFormData.id}`, editedContact);
    } else {
      const createTK = {
        taikhoan: editedContact.taikhoan,
        matkhau: editedContact.taikhoan,
        quyen_id: 1,
        thangthai: 1
      };
      await quanlyServices.store('nhanvien', editedContact);
      await quanlyServices.store('dstaikhoan', createTK);
    }
    setEditFormData({
      id: "",
      hoten: "",
      sdt: "",
      diachi: "",
      ngaysinh: "",
      ngayvaolam: "",
      email: "",
      taikhoan: "",
      hinhanh: "",
    });
    const dsnv = await quanlyServices.get('nhanvien');
    const dsttk = await quanlyServices.get('dstaikhoan');
    dispatch(getNhanVien(dsnv.nhanvien.data))
    dispatch(getDSTaiKhoan(dsttk.data))
  };
  const handleSearch=async (e)=>{
    setSaveNV(nhanvien);
    if(e.target.value==null)
    { 
      dispatch(getNhanVien(saveNV));
    }else{ 
      setSearchNV(e.target.value)
const result = await quanlyServices.get(`SearchNV/${e.target.value}`);  
dispatch(getNhanVien(result.nhanvien.data));
    }
 }
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleCancelClick = () => {
    if(editFormData.id==' ')
    {
      const nhanviens = [...nhanvien]; 
      const index = nhanvien.findIndex((nhanvien) => nhanvien.id === ' ');
      nhanviens.splice(index, 1);
      dispatch(getNhanVien(nhanviens));
    }  
    setEditFormData({
      id: "",
      hoten: "",
      sdt: "",
      diachi: "",
      ngaysinh: "",
      ngayvaolam: "",
      email: "",
      taikhoan: "",
      hinhanh: "",
    });
  };
  const handleDeleteClick = async (id) => {
    const nhanviens = [...nhanvien];

    const index = nhanvien.findIndex((nhanvien) => nhanvien.id === id);

    nhanviens.splice(index, 1);
    dispatch(getNhanVien(nhanviens));
    const NVbyID = await quanlyServices.get(`nhanvien/${id}`);
    const deleteNV = { ...NVbyID, thangthai: 0 };
    const dstks = [...dstaiKhoan];
    const indextk = dstaiKhoan.findIndex((dstaiKhoan) => dstaiKhoan.taikhoan === deleteNV.taikhoan);
    if (indextk !== -1) {
      const deleteTK = { ...dstks[indextk], thangthai: 0 };
      await quanlyServices.update(`dstaikhoan/${deleteTK.taikhoan}`, deleteTK)
      dstks.splice(indextk, 1);
      dispatch(getDSTaiKhoan(dstks));
    }
    await quanlyServices.update(`nhanvien/${id}`, deleteNV);
  };
  const handleADD = () => {
    setTF(false);
    const newNV = {
      id: ' ',
      hoten: "",
      sdt: "",
      diachi: "",
      ngaysinh: "",
      ngayvaolam: "",
      email: "",
      taikhoan: "",
      hinhanh: "",
    }
    setEditFormData(newNV);
    dispatch(getNhanVien([newNV, ...nhanvien]));
  }
  return (
    <>
      <div className='chucnang'>
        <div className='find-seach'>
          <input className='header-input' value={searchNV} onChange={(e)=>handleSearch(e)} type='text' placeholder='tìm kiếm...' /> 
        </div>
        <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button>
      </div>
      <Container className="feature-card">
        <Form onSubmit={handleEditFormSubmit}>
          <Table >   <thead>
            <tr>
              <th>
                Mã Nhân Viên
              </th>
              <th>
                Họ Tên
              </th>
              <th>
                SĐT
              </th>
              <th>
                Địa Chỉ
              </th>
              <th>
                Ngày Sinh
              </th>
              <th>
                Ngày Vào Làm
              </th>
              <th>
                Email
              </th>
              <th>
                Tài Khoản
              </th>
              <th>
                Hình Ảnh
              </th>
              <th>
                Chức Năng
              </th>
            </tr>
          </thead>
            <tbody>
              {nhanvien.map((nhanvien, index) => (editFormData.id === nhanvien.id ?
                <DataNV
                  key={index}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                /> :
                <ReadOnlyRow
                  key={index}
                  nhanvien={nhanvien}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              ))}

            </tbody>
          </Table></Form>
      </Container> </>
  );
}

export default NhanVien;
