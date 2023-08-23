<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DSTaiKhoanResource extends JsonResource
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
            
            'taikhoan'=> $this->taikhoan,	
            'matkhau'=> $this->matkhau,	
            'quyen_id'=> $this->quyen_id,
            'tenquyen'=> $this->tenquyen,
            'thangthai'=> $this->thangthai, 
        ];
    }
}
