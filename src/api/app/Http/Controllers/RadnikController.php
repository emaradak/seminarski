<?php

namespace App\Http\Controllers;

use App\Http\Resources\RadnikResurs;
use App\Models\Radnik;
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
            'datum_rodjenja' => 'required',
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

}
