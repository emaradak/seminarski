<?php

namespace App\Http\Controllers;

use App\Http\Resources\RadnikResurs;
use App\Models\Radnik;
use App\Models\Tim;
use Illuminate\Http\Request;

class RadnikController extends Controller
{
    public function index()
    {
        return RadnikResurs::collection(Radnik::all());
    }

    public function show($id)
    {
        return new RadnikResurs(Radnik::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'ime' => 'required',
            'prezime' => 'required',
            'broj_telefona' => 'required',
            'adresa' => 'required',
            'nivo_id' => 'required',
            'tim_id' => 'required',
        ]);

        $radnik = Radnik::create($request->all());

        return new RadnikResurs($radnik);
    }

    public function update(Request $request, $id)
    {
        $radnik = Radnik::findOrFail($id);

        $radnik->update($request->all());

        return new RadnikResurs($radnik);
    }

    public function destroy($id)
    {
        $radnik = Radnik::findOrFail($id);

        $radnik->delete();

        return response()->json('Radnik obrisan.');
    }

    public function radniciPoTimu(){
        $radnici = Radnik::all();
        $radniciPoTimu = [];
        foreach($radnici as $radnik){
            $nazivTima = Tim::find($radnik->tim_id)->naziv_tima;
            if(!array_key_exists($nazivTima, $radniciPoTimu)){
                $radniciPoTimu[$nazivTima] = 1;
            }else {
                $radniciPoTimu[$nazivTima]++;
            }

        }
        return $radniciPoTimu;
    }

    public function qod(){
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://evilinsult.com/generate_insult.php?lang=en&type=json");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);

        echo $output;
    }

}
