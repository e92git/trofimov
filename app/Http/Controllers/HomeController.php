<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class HomeController extends Controller {

    /**
     * Показать страницу home.
     *
     * @return Response
     */
    public function index()
    {
        return view('home');
    }

}