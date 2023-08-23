import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";

const EditKH = ({
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
          placeholder="Enter a mã khách hàng..."
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
          name="hoten"
          value={editFormData.hoten}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a dia chi..."
          name="diachi"
          value={editFormData.diachi}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a sdt..."
          name="sdt"
          value={editFormData.sdt}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a taikhoan..."
          name="taikhoan"
          value={editFormData.taikhoan}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a ngaysinh..."
          name="ngaysinh"
          value={editFormData.ngaysinh}
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

export default EditKH;
