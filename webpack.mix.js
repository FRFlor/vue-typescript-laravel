const mix = require('laravel-mix');

mix.ts('resources/js/app.ts', 'public/js').sass('resources/sass/app.scss', 'public/css');
