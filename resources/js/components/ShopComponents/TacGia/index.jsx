import React from 'react'; 
import CheckboxTG from '../CheckboxTG'; 
function TacGia(props)
{ 
  
  const {nameFilter}=props;  
   
    const slides = nameFilter.map((nameFilter,index) => {
      return (
        <div key={index}>
        <CheckboxTG nameFilter={nameFilter}/>
        </div>
      );
  });  
  return (  
    <> 
             {slides} 
        </>
  );
}
export default TacGia;
