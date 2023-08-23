<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GiamGia extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table='giamgia';
    protected $fillable=[
        'id',	
        'masp',	
        'nhanvien_id',	
        'noidung',	
        'ngaybd',	
        'ngaykt',
        'phantram' ];

        public function sanpham()
    {
         return $this->belongsToMany(SanPham::class);
    } 
    public function nhanVien()
    {
         return $this->belongsTo(NhanVien::class);
    }
    
    public function scopeGetGiamGia($query)
    {

        return $query 
        ->leftJoin('sanpham', 'sanpham.masp', '=', 'giamgia.masp') 
        ->leftJoin('nhanvien', 'nhanvien.id', '=', 'giamgia.nhanvien_id') 
            ->select(
                'giamgia.id',	
                'giamgia.masp',	
                'sanpham.tensp',	
                'giamgia.nhanvien_id',	
                'nhanvien.hoten',	
                'giamgia.noidung',	
                'giamgia.ngaybd',	
                'giamgia.ngaykt',
                'giamgia.phantram',	
            )
            ->groupBy(
                'giamgia.id',	
                'giamgia.masp',	
                'sanpham.tensp',	
                'giamgia.nhanvien_id',
                'nhanvien.hoten',		
                'giamgia.noidung',	
                'giamgia.ngaybd',	
                'giamgia.ngaykt',
                'giamgia.phantram',	
            );
        }
}
