<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GiamGiaResource extends JsonResource
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
            
            'id'=> $this->id,	
            'masp'=> $this->masp ,	
            'tensp'=> $this->tensp,	  
            'nhanvien_id'=> $this->nhanvien_id,	
            'hoten'=> $this->hoten,	  
            'noidung'=> $this->noidung,	
            'ngaybd'=> $this->ngaybd,	
            'ngaykt'=> $this->ngaykt,
            'phantram'=> $this->phantram,	  
        ];
    }
}
