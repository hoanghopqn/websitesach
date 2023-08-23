<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NhanVienResource extends JsonResource
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
            'sdt'=> $this->sdt,	
            'diachi'=> $this->diachi,	
            'ngaysinh'=> $this->ngaysinh,	
            'ngayvaolam'=> $this->ngayvaolam,	
            'email'=> $this->email,	
            'taikhoan'=> $this->taikhoan,	
            'hinhanh'=> $this->hinhanh,	
            'thangthai'=> $this->thangthai 
        ];
    }
}
