<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoaiSanPham extends Model
{
    use HasFactory;
    protected $table='loaisanpham';
    protected $fillable=[
        'id',	
        'tenloaisp'];
    public function ctgg()
        {
             return $this->hasMany(CTGG::class);
        }  
    public function sanPham()
            {
                 return $this->hasMany(SanPham::class);
            } 

    
    public function scopeGetLoaiSanPham($query) {
        return $query
                ->select(
                        'id',
                        'tenloaisp'
                    );
            }
}
