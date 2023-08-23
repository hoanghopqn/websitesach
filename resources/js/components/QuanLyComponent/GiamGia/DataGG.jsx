import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataGG = ({ giamgia, handleEditClick, handleDeleteClick }) => {

  return (

    <tr>
      <td scope="row">
        {giamgia.id}
      </td>
      <td>
        {giamgia.tensp}
      </td>
      <td>
        {giamgia.hoten}
      </td>
      <td>
        {giamgia.noidung}
      </td>
      <td>
        {giamgia.ngaybd}
      </td>
      <td>
        {giamgia.ngaykt}
      </td>
      <td>
        {giamgia.phantram}
      </td>
      <td> 
        <button
          type="button"
          onClick={(event) => handleEditClick(event, giamgia)}
        >
          <AiOutlineEdit />
        </button>
        <button type="button" onClick={() => handleDeleteClick(giamgia.madot)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataGG;
