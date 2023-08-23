import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataNuoc = ({ nuoc, handleEditClick, handleDeleteClick }) => {

  return (

    <tr>
      <td scope="row">
        {nuoc.id}
      </td>
      <td>
        {nuoc.name}
      </td> 
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, nuoc)}
        >
          <AiOutlineEdit />
        </button>
        <button type="button" onClick={() => handleDeleteClick(nuoc.id)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataNuoc;
