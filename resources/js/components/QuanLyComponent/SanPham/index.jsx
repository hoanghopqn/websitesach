import React, { useState } from "react";
import { Container, Table, Form } from "react-bootstrap";
import "./style.scss";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDSTaiKhoan, getKhachHang, getSanPham } from "../../../Actions/sanphamActions";
import EditSP from "./EditSP";
import DataSP from "./DataSP";

function SanPham(props) {
  
  const { sanpham,lengthma } = props;
  const [TF, setTF] = useState(true);
  const [searchSP, setSearchSP] = useState('');
  const [saveSP, setSaveSP] = useState([]);
  const dispatch = useDispatch();
  const newmasp=`masp0${lengthma+1}`;
  const [editFormData, setEditFormData] = useState({
    masp: "",
    tensp: "",
    loaisanpham_id: "",
    mota: "",
    gia: "",
    soluongton: "",
    hinhanh: "",
    tacgia_id: "",
    nuoc_id: "",
    thangthaisp: "",
  });
  const handleSearch=async (e)=>{
    setSaveSP(sanpham);
    if(e.target.value==null)
    { 
      dispatch(getSanPham(saveSP));
    }else{ 
      setSearchSP(e.target.value) 
      const result = await quanlyServices.get(`SearchDetail/${e.target.value}`);
      dispatch(getSanPham(result.sanpham.data));
    }
 }
  const handleEditClick = (event, sanpham) => {
    event.preventDefault();

    setTF(true);
    const formValues = {
      masp: sanpham.masp,
      tensp: sanpham.tensp,
      loaisanpham_id: sanpham.loaisanpham_id,
      mota: sanpham.mota,
      gia: sanpham.gia,
      soluongton: sanpham.soluongton,
      hinhanh: sanpham.hinhanh,
      tacgia_id: sanpham.tacgia_id,
      tensp: sanpham.tensp,
      thangthaisp: sanpham.thangthaisp,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      masp: editFormData.masp,
      tensp: editFormData.tensp,
      loaisanpham_id: editFormData.loaisanpham_id,
      mota: editFormData.mota,
      gia: editFormData.gia,
      soluongton: editFormData.soluongton,
      hinhanh: editFormData.hinhanh,
      tacgia_id: editFormData.tacgia_id,
      nuoc_id: editFormData.nuoc_id,
      thangthaisp: editFormData.thangthaisp,
    };

    console.log(editedContact)
    if(TF){ 
      await quanlyServices.update( `sanpham/${editFormData.masp}` , editedContact);
    }else {  
      await quanlyServices.store( 'sanpham' , editedContact); 
    }
    setEditFormData({
      masp: "",
      tensp: "",
      loaisanpham_id: "",
      mota: "",
      gia: "",
      soluongton: "",
      hinhanh: "",
      tacgia_id: "",
      nuoc_id: "",
      thangthaisp: "",
    });
    const dssp = await quanlyServices.get('sanpham'); 
    dispatch(getSanPham(dssp.sanpham.data)) 
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
    if(editFormData.id==newmasp)
    {
      const sanphams = [...sanpham]; 
      const index = sanpham.findIndex((sanpham) => sanpham.id === newmasp);
      sanphams.splice(index, 1);
      dispatch(getSanPham(sanphams));
    }   
    setEditFormData({
      masp: "",
      tensp: "",
      loaisanpham_id: "",
      mota: "",
      gia: "",
      soluongton: "",
      hinhanh: "",
      tacgia_id: "",
      nuoc_id: "",
      thangthaisp: "",
    });
  };
  const handleDeleteClick = async (id) => {

  };   
  const handleADD = () => {
    setTF(false);  
    const newSP = {
      masp: newmasp,
      tensp: "",
      loaisanpham_id: "",
      mota: "",
      gia: "",
      soluongton: "",
      hinhanh: "",
      tacgia_id: "",
      nuoc_id: "",
      thangthaisp: "",
    }
    setEditFormData(newSP);
    dispatch(getSanPham([newSP, ...sanpham]))
  }
  return (
    <>
      <div className='chucnang'>
        <div className='find-seach'>
          <input className='header-input'  value={searchSP} onChange={(e)=>handleSearch(e)} type='text' placeholder='tìm kiếm...' /> 
        </div>
        <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button>
      </div>
      <Container className="feature-card">
        <Form onSubmit={handleEditFormSubmit}>
          <Table >   <thead>
            <tr>
              <th>
                Mã Sản Phẩm
              </th>
              <th>
                Tên Sản Phẩm
              </th>
              <th>
                Loại Sản Phẩm
              </th>
              <th>
                Mô Tả
              </th>
              <th>
                Giá
              </th>
              <th>
                Số Lượng Tồn
              </th>
              <th>
                Hình ảnh
              </th>
              <th>
                Tác Giả
              </th>
              <th>
                Nước Xuất Bản
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
              {sanpham.map((sanpham, index) => (editFormData.masp === sanpham.masp ?
                <EditSP
                  key={index}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                /> :
                <DataSP
                  key={index}
                  sanpham={sanpham}
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

export default SanPham;
