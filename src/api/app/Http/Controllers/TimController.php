<?php

namespace App\Http\Controllers;

use App\Http\Resources\TimResurs;
use App\Models\Tim;
use Illuminate\Http\Request;

class TimController extends Controller
{
    public function index()
    {
        return TimResurs::collection(Tim::all());
    }

    public function show($id)
    {
        return new TimResurs(Tim::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'naziv_tima' => 'required'
        ]);

        $tim = Tim::create($request->all());

        return new TimResurs($tim);
    }

    public function update(Request $request, $id)
    {
        $tim = Tim::findOrFail($id);

        $tim->update($request->all());

        return new TimResurs($tim);
    }

    public function destroy($id)
    {
        $tim = Tim::findOrFail($id);

        $tim->delete();

        return response()->json('Tim obrisan.');
    }
}
