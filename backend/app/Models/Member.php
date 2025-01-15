<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
        'name',
        'job_title',
        'linkedin_url',
        'status',
    ];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
