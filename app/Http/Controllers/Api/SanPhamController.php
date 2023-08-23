<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\SanPhamRepository;
use Illuminate\Http\Request;

class SanPhamController extends Controller
{
    protected $sanphamRepository;
    public function __construct(SanPhamRepository $sanphamRepository)
    {
        $this->sanphamRepository = $sanphamRepository;
    }
    public function getSanPhamSale(Request $request)
    {
        return $this->sanphamRepository->getSanPhamSale($request);
    }

    public function getRecommend(Request $request)
    {
        return $this->sanphamRepository->getRecommend($request);
    }
    public function getPopular(Request $request)
    {
        return $this->sanphamRepository->getPopular($request);
    }

    public function getSanPhamAll(Request $request)
    {
        return $this->sanphamRepository->getSanPhamAll($request);
    }
    
    public function getSanPhamDetails($masp)
    {
        return $this->sanphamRepository->getSanPhamDetails($masp);
    } 
    public function getSanPhambyTheLoai($loaisanpham_id)
    {
        return $this->sanphamRepository->getSanPhambyTheLoai($loaisanpham_id);
    }
    public function getsearchDetails(Request $request,$tensp)
    {
        return $this->sanphamRepository->getsearchDetails($request,$tensp);
    }
    public function getAuthorCategory()
    {
        return $this->sanphamRepository->getAuthorCategory();
    }  
    public function index(Request $request)
    { 
        return $this->sanphamRepository->getSanPham($request);
    } 
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->sanphamRepository->storeSanPham($request);
    }
    public function edit($masp)
    {

        return $this->sanphamRepository->editSanPham($masp);
    }
    public function show($masp)
    {
        return $this->sanphamRepository->showSanPham($masp);
    }
    public function update(Request $request, $masp)
    {
        return $this->sanphamRepository->updateSanPham($request, $masp);
    }
    public function destroy($id)
    {
        return $this->sanphamRepository->detroySanPham($id);
    }
}
