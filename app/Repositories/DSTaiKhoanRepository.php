<?php

namespace App\Repositories;

use App\Http\Resources\DSTaiKhoanCollection;
use App\Models\DSTaiKhoan;
use App\Models\NhanVien;
use App\Models\KhachHang;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class DSTaiKhoanRepository
{
    public function getDSTaiKhoan($request)
    {
        if ($limit = $request->input('limit')) {};
        $query = new DSTaiKhoanCollection(DSTaiKhoan::getDSTaiKhoan()->paginate($limit));

        return response()->json([
            'dstaikhoan' => $query,
        ], 200);
    }
    public function storeDSTaiKhoan($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'taikhoan' => 'required',
            'matkhau' => 'required',
            'quyen_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $dstaikhoan = DSTaiKhoan::create([
                'taikhoan' => $request->taikhoan,
                'matkhau' => $request->matkhau,
                'quyen_id' => $request->quyen_id,
                'thangthai' => $request->thangthai,

            ]);
        }
        if ($dstaikhoan) {
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
    public function showDSTaiKhoan($taikhoan)
    {
        $dstaikhoan = DSTaiKhoan::where('dstaikhoan.taikhoan', $taikhoan)->get();
        if ($dstaikhoan) {
            return response()->json([
                "status" => 200,
                "dstaikhoan" => $dstaikhoan,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateDSTaiKhoan($request, $taikhoan)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'taikhoan' => 'required',
            'matkhau' => 'required',
            'quyen_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $dstaikhoan = DSTaiKhoan::where('dstaikhoan.taikhoan', $taikhoan);
        }
        if ($dstaikhoan) {
            $dstaikhoan->update([
                'taikhoan' => $request->taikhoan,
                'matkhau' => $request->matkhau,
                'quyen_id' => $request->quyen_id,
                'thangthai' => $request->thangthai,

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
    public function detroyDSTaiKhoan($request, $taikhoan)
    {
        $dstaikhoan = DSTaiKhoan::where('dstaikhoan.taikhoan', $taikhoan);
        if ($dstaikhoan) {
            $dstaikhoan->delete();
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
    public function getsearchDSTK($request,$taikhoan)
     {
       if ($limit = $request->input('limit')) {
       }; 
         $dstaikhoan = DSTaiKhoan::getDSTaiKhoan()->where('dstaikhoan.taikhoan','like','%'.$taikhoan.'%')->paginate($limit); 
         $dstaikhoan = new DSTaiKhoanCollection($dstaikhoan);
     return response()->json([
         'dstaikhoan'=>$dstaikhoan
     ],200) ;
     }
    public function login($request)
    {

        $tkuser = DSTaiKhoan::where('dstaikhoan.taikhoan', $request->taikhoan)->first();

        if ($request->taikhoan == '' || $request->matkhau == '') {
            return response()->json(
                [
                    'message' => 'taikhoan or password can not be null!',
                ],
                404
            );
        }

        if (!$tkuser || $request->matkhau != $tkuser->matkhau) {
            return response()->json(
                [
                    'message' => 'Email or password is incorrect. Please try again!'
                ],
                404
            );
        }
        if ($tkuser->quyen_id === 2) {
            $user =  KhachHang::where('khachhang.taikhoan', $tkuser->taikhoan)->first();
        }
        else{
            $user =  NhanVien::where('nhanvien.taikhoan', $tkuser->taikhoan)->first();
        }

        return response()->json(
            [
                'message' => 'Login success!',
                'user' => $user, 
                'quyen' => $tkuser->quyen_id, 
            ],
            200
        );
    }
}
