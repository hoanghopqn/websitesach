<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CTPN extends Model
{
    use HasFactory;
    protected $table = 'ctpn';
    protected $fillable = [
        'phieunhap_id',
        'masp',
        'soluong',
        'dongia'];

    public function phieuNhapSanPham()
    {
        return $this->belongsTo(PhieuNhapSanPham::class);
    }

    public function Sanpham()
    {
        return $this->belongsToMany(SanPham::class, 'masp', 'masp');
    }
    public function scopeGetCTPN($query)
    {

        return $query
            ->leftJoin('sanpham', 'sanpham.masp', '=', 'ctpn.masp')
            ->leftJoin('phieunhapsanpham', 'phieunhapsanpham.maphieunhap', '=', 'ctpn.phieunhap_id')
            ->select(
                'ctpn.phieunhap_id',
                'ctpn.masp',
                'ctpn.soluong',
                'ctpn.dongia'
            );
    }
}
