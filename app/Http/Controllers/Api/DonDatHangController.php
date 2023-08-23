<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\DonDatHangRepository;
use Illuminate\Http\Request;

class DonDatHangController extends Controller
{
    protected $dondathangRepository;
    public function __construct(DonDatHangRepository $dondathangRepository)
    {
        return $this->dondathangRepository = $dondathangRepository;
    }
    public function ddhbytt(Request $request,int $trangthai)
    {
        return $this->dondathangRepository->getDonDatHangbyTT($request,$trangthai);
    }

    public function index(Request $request)
    {
        return $this->dondathangRepository->getDonDatHang($request);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->dondathangRepository->storeDonDatHang($request);
    }
    public function edit($id)
    {
        return $this->dondathangRepository->editDonDatHang($id);
    } 
    public function update(Request $request,$id)
    {
        return $this->dondathangRepository->updateDonDatHang($request, $id);
    }
    public function destroy($id)
    {
        return $this->dondathangRepository->detroyDonDatHang($id);
    }
}
