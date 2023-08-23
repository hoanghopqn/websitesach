<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SanPham extends Model
{
    use HasFactory; 
    protected $table = 'sanpham';
    protected $fillable = [
        'masp',
        'tensp',
        'loaisanpham_id',
        'mota',
        'gia',
        'soluongton',
        'hinhanh',
        'tacgia_id',
        'nuoc_id',
        'thangthaisp',
    ];
    public function tacGia()
    {
        return $this->belongsTo(TacGia::class);
    }
    public function nuocSX()
    {
        return $this->belongsTo(NuocSX::class);
    }
    public function loaiSanpham()
    {
        return $this->belongsTo(LoaiSanPham::class);
    }
    public function ctddh()
    {
        return $this->belongsTo(CTDDH::class);
    }
    public function giamGia()
    {
        return $this->belongsTo(GiamGia::class);
    } 

    public function review()
    {
        return $this->hasMany(Review::class, 'masp', 'masp');
    }
    public function ctpn()
    {
        return $this->hasMany(CTPN::class);
    }
 

    public function scopeGetDetail($query)
    {

        return $query
            ->leftJoin('loaisanpham', 'loaisanpham.id', '=', 'sanpham.loaisanpham_id') 
            ->leftJoin('giamgia', 'giamgia.masp', '=', 'sanpham.masp')
            ->leftJoin('nuocxuatban', 'nuocxuatban.id', '=', 'sanpham.nuoc_id')
            ->leftJoin('tacgia', 'tacgia.id', '=', 'sanpham.tacgia_id') 
            ->leftJoin('review', 'review.masp', '=', 'sanpham.masp')
            ->select(
                'sanpham.masp',
                'sanpham.tensp',
                'loaisanpham.tenloaisp',
                'sanpham.mota',
                'sanpham.gia',
                'sanpham.soluongton',
                'sanpham.hinhanh',
                'sanpham.loaisanpham_id',
                'sanpham.tacgia_id',
                'tacgia.tentacgia', 
                'sanpham.thangthaisp',
                'sanpham.nuoc_id',
                'nuocxuatban.tennuoc',
                'giamgia.ngaybd',
                'giamgia.ngaykt',
                'giamgia.phantram',
                'review.rating_start',
            )
            ->groupBy(
                'sanpham.masp',
                'sanpham.tensp',
                'loaisanpham.tenloaisp',
                'sanpham.mota',
                'sanpham.gia',
                'sanpham.soluongton',
                'sanpham.loaisanpham_id',
                'sanpham.hinhanh',
                'sanpham.thangthaisp',
                'sanpham.tacgia_id',
                'tacgia.tentacgia',
                'sanpham.nuoc_id',
                'nuocxuatban.tennuoc',
                'sanpham.nuoc_id',
                'giamgia.ngaybd',
                'giamgia.ngaykt',
                'giamgia.phantram',
                'review.rating_start',
            );
    }

    //giảm dần theo chiết khấu
    public function scopeSupPrice($query, $sort)
    {
        return  $query->orderByRaw('CASE
        WHEN (giamgia.ngaykt IS NULL AND DATE(NOW()) >= giamgia.ngaybd) AND giamgia.ngaybd IS NOT NULL THEN (sanpham.gia*giamgia.phantram)/100
        WHEN (giamgia.ngaykt IS NOT NULL AND ( DATE(NOW()) >= giamgia.ngaybd AND DATE(NOW()) <= giamgia.ngaykt ) ) AND giamgia.ngaybd IS NOT NULL THEN (sanpham.gia*giamgia.phantram)/100
        ELSE 0
        END ' . $sort);
    }

    // //tăng dần theo giá thực
    public function scopePrice($query, $priceF)
    {
        return $query->orderByRaw('((100-giamgia.phantram) * sanpham.gia / 100) ' . $priceF);
    }
    public function scopeAvgStarts($query)
    {
        return $query->orderByRaw('COALESCE(AVG(CAST(review.rating_start as INT)), 0) desc');
    }
    public function scopeCountStars($query)
    {
        return $query->orderByRaw('COUNT(CAST(review.rating_start as INT)) desc');
    }

}
