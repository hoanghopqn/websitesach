<?php

namespace App\Repositories;

use App\Http\Resources\LoaiSanPhamCollection;
use App\Models\LoaiSanPham;

class LoaiSanPhamRepository
{
    public function getLoaiSanPham()
    {
        $query = new LoaiSanPhamCollection(LoaiSanPham::getLoaiSanPham()->get());

        return response()->json([
            'loaisanpham' => $query,
        ], 200);
    }
    public function showLoaiSanPham($id)
    {
        $loaisanpham = LoaiSanPham::find($id);
        if ($tacgia) {
            return response()->json([
                "status" => 200,
                "loaisanpham" => $loaisanpham,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateLoaiSanPham($request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'tenloaisp' => 'required',
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
                'tenloaisp' => $request->tenloaisp,

            ]);
            return response()->json([
                "status" => 200,
                "message" => "tenloaisp updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
