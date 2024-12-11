<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'author',
        'content',
        'status',
    ];
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
