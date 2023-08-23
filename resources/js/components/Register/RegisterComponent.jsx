import React, { useState } from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import * as quanlyServices from '../../apiServices/quanlyServices';
import { useNavigate } from 'react-router-dom';

 const RegisterComponent = () => {
    const [hide,setHided]=useState(false);
    const [Rhide,setRHided]=useState(false);
    let navigate = useNavigate();
    const handlHide = ()=>{
        setHided(!hide);
    }
    const handlRHide = ()=>{
        setRHided(!hide);
    }
    const {register,handleSubmit,formState:{errors},getValues}=useForm({
        mode:'onBlur'
    })
    const onSubmit =async(data)=>{ 
       const newKH = { 
        hoten: data.hoten,
        diachi: data.diachi,
        sdt: data.sdt,
        taikhoan: data.taikhoan,
        email: data.email,
        ngaysinh: data.ngaysinh,
        thangthai: 1
      };
      const createTK = {
        taikhoan: data.taikhoan,
        matkhau: data.matkhau,
        quyen_id: 2,
        thangthai: 1
      };
      await quanlyServices.store('khachhang', newKH);
      await quanlyServices.store('dstaikhoan', createTK); 
      const result = await quanlyServices.store("/login", {taikhoan: data.taikhoan, matkhau: data.matkhau});  
      localStorage.setItem("user", JSON.stringify(result.user)); 
      let path = `/`; 
      navigate(path);
    }

  return (
    <div className='form-register'>
      <div className='form-content'>
          <a className='text'>Đăng Ký</a>
        <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-group'>
                <label>Username:</label>
                <input className={errors.taikhoan&&'error-input'}  type='text' placeholder='enter taikhoan...' {...register('taikhoan',{required:true})}/>
                  {errors.taikhoan&&<p className='errors-star'>*</p>}
                  {errors.taikhoan&&<span className='errors'>username is required</span>} 
              </div>
              <div className='input-group'>
                <label>HoTen:</label>
                <input className={errors.hoten&&'error-input'}  type='text' placeholder='enter hoten...' {...register('hoten',{required:true})}/>
                  {errors.hoten&&<p className='errors-star'>*</p>}
                  {errors.hoten&&<span className='errors'>hoten is required</span>} 
              </div>
              <div className='input-group'>
                <label>DiaChi:</label>
                <input className={errors.diachi&&'error-input'}  type='text' placeholder='enter diachi...' {...register('diachi',{required:true})}/>
                  {errors.diachi&&<p className='errors-star'>*</p>}
                  {errors.diachi&&<span className='errors'>dia chi is required</span>} 
              </div>
              <div className='input-group'>
                <label>SDT:</label>
                <input className={errors.sdt&&'error-input'}  type='text' placeholder='enter sdt...' {...register('sdt',{required:true})}/>
                  {errors.sdt&&<p className='errors-star'>*</p>}
                  {errors.sdt&&<span className='errors'>sdt is required</span>} 
              </div>
              <div className='input-group'>
                <label>Email:</label>
                <input className={errors.email&&'error-input'}  type='text' placeholder='enter email...' {...register('email',{required:true})}/>
                  {errors.email&&<p className='errors-star'>*</p>}
                  {errors.email&&<span className='errors'>Email is required</span>} 
              </div>
              <div className='input-group'>
                <label>Ngày Sinh:</label>
                <input className={errors.ngaysinh&&'error-input'}  type='date' placeholder='enter ngaysinh...' {...register('ngaysinh',{required:true})}/>
                  {errors.ngaysinh&&<p className='errors-star'>*</p>}
                  {errors.ngaysinh&&<span className='errors'>ngay sinh is required</span>} 
              </div>
              <div className='input-group'>
              {!hide ?<>
                  <label>Password:</label>
                  <input className={errors.matkhau&&'error-input'} type='password' placeholder='enter matkhau...' {...register('matkhau',{required:true})} />  
                  {errors.matkhau&&<p className='errors-star'>*</p>}
                  {errors.matkhau&&<span className='errors'>matkhau is required</span>}
                  <p onClick={handlHide} className='hide-password '><BsFillEyeFill/></p>
                </>:<>
                  <label>Password:</label>
                  <input className={errors.matkhau&&'error-input'} type='text' placeholder='enter matkhau...' {...register('matkhau',{required:true})} />  
                  {errors.matkhau&&<p className='errors-star'>*</p>}
                  {errors.matkhau&&<span className='errors'>matkhau is required</span>}
                  <p onClick={handlHide} className='hide-password'><BsFillEyeSlashFill/></p>
                </>} 
              </div>
              <div className='input-group'>
              {!Rhide ?<>
                  <label>RetypePassword:</label>
                  <input className={errors.RetypePassword&&'error-input'} type='password' placeholder='enter RetypePassword...' {...register('RetypePassword',{required:true, minLength: 3,validate: (value)=>{
                            const password = getValues('matkhau');
                            if(value!==password)
                            {
                                return 'Password isi not matched';
                            }
}})} />  
                  {errors.RetypePassword&&<p className='errors-star'>*</p>}
                  {errors.RetypePassword?.type==='required'&&<span className='errors'>password is required</span>}
                  {errors.RetypePassword?.type==='minLength'&&<span className='errors'>password should be at least 3 characters</span>}
                  {errors.RetypePassword?.message&&<span className='errors'>{errors.RetypePassword?.message}</span>}
                  <p onClick={handlRHide} className='hide-password '><BsFillEyeFill/></p>
                </>:<>
                  <label>RetypePassword:</label>
                  <input className={errors.RetypePassword&&'error-input'} type='text' placeholder='enter RetypePassword...' {...register('RetypePassword',{required:true, minLength: 3,validate: (value)=>{
                            const password = getValues('matkhau');
                            if(value!==password)
                            {
                                return 'Password is not matched';
                            }
}})} />  
                  {errors.RetypePassword&&<p className='errors-star'>*</p>}
                  {errors.RetypePassword?.type==='required'&&<span className='errors'>password is required</span>}
                  {errors.RetypePassword?.type==='minLength'&&<span className='errors'>password should be at least 3 characters</span>}
                  {errors.RetypePassword?.message&&<span className='errors'>{errors.RetypePassword?.message}</span>}
                  <p onClick={handlRHide} className='hide-password'><BsFillEyeSlashFill/></p>
                </>} 
              </div> 
              <button>Register</button>
        </form>
      </div>
    </div>
  )
}
export default RegisterComponent;
