<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Service extends Model
{
    public function image(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
