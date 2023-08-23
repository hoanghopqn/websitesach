import React from "react";

const DataDSTK = (props) => {
  const { dstaiKhoan } = props;
  const {
    taikhoan,
    matkhau,
    tenquyen,
    thangthai, } = dstaiKhoan;
  return (

    <tr>
      <th scope="row">
        {taikhoan}
      </th>
      <td>
        {matkhau}
      </td>
      <td>
        {tenquyen}
      </td>
      <td>
        {thangthai}
      </td>
      <td>
        <button
          type="button"
        >
          Edit
        </button>
        <button type="button"  >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DataDSTK;
