import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataSP = ({ sanpham, handleEditClick, handleDeleteClick }) => {

  return (

    <tr>
      <td scope="row">
        {sanpham.masp}
      </td>
      <td>
        {sanpham.tensp}
      </td>
      <td>
        {sanpham.tenloaisp}
      </td>
      <td>
        {sanpham.mota}
      </td>
      <td>
        {sanpham.gia}
      </td>
      <td>
        {sanpham.soluongton}
      </td>
      <td>
        {sanpham.hinhanh}
      </td>
      <td>
        {sanpham.tentacgia}
      </td>
      <td>
        {sanpham.tennuoc}
      </td>
      <td>
        {sanpham.thangthaisp}
      </td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, sanpham)}
        >
          <AiOutlineEdit />
        </button>
        <button type="button" onClick={() => handleDeleteClick(sanpham.masp)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataSP;
