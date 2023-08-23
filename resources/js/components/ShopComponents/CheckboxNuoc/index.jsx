import React, { useContext } from 'react';
import { Button } from 'reactstrap';

import { TiTick } from "react-icons/ti";
import "./style.scss"; 
import { useDispatch, useSelector } from 'react-redux';
import { filterByNuocSX } from '../../../Actions/sanphamActions'; 
function CheckboxNuoc({nameFilter})
{  
  const nuoc_ID = useSelector((state) => state.sanpham.filter.nuocsx);
  const dispatch = useDispatch();  
    const {id,name}=nameFilter;
    
       
  return (  
        <div className='checkradio' >
        <Button
          color="red"
          outline
          onClick={() => {dispatch(filterByNuocSX(id))}}
          active={nuoc_ID === id}
        >  <TiTick className={nuoc_ID===id?'icon coloricon':'icon'}/>
        </Button>
         <a>{name} </a>
        </div>
        
          
  );
}
export default CheckboxNuoc;
