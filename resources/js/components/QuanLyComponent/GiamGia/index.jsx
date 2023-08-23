import React, { useEffect, useState } from "react";
import { Container, Table, Form  } from "react-bootstrap";
import "./style.scss";
import DataGG from "./DataGG";
import { useDispatch } from "react-redux";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import EditGG from "./EditGG"; 
import { getGiamGia } from "../../../Actions/sanphamActions";

function GiamGia(props) {
  const { giamgia,nhanvienid,hotenid } = props
  const dispatch = useDispatch();
  const [TF, setTF] = useState(true); 
  const [editFormData, setEditFormData] = useState({
    id: "",
    masp: "",
    nhanvien_id: '',
    hoten: "",
    noidung: "",
    ngaybd: "",
    ngaykt: "",
    phantram: "",
  });
  const handleEditClick = (event, giamgia) => {
    event.preventDefault();

    setTF(true);
    const formValues = {
      id: giamgia.id,
      masp: giamgia.masp,
      nhanvien_id: giamgia.nhanvien_id,
      hoten: giamgia.hoten,
      noidung: giamgia.noidung,
      ngaybd: giamgia.ngaybd,
      ngaykt: giamgia.ngaykt,
      phantram: giamgia.phantram,
    };
    setEditFormData(formValues);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = { 
      masp: editFormData.masp,
      nhanvien_id: editFormData.nhanvien_id,
      noidung: editFormData.noidung,
      ngaybd: editFormData.ngaybd,
      ngaykt: editFormData.ngaykt,
      phantram: editFormData.phantram,
    };

    if (TF) {
      await quanlyServices.update(`giamgia/${editFormData.id}`, editedContact);
    } else {
      await quanlyServices.store('giamgia', editedContact);
    }
    setEditFormData({
      id: "",
      masp: "",
      nhanvien_id: "",
      hoten: "",
      noidung: "",
      ngaybd: "",
      ngaykt: "",
      phantram: "",
    });
    const LoadGG = await quanlyServices.get('giamgia'); 
    dispatch(getGiamGia(LoadGG.giamgia.data)); 
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
    if(editFormData.id==' ')
    {
      const giamgias = [...giamgia]; 
      const index = giamgia.findIndex((giamgia) => giamgia.id === ' ');
      giamgias.splice(index, 1);
      dispatch(getGiamGia(giamgias));
    }  
    setEditFormData({
      id: "",
      masp: "",
      nhanvien_id: "",
      hoten: "",
      noidung: "",
      ngaybd: "",
      ngaykt: "",
      phantram: "",
    });
  };
  const handleDeleteClick = async (madot) => {

  }; 
  const handleADD = () => {
    setTF(false);
    const newGG = {
      id: " ",
      masp: "",
      nhanvien_id: nhanvienid,
      hoten: hotenid,
      noidung: "",
      ngaybd: "",
      ngaykt: "",
      phantram: "",
    }
    setEditFormData(newGG); 
    dispatch(getGiamGia([newGG, ...giamgia]));
  }
  return (
    <>
      <div className='chucnang'>
        <div className='find-seach'>
          <input className='header-input' type='text' placeholder='tìm kiếm...' />
          <button className='button-seach'><AiOutlineSearch size={25} /></button>
        </div>
        <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button>
      </div>
      <div className='giamgia-content'>
        <Container className="feature-card">
        <Form onSubmit={handleEditFormSubmit}>
          <Table >   <thead>
            <tr>
              <th>
                Mã Đợt
              </th>
              <th>
                tensp
              </th>
              <th>
                Mã Nhân Viên
              </th>
              <th>
                Nội Dung
              </th>
              <th>
                Ngày Bắt Đầu
              </th>
              <th>
                Ngày Kết Thúc
              </th>
              <th>
                Phần Trăm
              </th>
              <th>
                Chức Năng
              </th>
            </tr>
          </thead>
            <tbody>
              {giamgia.map((giamgia, index) => (editFormData.id === giamgia.id ?
                <EditGG
                  key={index}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                /> :
                <DataGG
                  key={index} 
                  giamgia={giamgia} 
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              ))}

            </tbody>
          </Table></Form>
        </Container> 
      </div>
    </>
  );
}

export default GiamGia;
