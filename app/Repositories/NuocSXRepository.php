<?php

namespace App\Repositories;

use App\Http\Resources\NuocSXCollection;
use App\Models\NuocSX;
use Illuminate\Support\Facades\Validator;

class NuocSXRepository
{ 
    public function getNuocSX($request)
    {
        if ($limit = $request->input('limit')) {}; 
        $query = new NuocSXCollection(NuocSX::getNuocSX()->paginate($limit));

        return response()->json([
            'nuocsx' => $query,
        ], 200);
    }
    public function getsearchN($request,$tennuoc)
     {
        if ($limit = $request->input('limit')) {};
         $nuoc = NuocSX::getNuocSX()->where('nuocxuatban.tennuoc','like','%'.$tennuoc.'%')->paginate($limit); 
         $nuoc = new NuocSXCollection($nuoc);
     return response()->json([
         'nuoc'=>$nuoc,
     ],200) ;
     }
    public function storeNuocSX($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'tennuoc' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $nuocsx = NuocSX::create([
                'tennuoc' => $request->tennuoc,

            ]);
        }
        if ($nuocsx) {
            return response()->json([
                "status" => 200,
                "message" => "Nước create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showNuocSX($id)
    {
        $nuocsx = NuocSX::find($id);
        if ($nuocsx) {
            return response()->json([
                "status" => 200,
                "NuocSX" => $nuocsx,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Nước Founds!",
            ], 404);

        }
    }
    public function editNuocSX($id)
    {
        $nuocsx = NuocSX::find($id);
        if ($nuocsx) {
            return response()->json([
                "status" => 200,
                "NuocSX" => $nuocsx,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Nước Founds!",
            ], 404);

        }
    }
    public function updateNuocSX($request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'tennuoc' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $nuocsx = NuocSX::find($id);
        }
        if ($nuocsx) {
            $nuocsx->update([
                'tennuoc' => $request->tennuoc,

            ]);
            return response()->json([
                "status" => 200,
                "message" => "Nước updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyNuocSX($request, $id)
    {
        $nuocsx = NuocSX::find($id);
        if ($nuocsx) {
            $nuocsx->delete();
            return response()->json([
                "status" => 200,
                "message" => "Nước delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
