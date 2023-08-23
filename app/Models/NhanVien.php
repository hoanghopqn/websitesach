<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NhanVien extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table='nhanvien';
    protected $fillable=[ 
        'hoten',	
        'sdt',	
        'diachi',	
        'ngaysinh',	
        'ngayvaolam',	
        'email',	
        'taikhoan',	
        'hinhanh',	
        'thangthai'	];
        public function giamGia()
    {
         return $this->hasOne(GiamGia::class);
    }
        
    public function donDatHang()
        {
             return $this->hasMany(DonDatHang::class);
        }
    public function dsTaiKhoan()
    {
         return $this->belongsTo(DSTaiKhoan::class);
    }

        public function scopeGetNhanVien($query)
        {
    
            return $query
                ->leftJoin('dstaikhoan', 'dstaikhoan.taikhoan', '=', 'nhanvien.taikhoan') 
                ->select(
                    'nhanvien.id',	
                    'nhanvien.hoten',	
                    'nhanvien.sdt',	
                    'nhanvien.diachi',	
                    'nhanvien.ngaysinh',	
                    'nhanvien.ngayvaolam',	
                    'nhanvien.email',	
                    'nhanvien.taikhoan',	
                    'nhanvien.hinhanh',	
                    'nhanvien.thangthai'
                );
        }
 
}
