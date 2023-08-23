<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TacGiaResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->tentacgia,
            'tieusu' => $this->tieusu,
            'nuoc_id' => $this->nuoc_id,
            'tennuoc' => $this->tennuoc,
        ];
    }
}
