<?php

namespace App\Providers;

use App\Models\Language;
use App\Models\Setting;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use DB;
use Illuminate\Support\Str;
use function app_config;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        Config::set('app.locale', 'en');

        try {
            DB::connection()->getPdo();
            if (!isInstalled()):
                return response()->view('install.index');
            endif;
        } catch (\Exception $e) {
            return redirect('install');
        }

        Schema::defaultStringLength(191);
        if (Schema::hasTable('languages') && Schema::hasTable('settings')):
            //configuration
            app_config();
            mail_config();
            pwa_config();
            update_version();
        endif;
    }
}
