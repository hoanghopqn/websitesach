import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataCTDDH = ({ ctddh,index }) => {

  return (

    <tr key={index}>
    <td scope="row">
      {index}
    </td>
      <td scope="row">
        {ctddh.masp}
      </td>
      <td>
        {ctddh.ddh_id}
      </td>
      <td>
        {ctddh.soluong}
      </td>
      <td>
        {ctddh.dongia}
      </td>
      <td>
        <button
          type="button"
        >
          <AiOutlineEdit />
        </button>
        <button type="button" >
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataCTDDH;
