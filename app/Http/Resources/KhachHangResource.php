<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KhachHangResource extends JsonResource
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
            'hoten'=> $this->hoten,	
            'diachi'=> $this->diachi,	
            'sdt'=> $this->sdt,	
            'taikhoan'=> $this->taikhoan,	
            'email'=> $this->email,	
            'ngaysinh'=> $this->ngaysinh,	
            'thangthai'=> $this->thangthai 
        ];
    }
}
