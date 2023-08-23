import React from 'react';   
import TacGia from '../TacGia'; 
import TheLoai from '../TheLoai';
import { useSelector } from 'react-redux';
import NuocSX from '../NuocSX';
function Filter(props)
{ 
  
  const initState = useSelector((state) => state.sanpham); 
  const { listTacGiaName,listTheLoaiName,listNuocSXName } = initState;     
  return (  
    <>  
    <div>
      <h2>Thể Loại</h2>
    <TheLoai nameFilter={listTheLoaiName}/>
    </div>  
    <div>
      <h2>Tác Giả</h2>
    <TacGia nameFilter={listTacGiaName}/>  
    </div>
    <div>
      <h2>Nước Sản Xuất</h2>
    <NuocSX nameFilter={listNuocSXName}/>  
    </div>
        </>
  );
}
export default Filter;
