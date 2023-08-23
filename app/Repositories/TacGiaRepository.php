<?php

namespace App\Repositories;

use App\Http\Resources\TacGiaCollection;
use App\Models\TacGia;
use Illuminate\Support\Facades\Validator;

class TacGiaRepository
{
    public function getTacGia($request)
    {
        if ($limit = $request->input('limit')) {};
        $query = new TacGiaCollection(TacGia::getTacGia()->paginate($limit));

        return response()->json([
            'tacgia' => $query,
        ], 200);
    }
    public function getsearchTG($request,$tentg)
     {
        if ($limit = $request->input('limit')) {};
         $tacgia = TacGia::getTacGia()->where('tacgia.tentacgia','like','%'.$tentg.'%')->paginate($limit); 
         $tacgia = new TacGiaCollection($tacgia);
     return response()->json([
         'tacgia'=>$tacgia,
     ],200) ;
     }
    public function storeTacGia($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'tentacgia' => 'required',
            'tieusu' => 'required',
            'nuoc_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $tacgia = TacGia::create([
                'tentacgia' => $request->tentacgia,
                'tieusu' => $request->tieusu,
                'nuoc_id' => $request->nuoc_id,

            ]);
        }
        if ($tacgia) {
            return response()->json([
                "status" => 200,
                "message" => "Tác Giả create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showTacGia($id)
    {
        $tacgia = TacGia::find($id);
        if ($tacgia) {
            return response()->json([
                "status" => 200,
                "tacgia" => $TacGia,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editTacGia($id)
    {
        $tacgia = TacGia::find($id);
        if ($TacGia) {
            return response()->json([
                "status" => 200,
                "tacgia" => $TacGia,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Tác Giả Founds!",
            ], 404);

        }
    }
    public function updateTacGia($request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'tentacgia' => 'required',
            'tieusu' => 'required',
            'nuoc_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $tacgia = TacGia::find($id);
        }
        if ($tacgia) {
            $tacgia->update([
                'tentacgia' => $request->tentacgia,
                'tieusu' => $request->tieusu,
                'nuoc_id' => $request->nuoc_id,

            ]);
            return response()->json([
                "status" => 200,
                "message" => "Tác Giả updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyTacGia($request, $id)
    {
        $tacgia = TacGia::find($id);
        if ($tacgia) {
            $tacgia->delete();
            return response()->json([
                "status" => 200,
                "message" => "Tác Giả delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
