import React from "react";
import { AiOutlineDelete, AiOutlineEdit,AiOutlineBars } from "react-icons/ai";

const DataDDH = ({ dondathang, handleEditClick, handleCTDDHClick ,nameTT}) => {
  return (

    <tr>
      <td scope="row" >
        {dondathang.id}
      </td>
      <td>
        {dondathang.hoten}
      </td>
      <td>
        {dondathang.nhanvien_id}
      </td>
      <td>
        {dondathang.diachi}
      </td>
      <td>
        {dondathang.sdt}
      </td>
      <td>
        {dondathang.ghichu}
      </td>
      <td>
        {dondathang.tongtien}
      </td>
      <td>
        {dondathang.thoigiandat}
      </td>
      <td>
        {dondathang.thangthai}
      </td>

      <td>
        <button className="button-ctddh"
          type="button"
          onClick={() => handleCTDDHClick(dondathang.id)}
        >
         <AiOutlineBars/>
        </button>
        {nameTT===1&&<><button className="button-duyet"
          type="button"
          onClick={(event) => handleEditClick(event, dondathang,2)}
        >
         Duyệt
        </button>
        <button className="button-tuchoi" type="button" onClick={(event) => handleEditClick(event, dondathang,0)}> 
        Từ Chối
        </button></>}
        {nameTT===2&&<button className="button-duyet"
          type="button"
          onClick={(event) => handleEditClick(event, dondathang,3)}
        >
         Đã Giao
        </button>}  
        {nameTT===0&&<button className="button-duyet"
          type="button"
          onClick={(event) => handleEditClick(event, dondathang,1)}
        >
         Khôi Phục
        </button>}
      </td>
    </tr>
  );
};

export default DataDDH;
