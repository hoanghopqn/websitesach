import React, { useState } from 'react';    
import Filter from '../../Filter';
import ShopContent from '../../ShopContent';
import "./style.scss";  
import ButtonFilter from '../../ButtonFilter';
import SortFilter from '../../../SortFilter';
import { handlePaginate, setFilterShow, setFilterSort } from '../../../../Actions/sanphamActions';
import { useSelector } from 'react-redux';
import SortFilterLink from '../../SortFilterLink';
function ShopComponent(props)
{   
  const itemSort = ['Sort by On Sale', 'Sort by Popular', 'Sort by price: low to high', 'Sort by price: high to low']
   
  const options = ['15', '20', '25', '30'];
  const sanpham = useSelector((state) => state.sanpham);  
  return (  
    <div className='shop'> 
 
<div className='filter'> 
    <Filter  />
  </div>           
  <div className='content'> 
  <ButtonFilter/> 
<div className='sort-filter'>    
      <a className='magrin-eve'>{sanpham.pagination.from} to {sanpham.pagination.to} of {sanpham.pagination.total}</a>
      <div className='sort'>
    <SortFilterLink options={itemSort} setFilter={setFilterSort} />
    <SortFilter options={options} setFilter={setFilterShow} /> </div>
  </div>   
    <ShopContent 
                BooksAll={sanpham.displaySanPham}/>
        </div>
        </div>
  );
}
export default ShopComponent;
