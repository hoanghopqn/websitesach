<?php

namespace App\Repositories;

use App\Http\Resources\NhanVienCollection;
use App\Models\NhanVien;
use Illuminate\Support\Facades\Validator;

class NhanVienRepository
{
    public function getNhanVien($request)
    {
        if ($limit = $request->input('limit')) {};
        $query = new NhanVienCollection(NhanVien::getNhanVien()->where('nhanvien.thangthai', 1)->paginate($limit));

        return response()->json([
            'status' => 200,
            'nhanvien' => $query,
        ], 200);
    }
    public function getsearchNV($request,$tennv)
     {
        if ($limit = $request->input('limit')) {};
         $nhanvien = NhanVien::getNhanVien()->where('nhanvien.hoten','like','%'.$tennv.'%')->paginate($limit); 
         $nhanvien = new NhanVienCollection($nhanvien);
     return response()->json([
         'nhanvien'=>$nhanvien,
     ],200) ;
     }
    public function storeNhanVien($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'hoten' => 'required',
            'sdt' => 'required',
            'diachi' => 'required',
            'ngaysinh' => 'required',
            'ngayvaolam' => 'required',
            'email' => 'required',
            'taikhoan' => 'required',
            'hinhanh' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $nhanvien = NhanVien::create([
                'hoten' => $request->hoten,
                'sdt' => $request->sdt,
                'diachi' => $request->diachi,
                'ngaysinh' => $request->ngaysinh,
                'ngayvaolam' => $request->ngayvaolam,
                'email' => $request->email,
                'taikhoan' => $request->taikhoan,
                'hinhanh' => $request->hinhanh,
                'thangthai' => $request->thangthai,

            ]);
        }
        if ($nhanvien) {
            return response()->json([
                "status" => 200,
                "message" => "Nhan Vien create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showNhanVien($id)
    {
        $nhanvien = NhanVien::find($id);
        if ($nhanvien) {
            return response()->json([
                "status" => 200,
                "nhanvien" => $nhanvien,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editNhanVien($id)
    {
        $nhanvien = NhanVien::find($id);
        if ($nhanvien) {
            return response()->json([
                "status" => 200,
                "nhanvien" => $nhanvien,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateNhanVien($request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'hoten' => 'required',
            'sdt' => 'required',
            'diachi' => 'required',
            'ngaysinh' => 'required',
            'ngayvaolam' => 'required',
            'email' => 'required',
            'taikhoan' => 'required',
            'hinhanh' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $nhanvien = NhanVien::find($id);
        }
        if ($nhanvien) {
            $nhanvien->update([
                'hoten' => $request->hoten,
                'sdt' => $request->sdt,
                'diachi' => $request->diachi,
                'ngaysinh' => $request->ngaysinh,
                'ngayvaolam' => $request->ngayvaolam,
                'email' => $request->email,
                'taikhoan' => $request->taikhoan,
                'hinhanh' => $request->hinhanh,
                'thangthai' => $request->thangthai,

            ]);
            return response()->json([
                "status" => 200,
                "message" => "Nhan Vien updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyNhanVien($request, $id)
    {
        $nhanvien = NhanVien::find($id);
        if ($nhanvien) {
            $nhanvien->delete();
            return response()->json([
                "status" => 200,
                "message" => "Nhan Vien delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }

}
