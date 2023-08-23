import React, { useState } from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import * as quanlyServices from '../../../apiServices/quanlyServices';

const Doimatkhau = () => {
  const [hide, setHided] = useState(false);
  const [Rhide, setRHided] = useState(false);
  const [Khide, setKhide] = useState(false);
  let navigate = useNavigate();
  const handlHide = () => {
    setHided(!hide);
  }
  const handlRHide = () => {
    setRHided(!Rhide);
  }
  const handlKhide = () => {
    setKhide(!Khide);
  }
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = async (data) => {
    const user = JSON.parse(localStorage.getItem("user")); 
    const createTK = {
      taikhoan: user.taikhoan,
      matkhau: data.matkhaumoi,
      quyen_id: 2,
      thangthai: 1
    }; 
    await quanlyServices.update(`dstaikhoan/${user.taikhoan}`, createTK);   
    let path = `/`; 
    navigate(path);
    // localStorage.removeItem("user"); 
  }

  return (
    <div className='form-register'>
      <div className='form-content'>
        <a className='text'>Đổi mật khẩu</a>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-group'>
            {!Khide ? <>
              <label>Mạt Khẩu cũ:</label>
              <input className={errors.matkhaucu && 'error-input'} type='password' placeholder='enter matkhau...' {...register('matkhaucu', { required: true })} />
              {errors.matkhaucu && <p className='errors-star'>*</p>}
              {errors.matkhaucu && <span className='errors'>matkhau is required</span>}
              <p onClick={handlKhide} className='hide-password '><BsFillEyeFill/></p>
            </> : <>
              <label>Mạt Khẩu cũ:</label>
              <input className={errors.matkhaucu && 'error-input'} type='text' placeholder='enter matkhau...' {...register('matkhaucu', { required: true })} />
              {errors.matkhaucu && <p className='errors-star'>*</p>}
              {errors.matkhaucu && <span className='errors'>matkhau is required</span>}
              <p onClick={handlKhide} className='hide-password'><BsFillEyeSlashFill/></p>
            </>}
          </div>
          <div className='input-group'>
            {!hide ? <>
              <label>Mật khẩu mới:</label>
              <input className={errors.matkhaumoi && 'error-input'} type='password' placeholder='enter matkhaumoi...' {...register('matkhaumoi', {
                required: true, minLength: 3, validate: (value) => {
                  const password = getValues('matkhaucu');
                  if (value === password) {
                    return 'Mật khẩu cũ và Mật khẩu mới không được trùng nhau';
                  }
                }
              })} />
              {errors.matkhaumoi && <p className='errors-star'>*</p>}
              {errors.matkhaumoi?.type === 'required' && <span className='errors'>password is required</span>}
              {errors.matkhaumoi?.type === 'minLength' && <span className='errors'>password should be at least 3 characters</span>}
              {errors.matkhaumoi?.message && <span className='errors'>{errors.matkhaumoi?.message}</span>}
              <p onClick={handlHide} className='hide-password '><BsFillEyeFill/></p>
            </> :<>
              <label>Mật khẩu mới:</label>
              <input matkhaumoi={errors.RetypePassword && 'error-input'} type='text' placeholder='enter matkhaumoi...' {...register('matkhaumoi', {
                required: true, minLength: 3, validate: (value) => {
                  const password = getValues('matkhaucu');
                  if (value === password) {
                    return 'Password is not matched';
                  }
                }
              })} />
              {errors.matkhaumoi && <p className='errors-star'>*</p>}
              {errors.matkhaumoi?.type === 'required' && <span className='errors'>password is required</span>}
              {errors.matkhaumoi?.type === 'minLength' && <span className='errors'>password should be at least 3 characters</span>}
              {errors.matkhaumoi?.message && <span className='errors'>{errors.matkhaumoi?.message}</span>}
              <p onClick={handlHide} className='hide-password'><BsFillEyeSlashFill/></p>
            </>}
          </div>
          <div className='input-group'>
            {!Rhide ? <>
              <label>RetypePassword:</label>
              <input className={errors.RetypePassword && 'error-input'} type='password' placeholder='enter RetypePassword...' {...register('RetypePassword', {
                required: true, minLength: 3, validate: (value) => {
                  const password = getValues('matkhaumoi');
                  if (value !== password) {
                    return 'Password isi not matched';
                  }
                }
              })} />
              {errors.RetypePassword && <p className='errors-star'>*</p>}
              {errors.RetypePassword?.type === 'required' && <span className='errors'>password is required</span>}
              {errors.RetypePassword?.type === 'minLength' && <span className='errors'>password should be at least 3 characters</span>}
              {errors.RetypePassword?.message && <span className='errors'>{errors.RetypePassword?.message}</span>}
              <p onClick={handlRHide} className='hide-password '><BsFillEyeFill/></p>
            </> : <>
              <label>RetypePassword:</label>
              <input className={errors.RetypePassword && 'error-input'} type='text' placeholder='enter RetypePassword...' {...register('RetypePassword', {
                required: true, minLength: 3, validate: (value) => {
                  const password = getValues('matkhaumoi');
                  if (value !== password) {
                    return 'Password is not matched';
                  }
                }
              })} />
              {errors.RetypePassword && <p className='errors-star'>*</p>}
              {errors.RetypePassword?.type === 'required' && <span className='errors'>password is required</span>}
              {errors.RetypePassword?.type === 'minLength' && <span className='errors'>password should be at least 3 characters</span>}
              {errors.RetypePassword?.message && <span className='errors'>{errors.RetypePassword?.message}</span>}
              <p onClick={handlRHide} className='hide-password'><BsFillEyeSlashFill/></p>
            </>}
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}
export default Doimatkhau;
