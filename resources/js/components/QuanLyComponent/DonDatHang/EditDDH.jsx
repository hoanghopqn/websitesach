import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";

const EditDDH = ({
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
          placeholder="Enter id..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a khachhang_id..."
          name="khachhang_id"
          value={editFormData.khachhang_id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a nhanvien_id..."
          name="nhanvien_id"
          value={editFormData.nhanvien_id}
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
          placeholder="Enter a ghichu..."
          name="ghichu"
          value={editFormData.ghichu}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter a tongtien..."
          name="tongtien"
          value={editFormData.tongtien}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a thoigiandat..."
          name="thoigiandat"
          value={editFormData.thoigiandat}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a trang thai..."
          name="thangthai"
          value={editFormData.thangthai}
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

export default EditDDH;
