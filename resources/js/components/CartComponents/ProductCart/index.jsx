import React, { useState } from "react"; 
import "./style.scss";   
import { AiFillDelete } from "react-icons/ai";

function ProductCart({cart,setCart,tong,setTong}) { 
   const handlDelete=(tatol,index)=>{
    const newCart = [...cart];
    localStorage.setItem("tongtien", JSON.stringify(tong-tatol));  
    newCart.splice(index,1) ;
    console.log(newCart)
     localStorage.setItem("cart", JSON.stringify([...newCart]));   
     setCart([...newCart]);
     setTong(tong-tatol);
   }
    const handlNumber =(cartnumber,number) => {   
        const newNumber = number-cartnumber.soluong; 
        const index = cart.findIndex((cart) => cart.masp === cartnumber.masp); 
                  const newCart = [...cart];
                  localStorage.setItem("tongtien", JSON.stringify(tong+(cartnumber.gia*newNumber)));  
                 newCart[index] = {...cartnumber,soluong:number,tatol:(number*cartnumber.gia)};  
                  localStorage.setItem("cart", JSON.stringify([...newCart]));  
                  setCart([...newCart]);
                  setTong(tong+(cartnumber.gia*newNumber));
          
      }    
  return ( 
      <div className="ProductCart">
        <div className="ProductCart-title">
        <div className="boder-title">Hình Ảnh</div>
        <div className="boder-title">Tên Sản Phẩm</div>
        <div className="boder-title">Số Lượng</div>
        <div className="boder-title">Giá</div>
        <div className="boder-title">Tổng Tiền</div>
        <div className="boder-title"></div>
      </div>
      {cart?cart.map((cart, index) => {
      return ( 
      <div key={index} className="Cart-Product">
      <img alt="" src={`/images/${cart.hinhanh}.jpg`}/>
      <div className="ten">{cart.tensp}</div>
      <div className="soluong"> 
                        <div className="button-soluong">
                            <input type="button" value='+' onClick={()=>handlNumber(cart,cart.soluong+1)} /> 
                        <div className="button-number">{cart.soluong}</div>
                            <input type="button" value='-' onClick={()=>handlNumber(cart,cart.soluong-1)}/> 
                        </div>
                    </div>
      <div className="gia">{cart.gia}</div>
      <div className="tatol">{cart.tatol}</div>
     <AiFillDelete  className="delete" onClick={()=>handlDelete(cart.tatol,index)} /> 
    </div>
      );}):<div className="Cart-Product">  </div>}
      </div> 
 
  );
}

export default ProductCart;