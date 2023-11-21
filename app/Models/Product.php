<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded=[];
    protected $casts = [
        'images' => 'array',
    ];

    // relacion uno a muchos
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
