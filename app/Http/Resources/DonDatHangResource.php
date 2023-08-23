<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CTDDHCollection;
use App\Models\CTDDH;

class DonDatHangResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
         $ctddh = new CTDDHCollection(CTDDH::where('ctddh.ddh_id', $this->id)->get());
        return [
            
            'id'=> $this->id,	
            'khachhang_id'=> $this->khachhang_id,	
            'nhanvien_id'=> $this->nhanvien_id,	
            'hoten'=> $this->hoten,	 
            'diachi'=> $this->diachi,	
            'sdt'=> $this->sdt,	
            'ghichu'=> $this->ghichu,	
            'thangthai'=> $this->thangthai,	
            'tongtien'=> $this->tongtien,	
            'thoigiandat'=> $this-> thoigiandat,
            'ctddh'=> $ctddh,
        ];
    }
}
