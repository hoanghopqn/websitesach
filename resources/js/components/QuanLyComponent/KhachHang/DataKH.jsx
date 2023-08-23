import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataKH = ({ khachhang, handleEditClick, handleDeleteClick }) => {

  return (

    <tr>
      <td scope="row">
        {khachhang.id}
      </td>
      <td>
        {khachhang.hoten}
      </td>
      <td>
        {khachhang.diachi}
      </td>
      <td>
        {khachhang.sdt}
      </td>
      <td>
        {khachhang.taikhoan}
      </td>
      <td>
        {khachhang.email}
      </td>
      <td>
        {khachhang.ngaysinh}
      </td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, khachhang)}
        >
          <AiOutlineEdit />
        </button>
        <button type="button" onClick={() => handleDeleteClick(khachhang.id)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataKH;
