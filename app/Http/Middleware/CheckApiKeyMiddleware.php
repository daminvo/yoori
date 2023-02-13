<?php

namespace App\Http\Middleware;

use App\Traits\ApiReturnFormatTrait;
use Closure;
use Illuminate\Http\Request;

class CheckApiKeyMiddleware
{
    use ApiReturnFormatTrait;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->hasHeader('apiKey')):
            if($request->header('apiKey') == settingHelper('api_key_app')):
                return $next($request);
            endif;
        endif;
        return $next($request);
    }
}
