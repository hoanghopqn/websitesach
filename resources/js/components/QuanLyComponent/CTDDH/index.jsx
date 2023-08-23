import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./style.scss"; 
import { useDispatch } from "react-redux";
import * as quanlyServices from '../../../apiServices/quanlyServices'; 
import DataCTDDH from "./DataCTDDH";

function CTDDH(props) {
  const { dsctddh} = props
  const dispatch = useDispatch();   
  return (
    <Container className="feature-card">
      <h3 className="ctddhtitle">Chi Tiết Đơn Đặt Hàng</h3>
      <Table >   <thead>
        <tr>
          <th>
            id
          </th>
          <th>
            Mã Sản Phẩm
          </th>
          <th>
            Mã Đơn Đặt Hàng
          </th>
          <th>
            Số Lượng
          </th>
          <th>
            Đơn Giá
          </th>
          <th>
            Chức Năng
          </th>
        </tr>
      </thead>
        <tbody>
          {dsctddh.map((ctddh, index) => (  
            <DataCTDDH
              index={index}
              ctddh={ctddh} 
            />
          ))}

        </tbody>
      </Table>
    </Container>
  );
}

export default CTDDH;
