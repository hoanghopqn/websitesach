<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DSTaiKhoan extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table='dstaikhoan';
    protected $fillable=[
        'taikhoan',	
        'matkhau',	
        'quyen_id',
        'thangthai' ];
        
        public function quyen()
    {
         return $this->belongsTo(Quyen::class);
    }
        public function nhanVien()
        {
             return $this->hasOne(NhanVien::class);
        }
        public function khachHang()
    {
         return $this->hasOne(KhachHang::class);
    }         

        public function scopeGetDSTaiKhoan($query)
    {

        return $query 
        ->leftJoin('quyen', 'quyen.id', '=', 'dstaikhoan.quyen_id') 
            ->select(
                'dstaikhoan.taikhoan',	
                'dstaikhoan.matkhau',	
                'dstaikhoan.quyen_id',
                'quyen.tenquyen',
                'dstaikhoan.thangthai',
            ); 
        }
    
}