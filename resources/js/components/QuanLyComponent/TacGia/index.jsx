import React, { useState } from "react";
import { Container, Table, Form } from "react-bootstrap";
import "./style.scss";
import DataTG from "./DataTG";
import EditTG from "./EditTG";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDSTaiKhoan, getKhachHang, getTacGia } from "../../../Actions/sanphamActions";

function TacGia(props) {
  const { tacgia } = props;
  const [TF, setTF] = useState(true);
  const [searchTG, setSearchTG] = useState(''); 
  const dispatch = useDispatch();
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    tieusu: "",
    nuoc_id : "", 
    tennuoc : "", 
  });
  const handleSearch=async (e)=>{
    setSearchTG(e.target.value)
  const result = await quanlyServices.get(`SearchTG/${e.target.value}`);  
  dispatch(getTacGia(result.tacgia.data));
 }
  const handleEditClick = (event, tacgia) => {
    event.preventDefault(); 
    setTF(true);
    const formValues = {
      id: tacgia.id,
      name: tacgia.name, 
      tieusu: tacgia.tieusu,
      nuoc_id : tacgia.nuoc_id , 
      tennuoc : tacgia.tennuoc , 
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = { 
      id: editFormData.id,
      tentacgia: editFormData.name, 
      tieusu: editFormData.tieusu,
      nuoc_id : editFormData.nuoc_id ,  
    };
    if(TF) {
      await quanlyServices.update(`tacgia/${editFormData.id}`, editedContact);
    } else { 
      await quanlyServices.store('tacgia', editedContact); 
    }
    setEditFormData({
      id: "",
      tentacgia: "",
      tieusu: "",
      nuoc_id : "", 
    });
    const LoadKH = await quanlyServices.get('tacgia'); 
    dispatch(getTacGia(LoadKH.tacgia.data)); 
     
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
      const tacgias = [...tacgia]; 
      const index = tacgia.findIndex((tacgia) => tacgia.id === ' ');
      tacgias.splice(index, 1);
      dispatch(getTacGia(tacgias));
    }   
    setEditFormData({
      id: "",
      name: "",
      tieusu: "",
      nuoc_id : "", 
      tennuoc : "", 
    });
  };
  const handleDeleteClick = async (id) => {

    
  };

  const handleADD = () => {
     
    setTF(false);
    const newTG = {
      id: " ",
      name: "",
      tieusu: "",
      nuoc_id : "", 
      tennuoc : "", 
    }
    setEditFormData(newTG);
    dispatch(getTacGia([newTG, ...tacgia]));
  }
  return (
    <>
      <div className='chucnang'>
        <div className='find-seach'>
          <input className='header-input'  value={searchTG} onChange={(e)=>handleSearch(e)} type='text' placeholder='tìm kiếm...' /> 
        </div>
        <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button>
      </div>
      <Container className="feature-card">
        <Form onSubmit={handleEditFormSubmit}>
          <Table >   <thead>
            <tr>
              <th>
                Mã Tác Ggiar
              </th>
              <th>
                Họ Tên
              </th>
              <th>
                Tiểu Sử
              </th>
              <th>
                Nước Xuất Bản
              </th> 
              <th>
                Chức Năng
              </th> 
            </tr>
          </thead>
            <tbody>
              {tacgia.map((tacgia, index) => (editFormData.id === tacgia.id ?
                <EditTG
                  key={index}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                /> :
                <DataTG
                  key={index}
                  tacgia={tacgia}
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

export default TacGia;
