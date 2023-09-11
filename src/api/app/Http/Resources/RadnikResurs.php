<?php

namespace App\Http\Resources;

use App\Models\Nivo;
use App\Models\Tim;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RadnikResurs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'ime' => $this->ime,
            'prezime' => $this->prezime,
            'broj_telefona' => $this->broj_telefona,
            'adresa' => $this->adresa,
            'nivo' => new NivoResurs(Nivo::find($this->nivo_id)),
            'tim' => new TimResurs(Tim::find($this->tim_id)),
        ];
    }
}
