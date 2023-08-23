<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TacGia extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'tacgia';
    protected $fillable = [
        'tentacgia',
        'tieusu',
        'nuoc_id'];

    public function sanPham()
    {
        return $this->hasOne(SanPham::class);
    }
    public function nuocSX()
    {
        return $this->belongsTo(NuocSX::class);
    }
    public function scopeGetTacGia($query)
    {
        return $query
        ->leftJoin('nuocxuatban', 'nuocxuatban.id', '=', 'tacgia.nuoc_id')
            ->select(
                'tacgia.id',
                'tacgia.tentacgia',
                'tacgia.tieusu',
                'tacgia.nuoc_id',
                'nuocxuatban.tennuoc'
            )
            ->groupBy(
                'tacgia.id',
                'tacgia.tentacgia',
                'tacgia.tieusu',
                'tacgia.nuoc_id',
                'nuocxuatban.tennuoc'
            );
    }
}
