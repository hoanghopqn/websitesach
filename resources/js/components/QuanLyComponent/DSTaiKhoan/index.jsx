import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./style.scss";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import DataDSTK from "./DataDSTK";
import { getDSTaiKhoan } from "../../../Actions/sanphamActions";
import { useDispatch } from "react-redux";

function DSTaiKhoan(props) {
    const { dstaiKhoan } = props
    const dispatch = useDispatch();
    const [searchTK, setSearchTK] = useState('');
    const [saveTK, setSaveTK] = useState([]);
    const handleSearch=async (e)=>{
        setSaveTK(dstaiKhoan);
        if(e.target.value==null)
        { 
          dispatch(getDSTaiKhoan(saveTK));
        }else{ 
            setSearchTK(e.target.value);
        const result = await quanlyServices.get(`SearchDSTK/${e.target.value}`);  
        dispatch(getDSTaiKhoan(result.dstaikhoan.data));
        };
   }

    return (<>
        <div className='chucnang'>
          <div className='find-seach'>
            <input className='header-input' value={searchTK} onChange={(e)=>handleSearch(e)} type='text' placeholder='tìm kiếm...' /> 
          </div>
          {/* <button className='button-add' onClick={handleADD}><BsPlusCircle size={25} /></button> */}
        </div>
        <Container className="feature-card">
            <Table >   <thead>
                <tr>
                    <th>
                        Tài Khoản
                    </th>
                    <th>
                        Mật Khẩu
                    </th>
                    <th>
                        Mã Quyền
                    </th>
                    <th>
                        Trạng Thái
                    </th>
                    <th>
                        Chức Năng
                    </th>
                </tr>
            </thead>
                <tbody>
                    {dstaiKhoan.map((dstaiKhoan, index) => (
                        <DataDSTK dstaiKhoan={dstaiKhoan} />
                    ))}
                </tbody>
            </Table>
        </Container></>
    );
}

export default DSTaiKhoan;
