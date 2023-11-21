<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        if ($this->resource === null) {
            //abort(404);
            return [
                'success' => false,
                'status' => 404,
                'message' => 'Product not found',
            ];

        }

        return [
            'success' => true,
            'status' => 200,
            'data' => [
                'id'=> $this->id,
                'title' => $this->title,
                'price' => $this->price,
                'description' => $this->description,
                'category' => Category::find($this->category_id),
                'images' => $this->images,
            ],
        ];
    }
}
