import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const EditGG = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  const sanpham = useSelector((state) => state.sanpham.listSanPham.listSanPhamdata);
  return (

    <tr>
      <td scope="row">
        <input
          type="text"
          required="required"
          placeholder="Enter a mã dot..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select className="select-option" name="masp" defaultValue={editFormData.masp} onChange={handleEditFormChange}>
          {sanpham.map((sanpham, index) => <option key={index} value={sanpham.maspmasp}>{sanpham.masp} - {sanpham.tensp}</option>)}
        </select>
      </td> 
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a nhanvien_id..."
          name="nhanvien_id"
          value={editFormData.hoten} 
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a noi dung..."
          name="noidung"
          value={editFormData.noidung}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a ngaybd..."
          name="ngaybd"
          value={editFormData.ngaybd}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a ngaykt..."
          name="ngaykt"
          value={editFormData.ngaykt}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phần trăm..."
          name="phantram"
          value={editFormData.phantram}
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

export default EditGG;
