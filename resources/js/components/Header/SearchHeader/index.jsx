import React, { useState } from "react"; 
import './style.scss'
import * as quanlyServices from '../../../apiServices/quanlyServices';
import {AiOutlineSearch} from "react-icons/ai"; 

function SearchHeader({handleClick,handleBlur,Hide}) {
     const [searchS,setSearchS]=useState('');
     const [dsSearchS,setDSSearchS]=useState([]);
     const handleSearch=async (e)=>{
        
        setSearchS(e.target.value)
      const result = await quanlyServices.get(`SearchDetail/${e.target.value}`);
      setDSSearchS(result.sanpham.data)
     }
    return ( 
        <div className='header-seach'> 
            <div className='input-menu'>
                <div className='find-seach'>
                    <input className='header-input' value={searchS} type='text' onChange={(e)=>handleSearch(e)} placeholder={Hide.Country==='VN'?'tìm kiếm...':'search...'} onClick={()=>handleClick('search')} onBlur={()=>handleBlur('search')}/>
                     <button className='button-seach'><AiOutlineSearch size={25} /></button> 
                 </div>
            <div className='page-seach' style={Hide.search?{display:'none'}:{display:'block'}}>
            {dsSearchS?dsSearchS.map((sach, index) => {
      return (
        <div key={index} className="cart-product"> 
            <img alt="product-image" src={`/images/${sach.hinhanh}.jpg`}/>
            <a>{sach.tensp}</a> 
            <a>Thể Loại: {sach.tenloaisp}</a> 
            <a>Tác Giả: {sach.tentacgia}</a> 
            <a>NuocwsXB: {sach.tennuoc}</a> 
            <a className="gia">{sach.gia}</a> 
        </div>
      );})
  :
  <div className="cart-product searchStyle">  </div>}
                </div> 
            </div>
        </div>
    );
}

export default SearchHeader;
