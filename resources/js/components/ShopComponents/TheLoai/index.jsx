import React, { useState } from 'react'; 
import CheckBox from '../CheckBox';
import { CheckContext } from '../CheckContext';  
function TheLoai(props)
{ 
  const {nameFilter}=props;  
   
    const slides = nameFilter.map((nameFilter,index) => {
      return (
        <div key={index}>
        <CheckBox nameFilter={nameFilter}/>
        </div>
      );
  });
  
  return (  
    <> 
             {slides} 
        </>
  );
}
export default TheLoai;
