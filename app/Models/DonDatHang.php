<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonDatHang extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'dondathang';
    protected $fillable = [
        'id',
        'khachhang_id',
        'nhanvien_id',
        'diachi',
        'sdt',
        'ghichu',
        'thangthai',
        'tongtien',
        'thoigiandat'];

    public function ctddh()
    {
        return $this->hasMany(CTDDH::class);
    }
    public function khachHang()
    {
        return $this->belongsTo(KhachHang::class);
    }
    public function nhanVien()
    {
        return $this->belongsToMany(NhanVien::class);
    }
    public function scopeGetDonDatHang($query)
    {

        return $query
            ->leftJoin('khachhang', 'khachhang.id', '=', 'dondathang.khachhang_id')
            ->leftJoin('nhanvien', 'nhanvien.id', '=', 'dondathang.nhanvien_id')
            ->select(
                'dondathang.id',
                'dondathang.khachhang_id',
                'dondathang.nhanvien_id',
                'khachhang.hoten', 
                'dondathang.diachi',
                'dondathang.sdt',
                'dondathang.ghichu',
                'dondathang.thangthai',
                'dondathang.tongtien',
                'dondathang.thoigiandat'
            );
    }
}
