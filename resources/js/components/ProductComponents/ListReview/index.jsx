import React, { useState } from "react";  
import "./style.scss";
import user from '../../../../../public/images/user.jpg'
import { useSelector } from "react-redux";
import DanhGia from "../../DetailUserKhachHang/DanhGia";

function ListReview({}) {
     
    const listRV = useSelector((state) => state.sanpham.listReview.listReviewdata);
    return (
        <div className="review-content">
        <div className="review col-8">  
        {listRV.map((listRV, index) => (  
           <div className="review-detail" key={index}>
         <img className="img-user" alt="" src={`/images/user.jpg`}/>
           <div className="review-detail-title">
               <div>
               <a>{listRV.review_title}</a> 
               </div>
               <div> 
               <span>{listRV.rating_start} sao</span>
               </div>
               <div>
               <span>{listRV.review_date}</span>
               </div>
           <span className="review-detail-content">
           {listRV.review_details}
           </span> 
           </div>
       </div>
          ))}
        </div>
          <div className="review-danhgia">
            <DanhGia/>
          </div></div>
    );
}

export default ListReview;
