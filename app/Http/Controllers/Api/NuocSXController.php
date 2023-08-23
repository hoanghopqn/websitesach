<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\NuocSXRepository;
use Illuminate\Http\Request;

class NuocSXController extends Controller
{
    protected $nuocsxRepository;
    public function __construct(NuocSXRepository $nuocsxRepository)
    {
        return $this->nuocsxRepository = $nuocsxRepository;
    }

    public function index(Request $request)
    {
        return $this->nuocsxRepository->getNuocSX($request);
    }
    public function getsearchN(Request $request,$tennuoc)
    {
        return $this->nuocsxRepository->getsearchN($request,$tennuoc);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->nuocsxRepository->storeNuocSX($request);
    }
    public function edit($id)
    {

        return $this->nuocsxRepository->editNuocSX($id);
    }
    public function show($id)
    {
        return $this->nuocsxRepository->showNuocSX($id);
    }
    public function update(Request $request, int $id)
    {
        return $this->nuocsxRepository->updateNuocSX($request, $id);
    }
    public function destroy($id)
    {
        return $this->nuocsxRepository->detroyNuocSX($id);
    }
}
