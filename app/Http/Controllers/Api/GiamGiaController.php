<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\GiamGiaRepository;
use Illuminate\Http\Request;

class GiamGiaController extends Controller
{
    protected $giamgiaRepository;
    public function __construct(GiamGiaRepository $giamgiaRepository)
    {
        return $this->giamgiaRepository = $giamgiaRepository;
    }

    public function index(Request $request)
    {
        return $this->giamgiaRepository->getGiamGia($request);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->giamgiaRepository->storeGiamGia($request);
    }
    public function edit($madot)
    {

        return $this->giamgiaRepository->editGiamGia($madot);
    }
    public function show($madot)
    {
        return $this->giamgiaRepository->showGiamGia($madot);
    }
    public function update(Request $request, string $madot)
    {
        return $this->giamgiaRepository->updateGiamGia($request, $madot);
    }
    public function destroy($madot)
    {
        return $this->giamgiaRepository->detroyGiamGia($madot);
    }
}
