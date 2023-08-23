<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhachHang extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'khachhang';
    protected $fillable = [
        'hoten',
        'diachi',
        'sdt',
        'taikhoan',
        'email',
        'ngaysinh',
        'thangthai'];

    public function donDatHang()
    {
        return $this->hasMany(DonDatHang::class);
    }
    public function dsTaiKhoan()
    {
        return $this->belongsTo(DSTaiKhoan::class);
    }
    public function scopeGetKhachHang($query)
    {

        return $query
            ->select(
                'khachhang.id',
                'khachhang.hoten',
                'khachhang.diachi',
                'khachhang.sdt',
                'khachhang.taikhoan',
                'khachhang.email',
                'khachhang.ngaysinh',
                'khachhang.thangthai'
            );
    }
}
