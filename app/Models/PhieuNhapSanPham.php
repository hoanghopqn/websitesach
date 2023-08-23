<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhieuNhapSanPham extends Model
{
    use HasFactory;
    protected $table = 'phieunhapsanpham';
    protected $fillable = [
        'maphieunhap',
        'nhanvien_id',
        'ngaynhap',
        'tongtien'];
    public function ctpn()
    {
        return $this->hasMany(CTPN::class);
    }

    public function nhanVien()
    {
        return $this->belongsTo(NhanVien::class);
    }

    public function scopeGetPhieuNhapSanPham($query)
    {

        return $query
            ->leftJoin('nhanvien', 'nhanvien.id', '=', 'phieunhapsanpham.nhanvien_id')
            ->select(
                'phieunhapsanpham.maphieunhap',
                'phieunhapsanpham.nhanvien_id',
                'nhanvien.hoten',
                'phieunhapsanpham.ngaynhap',
                'phieunhapsanpham.tongtien'
            )  ->groupBy(
                'phieunhapsanpham.maphieunhap',
                'phieunhapsanpham.nhanvien_id',
                'nhanvien.hoten',
                'phieunhapsanpham.ngaynhap',
                'phieunhapsanpham.tongtien'
            );
    }
}
