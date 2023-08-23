<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quyen extends Model
{
    use HasFactory;
    protected $table = 'quyen';
    protected $fillable = [
        'id',
        'tenquyen'];
    public function dsTaiKhoan()
    {
        return $this->hasMany(DSTaiKhoan::class);
    }
    public function scopeGetQuyen($query)
    {
        return $query
            ->select(
                'id',
                'tenquyen'
            );
    }
}
