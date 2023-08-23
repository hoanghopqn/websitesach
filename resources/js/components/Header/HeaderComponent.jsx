import React, { useState } from 'react'
import './style.scss' 
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Shop from './Shop';
import Language from './Language'; 
import User from './User'; 
import SearchHeader from './SearchHeader';

 const HeaderComponent = () => {
    const [Hide,setHide]=useState({
        search: true,
        menu:true,
        user:true,
        bell:true,
        language:true,
        Country: 'VN' 
    }); 
    const [login,setLogin]=useState({}); 
    const handleClick=(name)=>{
        setHide({...Hide,[name]:false})
    }
    const handleBlur=(name)=>{
        setHide({...Hide,[name]:true})
    }  
  return (
    <header className='header'>
        <div className='header-contain'>
            <div className='header-title'> 
                  <Link className='title' to='/'>NewShop</Link> 
            </div>  
       
            <SearchHeader handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} />
        <div className='header-action'>
            <ul> 
                <Shop handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} />
                <Cart handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} />
                <User handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} /> 
                <Language handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} setHide={setHide}/>
            </ul>
        </div>
        </div>
    </header>
  )
}
export default HeaderComponent;
