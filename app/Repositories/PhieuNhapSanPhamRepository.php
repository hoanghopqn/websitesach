<?php

namespace App\Repositories;

use App\Http\Resources\PhieuNhapSanPhamCollection;
use App\Models\PhieuNhapSanPham;
use Illuminate\Support\Facades\Validator;

class PhieuNhapSanPhamRepository
{
    public function getPhieuNhapSanPham($request)
    {
        if ($limit = $request->input('limit')) {};
        $query = new PhieuNhapSanPhamCollection(PhieuNhapSanPham::getPhieuNhapSanPham()->paginate($limit));

        return response()->json([
            'phieunhapsanpham' => $query,
        ], 200);
    }
    public function getsearchPN($request,$maphieunhap)
     {
       if ($limit = $request->input('limit')) {
       };
         $phieunhapsanpham = PhieuNhapSanPham::getPhieuNhapSanPham()->where('phieunhapsanpham.maphieunhap','like','%'.$maphieunhap.'%')->paginate($limit); 
         $phieunhapsanpham = new PhieuNhapSanPhamCollection($phieunhapsanpham);
     return response()->json([
         'phieunhapsanpham'=>$phieunhapsanpham
     ],200) ;
     }
    public function storePhieuNhapSanPham($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'maphieunhap' => 'required',
            'nhanvien_id' => 'required',
            'ngaynhap' => 'required',
            'tongtien' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $phieunhapsanpham = PhieuNhapSanPham::create([
                'maphieunhap' => $request->maphieunhap,
                'nhanvien_id' => $request->nhanvien_id,
                'ngaynhap' => $request->ngaynhap,
                'tongtien' => $request->tongtien,
            ]);
        }
        if ($phieunhapsanpham) {
            return response()->json([
                "status" => 200,
                "message" => "phieu nhap san pham create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showPhieuNhapSanPham($maphieunhap)
    {
        $phieunhapsanpham = PhieuNhapSanPham::where('phieunhapsanpham.maphieunhap', $maphieunhap)->get();
        if ($phieunhapsanpham) {
            return response()->json([
                "status" => 200,
                "PhieuNhapSanPham" => $phieunhapsanpham,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editPhieuNhapSanPham($maphieunhap)
    {
        $phieunhapsanpham = PhieuNhapSanPham::where('phieunhapsanpham.maphieunhap', $maphieunhap)->get();
        if ($phieunhapsanpham) {
            return response()->json([
                "status" => 200,
                "phieunhapsanpham" => $phieunhapsanpham,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Tác Giả Founds!",
            ], 404);

        }
    }
    public function updatePhieuNhapSanPham($request, $maphieunhap)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'maphieunhap' => 'required',
            'nhanvien_id' => 'required',
            'ngaynhap' => 'required',
            'tongtien' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $phieunhapsanpham = PhieuNhapSanPham::where('phieunhapsanpham.maphieunhap', $maphieunhap);
        }
        if ($phieunhapsanpham) {
            $phieunhapsanpham->update([
                'maphieunhap' => $request->maphieunhap,
                'nhanvien_id' => $request->nhanvien_id,
                'ngaynhap' => $request->ngaynhap,
                'tongtien' => $request->tongtien,
            ]);
            return response()->json([
                "status" => 200,
                'maphieunhap' => $phieunhapsanpham,
                "message" => "Giam Gia updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyPhieuNhapSanPham($request, $maphieunhap)
    {
        $phieunhapsanpham = PhieuNhapSanPham::where('phieunhapsanpham.maphieunhap', $maphieunhap)->get();
        if ($phieunhapsanpham) {
            $phieunhapsanpham->delete();
            return response()->json([
                "status" => 200,
                "message" => "phieu nhap delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
