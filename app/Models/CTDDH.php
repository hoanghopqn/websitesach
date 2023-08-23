<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CTDDH extends Model
{
    use HasFactory;
    protected $table = 'ctddh';
    protected $fillable = [
        'masp',
        'ddh_id',
        'soluong',
        'dongia'];

    public function donDathang()
    {
        return $this->belongsTo(DonDatHang::class);
    }

    public function sanpham()
    {
        return $this->belongsTo(SanPham::class);
    }
    public function scopeGetCTDDH($query)
    {

        return $query
            ->leftJoin('dondathang', 'dondathang.id', '=', 'ctddh.ddh_id') 
            ->select(
                'ctddh.masp', 
                'ctddh.ddh_id',
                'ctddh.soluong',
                'ctddh.dongia'
            )
            ->groupBy(
                'ctddh.masp',
                'sanpham.tensp',
                'sanpham.hinhanh',
                'ctddh.ddh_id',
                'ctddh.soluong',
                'ctddh.dongia'
            );
    }
}
