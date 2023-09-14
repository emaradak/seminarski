<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Radnik extends Model
{
    use HasFactory;

    protected $table = 'radnik';

    protected $fillable = [
        'ime',
        'prezime',
        'tim_id',
        'nivo_id',
        'adresa',
        'broj_telefona',
    ];

    public function tim()
    {
        return $this->belongsTo(Tim::class);
    }

    public function nivo()
    {
        return $this->belongsTo(Nivo::class);
    }
}
