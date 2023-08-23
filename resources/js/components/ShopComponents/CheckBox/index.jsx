import React, { useContext } from 'react';
import { Button } from 'reactstrap';

import { TiTick } from "react-icons/ti";
import "./style.scss";  
import { useDispatch,useSelector } from 'react-redux';
import { filterByTheLoai } from '../../../Actions/sanphamActions'; 
function CheckBox({nameFilter})
{  
    
  const dispatch = useDispatch();  
    const {id,name}=nameFilter; 
  
    const initState = useSelector((state) => state.sanpham.filter.theloai);  
    const onCheckboxBtnClick = (selected) => {
      const index = initState.indexOf(selected);
      if (index < 0) {
        dispatch(filterByTheLoai([...initState,selected])); 
      } else {
        initState.splice(index, 1);
        dispatch(filterByTheLoai([...initState]));
      } 
    };
  return (  
        <div className='checkbox'> 
        <Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(id)}
          active={initState.includes(id)}
        ><TiTick className={initState.includes(id)?'icon coloricon':'icon'}/>
        </Button>
         <a>{name} </a>
        </div>
        
          
  );
}
export default CheckBox;
