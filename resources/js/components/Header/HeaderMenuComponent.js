import React from 'react'
import './style.scss'

 const HeaderMenuComponent = () => {
  return (
    <div className='menu-contain'>
      <div className='catalogy-menu'>
        <p className='catalogy-title'>Danh Mục Sản Phẩm</p>
        <div className='catalogy'>
          <p className='catalogy-name'>Sach Trong Nuoc</p>
          <p className='catalogy-name'> Do Choi</p>
          <p className='catalogy-name'> Bach khoa online</p>
          <p className='catalogy-name'>Hành trang đến trường</p>
          <p className='catalogy-name'>Dụng cụ học sinh</p>
        </div>
      </div>
      <hr/>
      <div className='catalogy-product'>
      <p className='product-title'>Danh Mục Sản Phẩm</p>
        <div className='product'>
          <p className='product-name'>Sach Trong Nuoc</p>
          <p className='product-name'> Do Choi</p>
          <p className='product-name'> Bach khoa online</p>
          <p className='product-name'>Hành trang đến trường</p>
          <p className='product -name'>Dụng cụ học sinh</p>
        </div> 
        <div className='product'>
          <p className='product-name'>Sach Trong Nuoc</p>
          <p className='product-name'> Do Choi</p>
          <p className='product-name'> Bach khoa online</p>
          <p className='product-name'>Hành trang đến trường</p>
          <p className='product -name'>Dụng cụ học sinh</p>
        </div>
        </div>
    </div>
  )
}
export  default HeaderMenuComponent;
