<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\DSTaiKhoanRepository;
use Illuminate\Http\Request;

class DSTaiKhoanController extends Controller
{

    protected $dstaikhoanRepository;
    public function __construct(DSTaiKhoanRepository $dstaikhoanRepository)
    {
        return $this->dstaikhoanRepository = $dstaikhoanRepository;
    }
    

    public function getsearchDSTK(Request $request,$tenkhoan)
    {
        return $this->dstaikhoanRepository->getsearchDSTK($request,$tenkhoan);
    }
    public function index(Request $request)
    {
        return $this->dstaikhoanRepository->getDSTaiKhoan($request);
    }
    public function login(Request $request)
    {
        return $this->dstaikhoanRepository->login($request);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->dstaikhoanRepository->storeDSTaiKhoan($request);
    }
    public function edit($taikhoan)
    {

        return $this->dstaikhoanRepository->editDSTaiKhoan($taikhoan);
    }
    public function show($taikhoan)
    {
        return $this->dstaikhoanRepository->showDSTaiKhoan($taikhoan);
    }
    public function update(Request $request, string $taikhoan)
    {
        return $this->dstaikhoanRepository->updateDSTaiKhoan($request, $taikhoan);
    }
    public function destroy($taikhoan)
    {
        return $this->dstaikhoanRepository->detroyGiamGia($taikhoan);
    }
}
