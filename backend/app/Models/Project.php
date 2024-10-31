<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillabe = [
        'title',
        'slug',
        'short_desc',
        'content',
        'status',
        'construction_type',
        'sector',
        'location',
    ];
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
