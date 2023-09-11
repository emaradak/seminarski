<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NivoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $nivoi = [
            'Junior',
            'Senior',
            'Expert',
            'Master',
            'CEO',
            'CTO',
            'COO',
            'CFO',
            'CIO',
            'CMO'
        ];

        foreach ($nivoi as $nivo) {
            \App\Models\Nivo::create(
                [
                    'naziv_nivoa' => $nivo,
                ]
            );
        }
    }
}
