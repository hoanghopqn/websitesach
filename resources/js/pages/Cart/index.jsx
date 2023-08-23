import React, { useState } from "react"; 
import "./style.scss";  
import PayPalCheckout from "../../components/CartComponents/PayPalCheckout";
import ProductCart from "../../components/CartComponents/ProductCart";

function Cart() { 
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")));  
  const [tong,setTong] = useState(JSON.parse(localStorage.getItem("tongtien")));   
  return ( 
  <div className="Cart"> 
      <ProductCart cart={cart} setCart={setCart} tong={tong} setTong={setTong} /> 
        <PayPalCheckout tong={tong}/> 

</div> 
  );
}

export default Cart;