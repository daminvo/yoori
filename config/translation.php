<?php

$url = parse_url(env('APP_URL'));
$path = '/';

if(isset($url['path'])){
    $path = trim($url['path'], '/');
}

if($path == '/'){
    $path = 'admin/languages';
}else{
    $path = $path.'/admin/languages';
}


return [
    /*
    |--------------------------------------------------------------------------
    | Package driver
    |--------------------------------------------------------------------------
    |
    | The package supports different drivers for translation management.
    |
    | Supported: "file", "database"
    |
    */
    'driver' => 'file',

    /*
    |--------------------------------------------------------------------------
    | Route group configuration
    |--------------------------------------------------------------------------
    |
    | The package ships with routes to handle language management. Update the
    | configuration here to configure the routes with your preferred group options.
    |
    */
    'route_group_config' => [
        'middleware' => 'web',
    ],

    /*
    |--------------------------------------------------------------------------
    | Translation methods
    |--------------------------------------------------------------------------
    |
    | Update this array to tell the package which methods it should look for
    | when finding missing translations.
    |
    */
    'translation_methods' => ['trans', '__'],

    /*
    |--------------------------------------------------------------------------
    | Scan paths
    |--------------------------------------------------------------------------
    |
    | Update this array to tell the package which directories to scan when
    | looking for missing translations.
    |
    */
    'scan_paths' => [app_path(), resource_path()],

    /*
    |--------------------------------------------------------------------------
    | UI URL
    |--------------------------------------------------------------------------
    |
    | Define the URL used to access the language management too.
    |
    */
    'ui_url' => $path,

    /*
    |--------------------------------------------------------------------------
    | Database settings
    |--------------------------------------------------------------------------
    |
    | Define the settings for the database driver here.
    |
    */
    'database' => [

        'connection' => '',

        'languages_table' => '',

        'translations_table' => '',
    ],
];
