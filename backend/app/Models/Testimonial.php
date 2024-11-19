<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillabe = [
        'testimonial',
        'citation',
        'status',
    ];
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
