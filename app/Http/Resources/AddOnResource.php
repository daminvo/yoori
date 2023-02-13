<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AddOnResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'name'                  => $this->name,
            'addon_identifier'      => $this->addon_identifier,
            'purchase_code'         => $this->purchase_code,
            'version'               => $this->version,
            'status'                => (bool)$this->status,
            'image'                 => $this->image ? get_media($this->image) : static_asset('images/default/default-image-40x40.png'),
        ];
    }
}
