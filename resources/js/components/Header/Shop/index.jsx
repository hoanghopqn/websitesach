import React from "react"; 
import './style.scss'
import {AiFillShop} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

function Shop({handleClick,handleBlur,Hide}) {
      
    return ( 
        <li><Link to='/shop'>
        <div className='icon-action'  ><AiFillShop /> </div>
        <div className='text-action'>{Hide.Country==='VN'?'Cửa Hàng':'Shop'}</div> </Link>
                  </li>
    );
}

export default Shop;
