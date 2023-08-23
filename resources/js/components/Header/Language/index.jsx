import React from "react"; 
import './style.scss'
import {AiOutlineDown} from "react-icons/ai";

function Language({handleClick,handleBlur,Hide,setHide}) {
     
    return ( 
        <li className='language' onClick={()=>setHide({...Hide,language:!Hide.language})}  > 
        <div className='text-action'><p>{Hide.Country}</p></div>
        <div className='icon-action'><AiOutlineDown /> </div>
        <div className='page-language' style={Hide.language?{display:'none'}:{display:'block'}}  >
          <div className='language-menu'>  <div className={Hide.Country==='VN'?'language-button active':'language-button'} onClickCapture={()=>setHide({...Hide,Country:'VN'})}><p>VN</p></div></div>
          <div className='language-menu'>  <div className={Hide.Country==='ENG'?'language-button active':'language-button'} onClickCapture={()=>setHide({...Hide,Country:'ENG'})}><p>ENG</p></div></div> </div> 
          </li>
    );
}

export default Language;
