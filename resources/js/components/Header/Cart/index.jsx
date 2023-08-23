import React from "react"; 
import './style.scss'
import {AiOutlineShoppingCart} from "react-icons/ai"; 
import { Link, useNavigate } from 'react-router-dom';

function Cart({handleClick,handleBlur,Hide}) { 
    const cart = JSON.parse(localStorage.getItem("cart"));    
    let navigate = useNavigate();
    const handleToCart = () => {
        let path = `/cart`; 
        navigate(path);
    } 
     

    return (
        <li onMouseMove={()=>handleClick('bell')} onMouseOut={()=>handleBlur('bell')}>
            <Link to='/cart'>    <div className='icon-action'><AiOutlineShoppingCart /> </div>
                <div className='text-action'><a href=''>{Hide.Country==='VN'?'Giỏ Hàng':'My Cart'}</a></div></Link>
                <div className='page-Cart' style={Hide.bell?{display:'none'}:{display:'block'}}>
                    <div className="product">
             {cart?cart.map((cart, index) => {
      return (
        <div key={index} className="cart-product"> 
            <img alt="product-image" src={`/images/${cart.hinhanh}.jpg`}/>
            <a>{cart.tensp}</a> 
            <a className="gia">{cart.gia}</a> 
        </div>
      );})
  :
  <div className="cart-product">  </div>}
                    <div className="cart-button"> 
                        <a>Thêm Hàng Vào Giỏ</a>
                    <button onClick={handleToCart}>Xem giỏ hàng</button>
                    </div>
                    </div>
                </div></li>
    );
}

export default Cart;
