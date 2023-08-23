import React, { useState } from "react";
import { Container, Table, Form } from "react-bootstrap";
import "./style.scss";
import DataNuoc from "./DataNuoc";
import EditNuoc from "./EditNuoc";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDSTaiKhoan, getKhachHang, getNuoc } from "../../../Actions/sanphamActions";

function NuocXuatBan(props) {
  const { nuoc } = props;
  const [TF, setTF] = useState(true);
  const [searchN, setSearchN] = useState('');
  const dispatch = useDispatch();
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "", 
  }); 
  const handleSearch=async (e)=>{
    setSearchN(e.target.value)
  const result = await quanlyServices.get(`SearchN/${e.target.value}`);  
  dispatch(getNuoc(result.nuoc.data));
 }
  const handleEditClick = (event, nuoc) => {
    event.preventDefault();

    setTF(true);
    const formValues = {
      id: nuoc.id,
      name: nuoc.name,  
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = { 
      id: editFormData.id,
      tennuoc: editFormData.name,   
    };

    if (TF) {
      await quanlyServices.update(`nuoc/${editFormData.id}`, editedContact);
    } else { 
      await quanlyServices.store('nuoc', editedContact); 
    }
    setEditFormData({
      id: "",
      name: "", 
    });
    const LoadN = await quanlyServices.get('nuoc'); 
    dispatch(getNuoc(LoadN.nuocsx.data));
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
      const nuocs = [...nuoc]; 
      const index = nuoc.findIndex((nuoc) => nuoc.id === ' ');
      nuocs.splice(index, 1);
      dispatch(getNuoc(nuocs));
    }  
    setEditFormData({
      id: "",
      name: "", 
    });
  };
  const handleDeleteClick = async (id) => {

    
  };

  const handleADD = () => { 
    setTF(false);
    const newN = {
      id: " ",
      name: "", 
    }
    setEditFormData(newN);
    dispatch(getNuoc([newN, ...nuoc]));
     
  }
  return (
    <>
      <div className='chucnang'>
        <div className='find-seach'>
          <input className='header-input'  value={searchN} onChange={(e)=>handleSearch(e)} type='text' placeholder='tìm kiếm...' /> 
        </div>
        <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button>
      </div>
      <Container className="feature-card">
        <Form onSubmit={handleEditFormSubmit}>
          <Table >   <thead>
            <tr>
              <th>
                Mã Nước
              </th>
              <th>
                Tên Nước
              </th> 
              <th>
                Chức Năng
              </th> 
            </tr>
          </thead>
            <tbody>
              {nuoc.map((nuoc, index) => (editFormData.id === nuoc.id ?
                <EditNuoc
                  key={index}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                /> :
                <DataNuoc
                  key={index}
                  nuoc={nuoc}
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

export default NuocXuatBan;
