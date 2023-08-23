import React, { useState } from 'react'; 
import './style.scss' 
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { Link } from 'react-router-dom';

function DanhGia({idloaisanpham}) { 
    const time = new Date(); 
    const getHour = time.getHours();
    const getMinute = time.getMinutes();
    const getSecond = time.getSeconds();
    const getDay = time.getDay();
    const getMonth = time.getMonth();
    const fullYear = time.getFullYear();
    const masanpham = JSON.parse(localStorage.getItem("masanpham")); 

    const [DanhGia,setDanhGia]=useState({ 
        review_title:'',
        review_details:'', 
        rating_start: '', 
    });    
    console.log(DanhGia)
    const handlSubmit=async()=>{   
        const editedContact = { 
            masp :masanpham,
            review_title:DanhGia.review_title,
            review_details:DanhGia.review_details,
            review_date:`${fullYear}-${getMonth}-${getDay} ${getHour}:${getMinute}:${getSecond}`,
            rating_start: DanhGia.rating_start, 
          };  
        await quanlyServices.store(`review`, editedContact); 
    }
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...DanhGia };
      newFormData[fieldName] = fieldValue;

      setDanhGia(newFormData);
   
    };
    return (
        <> 
        <form onSubmit={handlSubmit} >  
            <div className='danhgia-layout'>
                <label>review_title: </label>
                <input type='text' name='review_title' value={DanhGia.review_title} onChange={handleEditFormChange}/> 
            </div>
            <div className='danhgia-layout'>
                <label>review_details: </label>
                <input type='text' name='review_details' value={DanhGia.review_details} onChange={handleEditFormChange}/>
            </div> 
            <div className='danhgia-layout'>
                <label>rating_start: </label>  
        <select className="select-option" name="rating_start" defaultValue={DanhGia.rating_start} onChange={handleEditFormChange}>
           <option value='1'> 1 sao</option>
           <option value='2'>2 sao</option>
           <option value='3'>3 sao</option>
           <option  value= '4'>4 sao</option>
           <option value='5'>5 sao</option>
        </select> 
            </div> 
            <button className='danhgia-button'>Lưu</button>
        </form>
        </>
    );
}

export default DanhGia;