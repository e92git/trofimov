var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {

    var bower = 'vendor/bower_components';

    // sass
    mix.sass('*.scss', 'public/css/app.css');

    // fonts
    mix
        .copy(bower + '/bootstrap/fonts', 'public/fonts/bootstrap')
        .copy(bower + '/font-awesome/fonts', 'public/fonts')
        .copy('resources/assets/fonts', 'public/fonts');

    // css
    mix.styles([
        //"resources/assets/css/bootstrap.css",
        "public/css/app.css",
        //"resources/assets/css/freelancer.css",
        "resources/assets/css/animate.css",
        "resources/assets/css/style.css",
        "resources/assets/css/default.css"
    ], "public/css/app.css", './');

    // js
    mix.scripts([
        bower + "/jquery/dist/jquery.js",
        bower + "/bootstrap/dist/js/bootstrap.js",
        bower + "/jquery.easing/js/jquery.easing.js",
        bower + "/jquery.scrollTo/jquery.scrollTo.js",
        bower + "/wow/dist/wow.js",
        //bower + "/jstree/dist/jstree.js",
        "resources/assets/js/vendor_blue"
    ],'public/js/app.js', './' )
        .copy(bower + '/jstree/dist/themes', 'public/js/themes')
    ;

    //mix.version(["css/app.css","js/app.js"]);
});

