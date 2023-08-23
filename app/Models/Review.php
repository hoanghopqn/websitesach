<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'review';
    protected $fillable = [
        'id',
        'masp',
        'review_title',
        'review_details',
        'review_date',
        'rating_start'];

    public function Sanpham()
    {
        return $this->belongsToMany(SanPham::class, 'masp', 'masp');
    }
    public function scopeGetReview($query)
    {
        return $query
            ->select(
                'review.id',
                'review.masp',
                'review.review_title',
                'review.review_details',
                'review.review_date',
                'review.rating_start'
            )
            ->groupBy(
                'review.id',
                'review.masp',
                'review.review_title',
                'review.review_details',
                'review.review_date',
                'review.rating_start'
            );
    }

}
