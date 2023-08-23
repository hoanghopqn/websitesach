<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CTPNResource extends JsonResource
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
        'phieunhap_id'=> $this->phieunhap_id,	
        'masp'=> $this->masp,	
        'soluong'=> $this->soluong,	
        'dongia'=> $this->dongia 
        ];
    }
}
