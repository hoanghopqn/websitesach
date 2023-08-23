<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\PhieuNhapSanPhamRepository;
use Illuminate\Http\Request;

class PhieuNhapSanPhamController extends Controller
{
    protected $phieunhapsanphamRepository;
    public function __construct(PhieuNhapSanPhamRepository $phieunhapsanphamRepository)
    {
        return $this->phieunhapsanphamRepository = $phieunhapsanphamRepository;
    }

    public function getsearchPN(Request $request,$maphieunhap)
    {
        return $this->phieunhapsanphamRepository->getsearchPN($request,$maphieunhap);
    }

    public function index(Request $request)
    {
        return $this->phieunhapsanphamRepository->getPhieuNhapSanPham($request);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->phieunhapsanphamRepository->storePhieuNhapSanPham($request);
    }
    public function edit($maphieunhap)
    {
        return $this->phieunhapsanphamRepository->editPhieuNhapSanPham($maphieunhap);
    }
    public function show($maphieunhap)
    {
        return $this->phieunhapsanphamRepository->showPhieuNhapSanPham($maphieunhap);
    }
    public function update(Request $request, string $maphieunhap)
    {
        return $this->phieunhapsanphamRepository->updatePhieuNhapSanPham($request, $maphieunhap);
    }
    public function destroy($maphieunhap)
    {
        return $this->phieunhapsanphamRepository->detroyPhieuNhapSanPham($maphieunhap);
    }
}
