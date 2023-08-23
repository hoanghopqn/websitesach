import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";

const EditNuoc = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  return (

    <tr>
      <td scope="row">
        <input
          type="text"
          required="required"
          placeholder="Enter a mã nuoc..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Họ Tên..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td> 
      <td>
        <button type="submit"><AiOutlineSave /></button>
        <button type="button" onClick={handleCancelClick}>
          <AiFillCloseCircle />
        </button>
      </td>
        
    </tr>
  );
};

export default EditNuoc;
