import React from 'react'; 
import CheckboxNuoc from '../CheckboxNuoc'; 
function NuocSX(props)
{ 
   
  const {nameFilter}=props;  
   
    const slides = nameFilter.map((nameFilter,index) => {
      return (
        <div key={index}>
        <CheckboxNuoc nameFilter={nameFilter}/>
        </div>
      );
  });  
  return (  
    <> 
             {slides} 
        </>
  );
}
export default NuocSX;
