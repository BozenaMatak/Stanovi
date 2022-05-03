<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Iznajmljivanje stanova</title>
        <style>
            body{
                margin: 0;
                padding: 0;

            }
        </style>



    </head>
    <body>

        <div id="app">
            <navbar></navbar>
            <div class="container">
                <router-view/>
            </div>

        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
