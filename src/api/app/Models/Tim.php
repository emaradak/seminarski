<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tim extends Model
{
    use HasFactory;

    protected $table = 'tim';

    protected $fillable = [
        'naziv_tima',
    ];

    public function radnici()
    {
        return $this->hasMany(Radnik::class);
    }
}
