<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Review;
use App\Http\Resources\display;

class Reviewcontroller extends Controller{
    public function index()
    {
    	return view('footer');
    } 


    public function display(){
		$reviews = Review::all()->random(3);
		return display::collection($reviews);
	}
}
