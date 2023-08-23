<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\CTDDHRepository;
use Illuminate\Http\Request;

class CTDDHController extends Controller
{
    protected $ctddhRepository;
    public function __construct(CTDDHRepository $ctddhRepository)
    {
        return $this->ctddhRepository = $ctddhRepository;
    }

    public function index()
    {
        return $this->ctddhRepository->getCTDDH();
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->ctddhRepository->storeCTDDH($request);
    }
    public function edit($ddh_id)
    {

        return $this->ctddhRepository->editCTDDH($ddh_id);
    }
    public function show($ddh_id)
    {
        return $this->ctddhRepository->showCTDDH($ddh_id);
    }
    public function update(Request $request, string $ddh_id)
    {
        return $this->ctddhRepository->updateCTDDH($request, $ddh_id);
    }
    public function destroy($ddh_id)
    {
        return $this->ctddhRepository->detroyCTDDH($ddh_id);
    }
}
