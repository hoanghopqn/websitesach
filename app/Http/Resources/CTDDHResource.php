<?php

namespace App\Http\Resources;
use App\Models\SanPham;

use Illuminate\Http\Resources\Json\JsonResource;

class CTDDHResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    { 
        $sanpham = SanPham::where('sanpham.masp', $this->masp)->get();
        return [
            'masp'=> $this->masp,	
            'tensp'=>  $sanpham[0]->tensp,	
            'hinhanh'=>  $sanpham[0]->hinhanh,	
            'ddh_id'=> $this->ddh_id,	
            'soluong'=> $this->soluong,	
            'dongia'=> $this->dongia	 
        ];
    }
}
