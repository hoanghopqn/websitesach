<?php

namespace App\Repositories;

use App\Http\Resources\KhachHangCollection;
use App\Models\KhachHang;
use Illuminate\Support\Facades\Validator;

class KhachHangRepository
{
    public function getKhachHang($request)
    {
        if ($limit = $request->input('limit')) {};
        $query = new KhachHangCollection(KhachHang::getKhachHang()->where('khachhang.thangthai', 1)->paginate($limit));

        return response()->json([
            'khachhang' => $query,
        ], 200);
    }
    public function getsearchKH($request,$tenkh)
     {
        if ($limit = $request->input('limit')) {};
         $khachhang = KhachHang::getKhachHang()->where('khachhang.hoten','like','%'.$tenkh.'%')->paginate($limit); 
         $khachhang = new KhachHangCollection($khachhang);
     return response()->json([
         'khachhang'=>$khachhang,
     ],200) ;
     }
    public function storeKhachHang($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'hoten' => 'required',
            'sdt' => 'required',
            'diachi' => 'required',
            'ngaysinh' => 'required',
            'email' => 'required',
            'taikhoan' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $khachhang = KhachHang::create([
                'hoten' => $request->hoten,
                'diachi' => $request->diachi,
                'sdt' => $request->sdt,
                'taikhoan' => $request->taikhoan,
                'email' => $request->email,
                'ngaysinh' => $request->ngaysinh,
                'thangthai' => $request->thangthai,

            ]);
        }
        if ($khachhang) {
            return response()->json([
                "status" => 200,
                "message" => "Khach Hang create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showKhachHang($id)
    {
        $khachhang = KhachHang::find($id);
        if ($khachhang) {
            return response()->json([
                "status" => 200,
                "khachhang" => $khachhang,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editKhachHang($id)
    {
        $khachhang = KhachHang::find($id);
        if ($khachhang) {
            return response()->json([
                "status" => 200,
                "khachhang" => $khachhang,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateKhachHang($request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'hoten' => 'required',
            'sdt' => 'required',
            'diachi' => 'required',
            'ngaysinh' => 'required',
            'email' => 'required',
            'taikhoan' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $khachhang = KhachHang::find($id);
        }
        if ($khachhang) {
            $khachhang->update([
                'hoten' => $request->hoten,
                'diachi' => $request->diachi,
                'sdt' => $request->sdt,
                'taikhoan' => $request->taikhoan,
                'email' => $request->email,
                'ngaysinh' => $request->ngaysinh,
                'thangthai' => $request->thangthai,

            ]);
            return response()->json([
                "status" => 200,
                "message" => "khach hang updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyKhachHang($request, $id)
    {
        $khachhang = KhachHang::find($id);
        if ($khachhang) {
            $khachhang->delete();
            return response()->json([
                "status" => 200,
                "message" => "khach hang delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
