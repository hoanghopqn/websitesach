<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\LoaiSanPhamRepository;
use Illuminate\Http\Request;

class LoaiSanPhamController extends Controller
{
    protected $loaisanphamRepository;
    public function __construct(LoaiSanPhamRepository $loaisanphamRepository)
    {
        return $this->loaisanphamRepository = $loaisanphamRepository;
    }

    public function index()
    {
        return $this->loaisanphamRepository->getLoaiSanPham();
    }
    public function show($id)
    {
        return $this->loaisanphamRepository->showLoaiSanPham($id);
    }
    public function update(Request $request, int $id)
    {
        return $this->loaisanphamRepository->updateLoaiSanPham($request, $id);
    }
}
