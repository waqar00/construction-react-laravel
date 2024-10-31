<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Image extends Model
{
    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }

    // protected function url(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn (string $value) => public_path('iamges/services/'.$value),
    //     );
    // }

}
