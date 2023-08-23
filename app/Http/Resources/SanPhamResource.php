<?php

namespace App\Http\Resources;

use App\Models\TacGia;
use App\Models\NuocSX;
use Illuminate\Http\Resources\Json\JsonResource;

class SanPhamResource extends JsonResource
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
            'masp'=> $this->masp,	
            'tensp'=> $this->tensp,	
            'tenloaisp'=> $this->tenloaisp,	
            'mota'=> $this->mota,	
            'gia'=> $this->gia,	
            'soluongton'=> $this->soluongton,	
            'hinhanh'=> $this->hinhanh, 	 
            'tentacgia'=>$this->tentacgia, 
            'tennuoc'=>$this->tennuoc, 
            'loaisanpham_id'=>$this->loaisanpham_id,  
            'tacgia_id'=>$this->tacgia_id, 
            'nuoc_id'=>$this->nuoc_id,
            'thangthaisp'=> $this->thangthaisp,
            'ngaybd'=> $this->ngaybd,
            'ngaykt'=> $this->ngaykt,
            'phantram'=> $this->phantram,
            'chietkhau'=> $this->phantram* $this->gia/100,
            'giagg'=> (100-$this->phantram)* $this->gia/100,
        ];
    }
}
