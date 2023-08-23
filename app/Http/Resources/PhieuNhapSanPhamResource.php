<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PhieuNhapSanPhamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'maphieunhap'=> $this->maphieunhap,	
            'nhanvien_id'=> $this->nhanvien_id,
            'hoten'=> $this->hoten,
            'ngaynhap'=> $this->ngaynhap,	
            'tongtien'=> $this->tongtie 
        ];
    }
}
