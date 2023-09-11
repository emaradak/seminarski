<?php

namespace App\Http\Controllers;

use App\Http\Resources\NivoResurs;
use App\Models\Nivo;
use Illuminate\Http\Request;

class NivoController extends Controller
{
    public function index()
    {
        return NivoResurs::collection(Nivo::all());
    }

    public function show($id)
    {
        return new NivoResurs(Nivo::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'naziv_nivoa' => 'required'
        ]);

        $nivo = Nivo::create($request->all());

        return new NivoResurs($nivo);
    }

    public function update(Request $request, $id)
    {
        $nivo = Nivo::findOrFail($id);

        $nivo->update($request->all());

        return new NivoResurs($nivo);
    }

    public function destroy($id)
    {
        $nivo = Nivo::findOrFail($id);

        $nivo->delete();

        return response()->json('Nivo obrisan.');
    }

}
