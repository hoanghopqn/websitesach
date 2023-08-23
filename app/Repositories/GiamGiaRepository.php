<?php

namespace App\Repositories;

use App\Http\Resources\GiamGiaCollection;
use App\Models\GiamGia;
use Illuminate\Support\Facades\Validator;

class GiamGiaRepository
{

    public function getGiamGia($request)
    {
        if ($limit = $request->input('limit')) {

        };
        $query = new GiamGiaCollection(GiamGia::getGiamGia()->paginate($limit));

        return response()->json([
            'giamgia' => $query,
        ], 200);
    }
    public function storeGiamGia($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [ 
            'masp' => 'required',
            'nhanvien_id' => 'required',
            'noidung' => 'required',
            'ngaybd' => 'required',
            'ngaykt' => 'required',
            'phantram' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $giamgia = GiamGia::create([ 
                'masp' => $request->masp,
                'nhanvien_id' => $request->nhanvien_id,
                'noidung' => $request->noidung,
                'ngaybd' => $request->ngaybd,
                'ngaykt' => $request->ngaykt,
                'phantram' => $request->phantram,

            ]);
        }
        if ($giamgia) {
            return response()->json([
                "status" => 200,
                "message" => "Giammr Giá create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showGiamGia($madot)
    {
        $giamgia = GiamGia::where('giamgia.id', $madot)->get();
        if ($giamgia) {
            return response()->json([
                "status" => 200,
                "giamgia" => $giamgia,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editGiamGia($madot)
    {
        $giamgia = GiamGia::where('giamgia.id', $madot)->get();
        if ($giamgia) {
            return response()->json([
                "status" => 200,
                "giamgia" => $giamgia,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateGiamGia($request, $madot)
    {
        $input = $request->all();
        $validator = Validator::make($input, [ 
            'masp' => 'required',
            'nhanvien_id' => 'required',
            'noidung' => 'required',
            'ngaybd' => 'required',
            'ngaykt' => 'required',
            'phantram' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $giamgia = GiamGia::where('giamgia.id', $madot);
        }
        if ($giamgia) {
            $giamgia->update([ 
                'masp' => $request->masp,
                'nhanvien_id' => $request->nhanvien_id,
                'noidung' => $request->noidung,
                'ngaybd' => $request->ngaybd,
                'ngaykt' => $request->ngaykt,
                'phantram' => $request->phantram,

            ]);
            return response()->json([
                "status" => 200,
                "message" => "Giam Gia updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyGiamGia($request, $id)
    {
        $giamgia = GiamGia::where('giamgia.id', $madot);
        if ($giamgia) {
            $giamgia->delete();
            return response()->json([
                "status" => 200,
                "message" => "Giam Gia delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
