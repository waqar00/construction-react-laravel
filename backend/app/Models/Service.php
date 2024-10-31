<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\morphOne;

class Service extends Model
{
    protected $fillabe = [
        'title',
        'slug',
        'short_desc',
        'content',
        'status',
    ];
    public function image(): morphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    // protected function slug(): Attribute
    // {
    //     //  $value= $this->attributes['title'];
    //     // return Attribute::make(
    //     //     set: fn (string $value) => Str::slug($value),
    //     // );
    // }
}
