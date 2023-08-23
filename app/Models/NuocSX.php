<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NuocSX extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'nuocxuatban';
    protected $fillable = [
        'tennuoc'];

    public function tacGia()
    {
        return $this->hasOne(TacGia::class);
    }

    public function sanPham()
    {
        return $this->hasOne(SanPham::class);
    }

    public function scopeGetNuocSX($query)
    {
        return $query
            ->select(
                'id',
                'tennuoc'
            );
    }
}
