<?php

namespace App\Http\Middleware;

use closure;

class Cors
{

	public function handle($request, Closure $next)
	{
		header("Access-Control-Allow-Origin: *");


		$headers =	[
			'Access-Control-Allow-Methods'	=> 'POST, GET, OPTION, PUT, DELETE',
			'Access-Control-Allow-Headers' => 'Content-Type, X-Auth-Token, Origin, Authorization',
			'Access-Control-Allow-Credentials' => true,
		];
		if($request->getMethod() =="OPTIONS"){
			return response()->json('OK',200,$headers);
		}
		$response = $next($request);
		foreach ($headers as $key => $value) {
				$response->header($key,$value);
			# code...
		}
		return $response;
	}

}
?>