import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import './style.scss'
import { Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SortFilter from '../SortFilter';
import { useDispatch } from 'react-redux';

export default function Pagination({ getFilterLimit, getFilterPage, meta }) {
  const { current_page, from, last_page, per_page, to, total, } = meta;
  const options = ['15', '20', '25', '30'];
  const handleLeft = () => {
    if (current_page !== 1) {
      const NumberPage = current_page - 1;
      dispatch(getFilterPage(NumberPage));
    }
  }
  const handleRight = () => {
    if (current_page !== last_page) {
      const NumberPage = current_page + 1;
      dispatch(getFilterPage(NumberPage));
    }
  }
  const dispatch = useDispatch();
  return (
    <div className='paginate'>
      <a className='magrin-eve'>Trang: {current_page} of {last_page}</a>
      <div className='magrin-eve'>
        <SortFilter options={options} setFilter={getFilterLimit} />
      </div>
      <a className='magrin-eve'>{from} to {to} of {total}</a>
      <Button className='magrin-eve' onClick={handleLeft}><BsChevronLeft /></Button>
      <Button className='magrin-eve' onClick={handleRight}><BsChevronRight /></Button>
    </div>
  );
}
