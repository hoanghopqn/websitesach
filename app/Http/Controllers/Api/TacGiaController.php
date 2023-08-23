<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\TacGiaRepository;
use Illuminate\Http\Request;

class TacGiaController extends Controller
{
    protected $tacgiaRepository;
    public function __construct(TacGiaRepository $tacgiaRepository)
    {
        return $this->tacgiaRepository = $tacgiaRepository;
    }

    public function index(Request $request)
    {
        return $this->tacgiaRepository->getTacGia($request);
    }
    public function getsearchTG(Request $request,$tentg)
    {
        return $this->tacgiaRepository->getsearchTG($request,$tentg);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->tacgiaRepository->storeTacGia($request);
    }
    public function edit($id)
    {

        return $this->tacgiaRepository->editTacGia($id);
    }
    public function show($id)
    {
        return $this->tacgiaRepository->showTacGia($id);
    }
    public function update(Request $request, int $id)
    {
        return $this->tacgiaRepository->updateTacGia($request, $id);
    }
    public function destroy($id)
    {
        return $this->tacgiaRepository->detroyTacGia($id);
    }
}
