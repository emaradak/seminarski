<?php

namespace Database\Seeders;

use App\Models\Radnik;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RadnikSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 100; $i++) {
            Radnik::create(
                [
                    'ime' => $faker->firstName,
                    'prezime' => $faker->lastName,
                    'tim_id' => $faker->numberBetween(1, 7),
                    'nivo_id' => $faker->numberBetween(1, 10),
                    'datum_rodjenja' => $faker->date(),
                    'adresa' => $faker->address,
                    'broj_telefona' => $faker->phoneNumber,
                ]
            );
        }
    }
}
