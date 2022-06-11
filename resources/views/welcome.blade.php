<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <title>Iznajmljivanje stanova</title>
        <style> 
            /* width */
            ::-webkit-scrollbar {
            width:10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
            background: #f1f1f1; 
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
            background: #888; 
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
            background: #555; 
            }
        </style>
        <script>
            
            if(localStorage.length != 0){
                if(localStorage.currentUser){
                    console.log('...')
                }
                else{
                    localStorage.clear();
                }
                
                

 
            }
            console.log(localStorage)
            if(localStorage.length == 0){
                let user_1 = {
                    isLogged: false
                }


                localStorage.setItem("currentUser",JSON.stringify(user_1));
            }

            
            
            var user = JSON.parse(localStorage.getItem('currentUser'));
            

            


            
            
        </script>
    </head>
    <body>

        <div id="app">

            <navbar></navbar> 
            <router-view/>


        </div>
        <script src="{{ asset('js/app.js') }}"></script>
        
    </body>
</html>
