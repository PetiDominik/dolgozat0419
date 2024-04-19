<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Illuminate\Http\Request;

class TesztController extends Controller
{
    //

    public function index() {
        return Teszt::all();
    }

    public function getByCategory($id) {
        return Teszt::where("kategoriaId", "=", $id)->get();
    }
}
