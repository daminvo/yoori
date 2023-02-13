<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TopSellerResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                    => $this->id,
            'slug'                  => $this->slug,
            'logo'                  => $this->image_197x152,
            'banner'                => $this->image_1920x412,
            'rating'                => round($this->rating_count,2),
            'total_reviews'         => (int)$this->reviews_count,
            'shop_name'             => $this->shop_name,
        ];
    }
}
