<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nivo extends Model
{
    use HasFactory;

    protected $table = 'nivo';

    protected $fillable = [
        'naziv_nivoa',
    ];

    public function radnici()
    {
        return $this->hasMany(Radnik::class);
    }
}
