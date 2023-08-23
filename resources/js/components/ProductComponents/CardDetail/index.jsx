import React, { useState } from "react";
import "./style.scss";  
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CardDetail(props) { 
    
    const cardDetail = useSelector((state) => state.sanpham.detailSanPham);  
    const [Number,seteNumber]=useState(1);
    const {
        masp,
        tensp,
        gia,
        hinhanh,
        soluongton,
        tentacgia,
        tennuoc,
    } = cardDetail;
    let navigate = useNavigate(); 
    const handlAddCart =() => { 
        const cart = JSON.parse(localStorage.getItem("cart")); 
        const tong = JSON.parse(localStorage.getItem("tongtien")); 
        if(cart==null)  { 
            localStorage.setItem("tongtien", JSON.stringify(gia*Number)); 
            localStorage.setItem("cart", JSON.stringify([{...cardDetail,soluong:Number,tatol:(Number*gia)}])); 
        }else{
            const index = cart.findIndex((cart) => cart.masp === masp); 
            if(index===-1){  
                localStorage.setItem("tongtien", JSON.stringify(tong+(gia*Number))); 
                localStorage.setItem("cart", JSON.stringify([...cart,{...cardDetail,soluong:Number,tatol:(Number*gia)}])); 
            }
            else{ 
                    const newNumber = Number+cart[index].soluong;
                    const newCart = [...cart];
                    localStorage.setItem("tongtien", JSON.stringify(tong+(gia*Number)));   
                    newCart[index] = {...cart[index],soluong:newNumber,tatol:(newNumber*gia)};
                    localStorage.setItem("cart", JSON.stringify([...newCart]));  
            }
        }   
        // console.log(cart);
        // console.log(tong);
        // localStorage.removeItem("cart"); 
        // localStorage.removeItem("tongtien"); 
    } 
    const handlMuaCart =() => { 
        handlAddCart();
        let path = `/cart`; 
        navigate(path);

        }   
    const urlimage = hinhanh ? `/images/${hinhanh}.jpg` : '/images/default-image.jpg' 
    return (
        <div className="Single-cardbook">
            <div className="main-cardbook">
                <div className="header-cardbook">
                    <div className="image-cardbook">
                        <img alt="" src={urlimage} />
                    </div>
                </div>
                <div className="body-cardbook">
                    <div className="cardbook-title">
                        <h1>{tensp}</h1>
                    </div>
                    <div className="cardbook-tentacgia">
                        <label>Tác Giả: </label>
                        <a>{tentacgia}</a> 
                    </div>
                    <div className="cardbook-tennuoc">  
                        <label>Nước Xuất Bản: </label>
                        <a>{tennuoc}</a> 
                    </div>
                    <div className="cardbook-gia"> 
                        <label>Giá: </label>
                        <a>{gia}</a>
                    </div>
                    {soluongton?<div className="cardbook-gia"> 
                        <label>Số Lượng Tồn: </label>
                        <a>{soluongton}</a>
                    </div>:<div className="cardbook-hang"> 
                        <label>Số Lượng Tồn: </label>
                        <label> Hết Hàng </label> 
                    </div>}
                    <div className="cardbook-soluong"> 
                        <a >Số Lượng: </a>
                        <div className="button-soluong">
                            <input type="button" value='-' onClick={()=>seteNumber(Number-1)} /> 
                        <div className="button-number">{Number}</div>
                            <input type="button" value='+' onClick={()=>seteNumber(Number+1)}/> 
                        </div>
                    </div>
                    <div className="button-cardbook">
                        <button className="add-cart" onClick={handlAddCart}>Thêm vào Giỏ Hàng</button>
                        <button className="mua-cart" onClick={handlMuaCart}>Mua Ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;
