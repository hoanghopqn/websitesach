<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\KhachHangRepository;
use Illuminate\Http\Request;

class KhachHangController extends Controller
{
    protected $khachhangRepository;
    public function __construct(KhachHangRepository $khachhangRepository)
    {
        return $this->khachhangRepository = $khachhangRepository;
    }
    
    public function index(Request $request)
    {
        return $this->khachhangRepository->getKhachHang($request);
    }
    public function getsearchKH(Request $request,$tenkh)
    {
        return $this->khachhangRepository->getsearchKH($request,$tenkh);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->khachhangRepository->storeKhachHang($request);
    }
    public function edit($id)
    {

        return $this->khachhangRepository->editKhachHang($id);
    }
    public function show($id)
    {
        return $this->khachhangRepository->showKhachHang($id);
    }
    public function update(Request $request, int $id)
    {
        return $this->khachhangRepository->updateKhachHang($request, $id);
    }
    public function destroy($id)
    {
        return $this->khachhangRepository->detroyKhachHang($id);
    }
}
