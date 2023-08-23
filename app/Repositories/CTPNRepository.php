<?php

namespace App\Repositories;

use App\Http\Resources\CTPNCollection;
use App\Models\CTPN;
use Illuminate\Support\Facades\Validator;

class CTPNRepository
{
    public function getCTPN()
    {
        $query = new CTPNCollection(CTPN::getCTPN()->get());

        return response()->json([
            'ctpn' => $query,
        ], 200);
    }
    public function storeCTPN($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'phieunhap_id ' => 'required',
            'masp' => 'required',
            'soluong' => 'required',
            'dongia' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $ctpn = CTPN::create([
                'phieunhap_id' => $request->phieunhap_id,
                'masp ' => $request->masp,
                'soluong' => $request->soluong,
                'dongia' => $request->dongia,
            ]);
        }
        if ($ctpn) {
            return response()->json([
                "status" => 200,
                "message" => "CTPN create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showCTPN($phieunhap_id)
    {
        $ctpn = CTPN::where('ctpn.phieunhap_id ', $phieunhap_id)->get();
        if ($ctpn) {
            return response()->json([
                "status" => 200,
                "ctpn" => $ctpn,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editCTPN($phieunhap_id)
    {
        $ctpn = CTPN::where('ctpn.phieunhap_id ', $phieunhap_id)->get();
        if ($ctpn) {
            return response()->json([
                "status" => 200,
                "ctpn" => $ctpn,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateCTPN($request, $phieunhap_id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'phieunhap_id ' => 'required',
            'masp' => 'required',
            'soluong' => 'required',
            'dongia' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $ctpn = CTPN::where('ctpn.phieunhap_id ', $phieunhap_id);
        }
        if ($ctpn) {
            $ctpn->update([
                'phieunhap_id' => $request->phieunhap_id,
                'masp ' => $request->masp,
                'soluong' => $request->soluong,
                'dongia' => $request->dongia,
            ]);
            return response()->json([
                "status" => 200,
                "message" => "PHIEU NHAP updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyCTPN($request, $id)
    {
        $ctpn = CTPN::where('ctpn.phieunhap_id ', $phieunhap_id);
        if ($ctpn) {
            $ctpn->delete();
            return response()->json([
                "status" => 200,
                "message" => "PHIEU NHAP delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
