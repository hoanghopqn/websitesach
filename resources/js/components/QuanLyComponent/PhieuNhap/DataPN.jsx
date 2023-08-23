import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataPN = ({ phieunhap, handleEditClick, handleDeleteClick }) => {
  return (

    <tr>
      <td scope="row">
        {phieunhap.maphieunhap}
      </td>
      <td>
        {phieunhap.nhanvien_id}
      </td>
      <td>
        {phieunhap.ngaynhap}
      </td>
      <td>
        {phieunhap.tongtien}
      </td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, phieunhap)}
        >
          <AiOutlineEdit />
        </button>
        <button type="button" onClick={() => handleDeleteClick(phieunhap.maphieunhap)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataPN;
