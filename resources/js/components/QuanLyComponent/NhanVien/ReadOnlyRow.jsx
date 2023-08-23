import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsFileArrowUpFill } from "react-icons/bs";

const ReadOnlyRow = ({ nhanvien, handleEditClick, handleDeleteClick }) => {

  return (
    <tr>
      <td scope="row">
        {nhanvien.id}
      </td>
      <td>
        {nhanvien.hoten}
      </td>
      <td>  {nhanvien.sdt}</td>
      <td>    {nhanvien.diachi}</td>
      <td>{nhanvien.ngaysinh}</td>
      <td>{nhanvien.ngayvaolam}</td>
      <td>{nhanvien.email}</td>
      <td>{nhanvien.taikhoan}</td>
      <td>{nhanvien.hinhanh}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, nhanvien)}
        >
          <BsFileArrowUpFill />
        </button>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, nhanvien)}
        >
          <AiOutlineEdit />
        </button>
        <button type="button" onClick={() => handleDeleteClick(nhanvien.id)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
