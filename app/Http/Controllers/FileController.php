<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function onUpload(Request $request){
        try{

               $file = $request->file('img');
               $file_name =$file->getClientOriginalName(); 
               $file->move(public_path('images'), $file_name);
               return response()->json([
                   'message'=>'File uploaded successfully!'
               ], 200);

        }catch(\Exception $e){
            return response()->json([
                'message'=>$e->getMessage()
            ]);
        }       
    }
}
