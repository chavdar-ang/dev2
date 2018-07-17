<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class PublicController extends Controller
{
	public function home()
    {
    	// $events = \App\Event::with('theme.likeCount', 'theme.isLiked', 'theme.company')->get();
    	//$categories = \App\Category::all();
    	return view('home');
    }

    // Verify account
    public function verify($token) {

    	User::where('token', $token)->firstOrFail()
    		->update(['token' => null]);

    	return redirect()->route('home');
    }

	public function themes()
    {
    	$themes = \App\Theme::with('isLiked')->get();
    	dd($themes);
    	return view('themes', compact('themes'));
    }

    public function events()
    {
    	$events = \App\Event::with('theme.likeCount', 'theme.company.company_detail')->get();
    	return view('events', compact('events'));
    }

    public function venues()
    {
    	$venues = \App\Venue::with('company', 'isLiked')->withCount('likes')->get();
    	return view('venues', compact('venues'));
    }

    public function company()
    {
		$company = \App\Company::where('slug', request()->slug)->first();
    	return view('company', compact('company'));
    }

    public function user()
    {
    	$user = \App\User::find(request()->id);
    	return view('user', compact('user'));
    }

    public function showTheme()
    {
    	$theme = \App\Theme::where('id', request()->id)->with('company')->first();
    	return view('theme', compact('theme'));
    }

    public function showEvent()
    {
    	$event = \App\Event::where('id', request()->id)->with('teachers', 'theme.company', 'theme.comments.user')->first();
    	return view('event', compact('event'));
    }

    public function showVenue()
    {
    	$venue = \App\Venue::where('id', request()->id)->with('company', 'comments.user')->first();
    	$images = $venue->venue_images;
    	return view('venue', compact('venue', 'images'));
    }

    public function categories() {
    	return \DB::table('categories')->get();
    }

    public function notVerified()
    {
    	return view('verify');
    }   
}
