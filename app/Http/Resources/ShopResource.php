<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShopResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'title'                 => $this->title,
            'shop_name'             => $this->shop_name,
            'rating_count'          => round($this->rating_count,2),
            'reviews_count'         => (int)$this->reviews_count,
            'logo'                  => $this->image_297x203,
            'banner'                => $this->image_899x480,
            'image_90x60'           => $this->image_90x60,
            'image_82x82'           => $this->image_82x82,
            'image_617x145'         => $this->image_617x145,
        ];
    }
}
