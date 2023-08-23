<?php

namespace App\Repositories;

use App\Http\Resources\DonDatHangCollection;
use App\Models\DonDatHang;
use App\Models\CTDDH;
use Illuminate\Support\Facades\Validator;

class DonDatHangRepository
{
    public function getDonDatHangbyTT($request,$trangnthai)
    {
        $dondathang =DonDatHang::getDonDatHang()->where('dondathang.thangthai',$trangnthai);
        if ($limit = $request->input('limit')) {};
        if ($user = $request->input('user')) {
            $dondathang->where('dondathang.khachhang_id', $user);
        } 
        $dondathang = $dondathang->paginate($limit);
        $dondathang = new DonDatHangCollection($dondathang);

        return response()->json([
            'dondathang' => $dondathang, 
        ], 200);
    }
    public function getDonDatHang($request)
    {
        if ($limit = $request->input('limit')) {}; 
        $dondathang = new DonDatHangCollection(DonDatHang::getDonDatHang()->paginate($limit));
         
        return response()->json([
            'dondathang' => $dondathang,
        ], 200);
    }public function storeDonDatHang($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'nhanvien_id' => 'required',
            'khachhang_id' => 'required',
            'diachi' => 'required',
            'sdt' => 'required',
            'ghichu' => 'required',
            'tongtien' => 'required',
            'thangthai' => 'required',
            'thoigiandat' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            
            $dondathang = DonDatHang::create([
                'nhanvien_id' => $request->nhanvien_id,
                'khachhang_id' => $request->khachhang_id,
                'diachi' => $request->diachi,
                'sdt' => $request->sdt,
                'ghichu' => $request->ghichu,
                'tongtien' => $request->tongtien,
                'thangthai' => $request->thangthai,
                'thoigiandat' => $request->thoigiandat,

            ]);
        }
        if ($dondathang) {
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
    public function showDonDatHang($id)
    {
        $dondathang = DonDatHang::find($id);
        if ($dondathang) {
            return response()->json([
                "status" => 200,
                "DonDatHang" => $dondathang,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editDonDatHang($id)
    {
        $dondathang = DonDatHang::find($id);
        if ($dondathang) {
            return response()->json([
                "status" => 200,
                "DonDatHang" => $dondathang,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateDonDatHang($request, $id)
    { 
        $input = $request->all();
        $validator = Validator::make($input, [
            'nhanvien_id' => 'required',
            'khachhang_id' => 'required',
            'diachi' => 'required',
            'sdt' => 'required',
            'ghichu' => 'required',
            'tongtien' => 'required',
            'thangthai' => 'required',
            'thoigiandat' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $dondathang = DonDatHang::find($id);
        }
        if ($dondathang) {
            $dondathang->update([
                'nhanvien_id' => $request->nhanvien_id,
                'khachhang_id' => $request->khachhang_id,
                'diachi' => $request->diachi,
                'sdt' => $request->sdt,
                'ghichu' => $request->ghichu,
                'tongtien' => $request->tongtien,
                'thangthai' => $request->thangthai,
                'thoigiandat' => $request->thoigiandat,

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
    public function detroyDonDatHang($request, $id)
    {
        $dondathang = DonDatHang::find($id);
        if ($dondathang) {
            $dondathang->delete();
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
