<?php

namespace App\Repositories;

use App\Http\Resources\CTDDHCollection;
use App\Models\CTDDH;
use Illuminate\Support\Facades\Validator;

class CTDDHRepository
{
    public function getCTDDH()
    {
        $query = new CTDDHCollection(CTDDH::getCTDDH()->get());

        return response()->json([
            'ctddh' => $query,
        ], 200);
    }
    public function storeCTDDH($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'ddh_id' => 'required',
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
            $ctddh = CTDDH::create([
                'ddh_id' => $request->ddh_id,
                'masp' => $request->masp,
                'soluong' => $request->soluong,
                'dongia' => $request->dongia,

            ]);
        }
        if ($ctddh) {
            return response()->json([
                "status" => 200,
                "message" => "CTDDH create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showCTDDH($ddh_id)
    {
        $ctddh = CTDDH::where('ctddh.ddh_id', $ddh_id)->get();
        if ($ctddh) {
            return response()->json([
                "status" => 200,
                "CTDDH" => $ctddh,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editCTDDH($ddh_id)
    {
        $ctddh = CTDDH::where('ctddh.ddh_id', $ddh_id)->get();
        if ($ctddh) {
            return response()->json([
                "status" => 200,
                "ctddh" => $ctddh,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function updateCTDDH($request, $ddh_id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'ddh_id' => 'required',
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
            $ctddh = CTDDH::where('ctddh.ddh_id', $ddh_id);
        }
        if ($ctddh) {
            $ctddh->update([
                'ddh_id' => $request->ddh_id,
                'masp' => $request->masp,
                'soluong' => $request->soluong,
                'dongia' => $request->dongia,

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
    public function detroyCTDDH($request, $ddh_id)
    {
        $ctddh = CTDDH::where('ctddh.ddh_id', $ddh_id);
        if ($ctddh) {
            $ctddh->delete();
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
