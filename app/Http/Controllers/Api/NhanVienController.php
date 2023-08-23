<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\NhanVienRepository;
use Illuminate\Http\Request;

class NhanVienController extends Controller
{
    protected $nhanvienRepository;
    public function __construct(NhanVienRepository $nhanvienRepository)
    {
        return $this->nhanvienRepository = $nhanvienRepository;
    }
    
    public function index(Request $request)
    {
        return $this->nhanvienRepository->getNhanVien($request);
    }

    public function getsearchNV(Request $request,$tennv)
    {
        return $this->nhanvienRepository->getsearchNV($request,$tennv);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->nhanvienRepository->storeNhanVien($request);
    }
    public function edit($id)
    {

        return $this->nhanvienRepository->editNhanVien($id);
    }
    public function show($id)
    {
        return $this->nhanvienRepository->showNhanVien($id);
    }
    public function update(Request $request, int $id)
    {
        return $this->nhanvienRepository->updateNhanVien($request, $id);
    }
    public function destroy($id)
    {
        return $this->nhanvienRepository->detroyNhanVien($id);
    }
}
